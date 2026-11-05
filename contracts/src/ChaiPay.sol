// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {SignatureChecker} from "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import {Ownable2Step, Ownable} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/// @notice Chainlink CRE receiver interface (KeystoneForwarder calls onReport).
interface IReceiver is IERC165 {
    function onReport(bytes calldata metadata, bytes calldata report) external;
}

/// @title ChaiPay
/// @notice Scan any UPI QR, pay in USDT, merchant receives INR.
///
/// Flow:
///   1. Payer tops up an internal USDT balance once (deposit / depositFor / depositWithPermit).
///   2. Payer signs an EIP-712 `Pay` intent. A relayer submits it and pays the gas; the payer
///      never holds WBT. USDT moves from the payer's balance into an escrowed order.
///   3. An allowlisted liquidity provider (LP) claims the order and pays the merchant in INR over UPI.
///   4. The verifier (Chainlink CRE forwarder) confirms the UPI payout and the escrow releases
///      USDT to the LP, minus a small fee that funds the relayer's gas.
///   5. If nobody claims, or the LP fails to pay inside the claim window, anyone can refund the
///      order back to the payer's balance.
///
/// Nobody custodies the payer's funds: USDT only leaves escrow against a verified UPI payout,
/// or goes back to the payer.
contract ChaiPay is EIP712, Ownable2Step, ReentrancyGuard, IReceiver {
    using SafeERC20 for IERC20;

    // ------------------------------------------------------------------ types

    enum Status {
        None,
        Open,
        Claimed,
        Fulfilled,
        Refunded
    }

    struct Order {
        address payer;
        address lp;
        uint128 usdtAmount;
        uint64 inrPaise; // INR amount in paise (₹20 = 2000)
        uint40 createdAt;
        uint40 expiresAt; // an Open order is refundable after this
        uint40 claimDeadline; // a Claimed order is refundable after this
        Status status;
        bytes32 payeeHash; // keccak256 of the merchant's UPI VPA (e.g. "chaiwala@okaxis")
        bytes32 utrHash; // keccak256 of the UPI transaction reference, set on fulfill
    }

    struct PayIntent {
        address payer;
        bytes32 payeeHash;
        uint64 inrPaise;
        uint128 usdtAmount;
        uint256 nonce;
        uint256 deadline;
    }

    // ------------------------------------------------------------- constants

    bytes32 public constant PAY_TYPEHASH = keccak256(
        "Pay(address payer,bytes32 payeeHash,uint64 inrPaise,uint128 usdtAmount,uint256 nonce,uint256 deadline)"
    );
    bytes32 public constant WITHDRAW_TYPEHASH =
        keccak256("Withdraw(address payer,address to,uint256 amount,uint256 nonce,uint256 deadline)");

    uint16 public constant MAX_FEE_BPS = 100; // 1% hard cap

    // ----------------------------------------------------------------- state

    IERC20 public immutable usdt;

    address public verifier; // CRE KeystoneForwarder (or a fallback oracle key for local demos)
    address public feeRecipient; // relayer operator; fee pays for gas
    uint16 public feeBps;
    uint40 public orderTtl = 15 minutes;
    uint40 public claimWindow = 10 minutes;
    uint128 public maxOrderUsdt; // per-order cap to bound damage from a leaked signature

    uint256 public nextOrderId = 1;

    mapping(address => bool) public isLp;
    mapping(address => uint256) public balanceOf;
    mapping(address => uint256) public nonces;
    mapping(uint256 => Order) internal _orders;

    // ---------------------------------------------------------------- events

    event Deposited(address indexed payer, address indexed from, uint256 amount);
    event Withdrawn(address indexed payer, address indexed to, uint256 amount);
    event OrderOpened(
        uint256 indexed orderId, address indexed payer, bytes32 indexed payeeHash, uint64 inrPaise, uint128 usdtAmount
    );
    event OrderClaimed(uint256 indexed orderId, address indexed lp, uint40 claimDeadline);
    event OrderFulfilled(uint256 indexed orderId, address indexed lp, bytes32 utrHash, uint256 lpAmount, uint256 fee);
    event OrderRefunded(uint256 indexed orderId, address indexed payer, uint256 amount);
    event LpSet(address indexed lp, bool allowed);
    event VerifierSet(address indexed verifier);
    event FeeSet(address indexed recipient, uint16 bps);
    event WindowsSet(uint40 orderTtl, uint40 claimWindow);
    event MaxOrderSet(uint128 maxOrderUsdt);

    // ---------------------------------------------------------------- errors

    error ZeroAmount();
    error InsufficientBalance();
    error SignatureExpired();
    error InvalidSignature();
    error BadNonce();
    error OrderTooLarge();
    error NotLp();
    error NotVerifier();
    error WrongStatus(Status actual);
    error OrderExpired();
    error NotRefundableYet();
    error FeeTooHigh();
    error ZeroAddress();

    // ----------------------------------------------------------- constructor

    constructor(
        IERC20 usdt_,
        address owner_,
        address verifier_,
        address feeRecipient_,
        uint16 feeBps_,
        uint128 maxOrderUsdt_
    ) EIP712("ChaiPay", "1") Ownable(owner_) {
        if (address(usdt_) == address(0) || feeRecipient_ == address(0)) revert ZeroAddress();
        if (feeBps_ > MAX_FEE_BPS) revert FeeTooHigh();
        usdt = usdt_;
        verifier = verifier_;
        feeRecipient = feeRecipient_;
        feeBps = feeBps_;
        maxOrderUsdt = maxOrderUsdt_;
    }

    // ------------------------------------------------------------- deposits

    /// @notice Top up your own balance (needs a prior `approve`).
    function deposit(uint256 amount) external nonReentrant {
        _deposit(msg.sender, msg.sender, amount);
    }

    /// @notice Top up someone else's balance — e.g. an exchange withdrawal or a friend sending you USDT.
    function depositFor(address payer, uint256 amount) external nonReentrant {
        if (payer == address(0)) revert ZeroAddress();
        _deposit(payer, msg.sender, amount);
    }

    /// @notice Gasless top-up when the token supports EIP-2612. Anyone (the relayer) can submit.
    /// @dev The permit call is wrapped in try/catch so a front-run permit can't grief the deposit.
    function depositWithPermit(address payer, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
        external
        nonReentrant
    {
        try IERC20Permit(address(usdt)).permit(payer, address(this), amount, deadline, v, r, s) {} catch {}
        _deposit(payer, payer, amount);
    }

    function _deposit(address payer, address from, uint256 amount) internal {
        if (amount == 0) revert ZeroAmount();
        uint256 before = usdt.balanceOf(address(this));
        usdt.safeTransferFrom(from, address(this), amount);
        uint256 received = usdt.balanceOf(address(this)) - before; // fee-on-transfer safe
        balanceOf[payer] += received;
        emit Deposited(payer, from, received);
    }

    // ------------------------------------------------------------------- pay

    /// @notice Submit a payer-signed intent. Called by the relayer, who pays the gas.
    function pay(PayIntent calldata p, bytes calldata signature) external nonReentrant returns (uint256 orderId) {
        if (block.timestamp > p.deadline) revert SignatureExpired();
        if (p.usdtAmount == 0 || p.inrPaise == 0) revert ZeroAmount();
        if (maxOrderUsdt != 0 && p.usdtAmount > maxOrderUsdt) revert OrderTooLarge();
        if (p.nonce != nonces[p.payer]) revert BadNonce();

        bytes32 digest = _hashTypedDataV4(
            keccak256(abi.encode(PAY_TYPEHASH, p.payer, p.payeeHash, p.inrPaise, p.usdtAmount, p.nonce, p.deadline))
        );
        // SignatureChecker supports both EOAs and ERC-1271 smart accounts (embedded wallets).
        if (!SignatureChecker.isValidSignatureNow(p.payer, digest, signature)) revert InvalidSignature();

        nonces[p.payer] = p.nonce + 1;

        uint256 bal = balanceOf[p.payer];
        if (bal < p.usdtAmount) revert InsufficientBalance();
        unchecked {
            balanceOf[p.payer] = bal - p.usdtAmount;
        }

        orderId = nextOrderId++;
        _orders[orderId] = Order({
            payer: p.payer,
            lp: address(0),
            usdtAmount: p.usdtAmount,
            inrPaise: p.inrPaise,
            createdAt: uint40(block.timestamp),
            expiresAt: uint40(block.timestamp) + orderTtl,
            claimDeadline: 0,
            status: Status.Open,
            payeeHash: p.payeeHash,
            utrHash: bytes32(0)
        });

        emit OrderOpened(orderId, p.payer, p.payeeHash, p.inrPaise, p.usdtAmount);
    }

    // -------------------------------------------------------------- LP side

    /// @notice An LP commits to paying the merchant in INR. They have `claimWindow` to get it verified.
    function claim(uint256 orderId) external {
        if (!isLp[msg.sender]) revert NotLp();
        Order storage o = _orders[orderId];
        if (o.status != Status.Open) revert WrongStatus(o.status);
        if (block.timestamp > o.expiresAt) revert OrderExpired();

        o.status = Status.Claimed;
        o.lp = msg.sender;
        o.claimDeadline = uint40(block.timestamp) + claimWindow;
        emit OrderClaimed(orderId, msg.sender, o.claimDeadline);
    }

    // ------------------------------------------------------------- verifier

    /// @notice Direct fulfil path (fallback oracle key in local demos).
    function fulfill(uint256 orderId, bytes32 utrHash) external nonReentrant {
        if (msg.sender != verifier) revert NotVerifier();
        _fulfill(orderId, utrHash);
    }

    /// @notice Chainlink CRE entrypoint. The KeystoneForwarder delivers a DON-signed report
    ///         encoding (orderId, utrHash) once the workflow has confirmed the UPI payout.
    function onReport(bytes calldata, bytes calldata report) external override nonReentrant {
        if (msg.sender != verifier) revert NotVerifier();
        (uint256 orderId, bytes32 utrHash) = abi.decode(report, (uint256, bytes32));
        _fulfill(orderId, utrHash);
    }

    function _fulfill(uint256 orderId, bytes32 utrHash) internal {
        Order storage o = _orders[orderId];
        if (o.status != Status.Claimed) revert WrongStatus(o.status);

        o.status = Status.Fulfilled;
        o.utrHash = utrHash;

        uint256 fee = (uint256(o.usdtAmount) * feeBps) / 10_000;
        uint256 lpAmount = uint256(o.usdtAmount) - fee;

        usdt.safeTransfer(o.lp, lpAmount);
        if (fee != 0) usdt.safeTransfer(feeRecipient, fee);

        emit OrderFulfilled(orderId, o.lp, utrHash, lpAmount, fee);
    }

    // --------------------------------------------------------------- refunds

    /// @notice Return an order's USDT to the payer's balance. Callable by anyone (the relayer
    ///         sweeps these) once the order has expired unclaimed or the LP missed its window.
    function refund(uint256 orderId) external {
        Order storage o = _orders[orderId];
        if (o.status == Status.Open) {
            if (block.timestamp <= o.expiresAt) revert NotRefundableYet();
        } else if (o.status == Status.Claimed) {
            if (block.timestamp <= o.claimDeadline) revert NotRefundableYet();
        } else {
            revert WrongStatus(o.status);
        }
        o.status = Status.Refunded;
        balanceOf[o.payer] += o.usdtAmount;
        emit OrderRefunded(orderId, o.payer, o.usdtAmount);
    }

    // ------------------------------------------------------------ withdraws

    function withdraw(address to, uint256 amount) external nonReentrant {
        _withdraw(msg.sender, to, amount);
    }

    /// @notice Gasless cash-out: payer signs, relayer submits.
    function withdrawWithSig(address payer, address to, uint256 amount, uint256 deadline, bytes calldata signature)
        external
        nonReentrant
    {
        if (block.timestamp > deadline) revert SignatureExpired();
        uint256 nonce = nonces[payer];
        bytes32 digest =
            _hashTypedDataV4(keccak256(abi.encode(WITHDRAW_TYPEHASH, payer, to, amount, nonce, deadline)));
        if (!SignatureChecker.isValidSignatureNow(payer, digest, signature)) revert InvalidSignature();
        nonces[payer] = nonce + 1;
        _withdraw(payer, to, amount);
    }

    function _withdraw(address payer, address to, uint256 amount) internal {
        if (to == address(0)) revert ZeroAddress();
        if (amount == 0) revert ZeroAmount();
        uint256 bal = balanceOf[payer];
        if (bal < amount) revert InsufficientBalance();
        unchecked {
            balanceOf[payer] = bal - amount;
        }
        usdt.safeTransfer(to, amount);
        emit Withdrawn(payer, to, amount);
    }

    // ----------------------------------------------------------------- views

    function getOrder(uint256 orderId) external view returns (Order memory) {
        return _orders[orderId];
    }

    function domainSeparator() external view returns (bytes32) {
        return _domainSeparatorV4();
    }

    function supportsInterface(bytes4 interfaceId) public pure override returns (bool) {
        return interfaceId == type(IReceiver).interfaceId || interfaceId == type(IERC165).interfaceId;
    }

    // ----------------------------------------------------------------- admin

    function setLp(address lp, bool allowed) external onlyOwner {
        if (lp == address(0)) revert ZeroAddress();
        isLp[lp] = allowed;
        emit LpSet(lp, allowed);
    }

    function setVerifier(address v) external onlyOwner {
        verifier = v;
        emit VerifierSet(v);
    }

    function setFee(address recipient, uint16 bps) external onlyOwner {
        if (recipient == address(0)) revert ZeroAddress();
        if (bps > MAX_FEE_BPS) revert FeeTooHigh();
        feeRecipient = recipient;
        feeBps = bps;
        emit FeeSet(recipient, bps);
    }

    function setWindows(uint40 ttl, uint40 window) external onlyOwner {
        if (ttl == 0 || window == 0) revert ZeroAmount();
        orderTtl = ttl;
        claimWindow = window;
        emit WindowsSet(ttl, window);
    }

    function setMaxOrder(uint128 cap) external onlyOwner {
        maxOrderUsdt = cap;
        emit MaxOrderSet(cap);
    }
}
