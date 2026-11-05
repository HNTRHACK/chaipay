// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ChaiPay, IReceiver} from "../src/ChaiPay.sol";

contract MockUSDT is ERC20Permit {
    constructor() ERC20("Tether USD", "USDT") ERC20Permit("Tether USD") {}

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amt) external {
        _mint(to, amt);
    }
}

contract MockUSDTNoPermit is ERC20 {
    constructor() ERC20("Tether USD", "USDT") {}

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amt) external {
        _mint(to, amt);
    }
}

contract ChaiPayTest is Test {
    MockUSDT usdt;
    ChaiPay pay;

    address owner = makeAddr("owner");
    address verifier = makeAddr("verifier"); // stands in for the CRE forwarder
    address feeRecipient = makeAddr("relayerOps");
    address lp = makeAddr("lp");
    address relayer = makeAddr("relayer");

    uint256 payerPk = 0xA11CE;
    address payer;

    bytes32 constant PAYEE = keccak256("chaiwala@okaxis");
    uint64 constant INR_20 = 2000; // ₹20 in paise
    uint128 constant USDT_AMT = 240_000; // 0.24 USDT (6 decimals)

    function setUp() public {
        payer = vm.addr(payerPk);
        usdt = new MockUSDT();
        pay = new ChaiPay(IERC20(address(usdt)), owner, verifier, feeRecipient, 50, 1_000e6); // 0.5% fee, 1000 USDT cap

        vm.prank(owner);
        pay.setLp(lp, true);

        usdt.mint(payer, 100e6);
        vm.startPrank(payer);
        usdt.approve(address(pay), type(uint256).max);
        pay.deposit(100e6);
        vm.stopPrank();
    }

    // ------------------------------------------------------------ helpers

    function _intent(uint128 amt, uint256 nonce, uint256 deadline) internal view returns (ChaiPay.PayIntent memory) {
        return ChaiPay.PayIntent({
            payer: payer, payeeHash: PAYEE, inrPaise: INR_20, usdtAmount: amt, nonce: nonce, deadline: deadline
        });
    }

    function _sign(uint256 pk, ChaiPay.PayIntent memory p) internal view returns (bytes memory) {
        bytes32 structHash = keccak256(
            abi.encode(pay.PAY_TYPEHASH(), p.payer, p.payeeHash, p.inrPaise, p.usdtAmount, p.nonce, p.deadline)
        );
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", pay.domainSeparator(), structHash));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(pk, digest);
        return abi.encodePacked(r, s, v);
    }

    function _open() internal returns (uint256 id) {
        ChaiPay.PayIntent memory p = _intent(USDT_AMT, 0, block.timestamp + 5 minutes);
        vm.prank(relayer);
        id = pay.pay(p, _sign(payerPk, p));
    }

    // -------------------------------------------------------------- tests

    function test_deposit_credits_balance() public view {
        assertEq(pay.balanceOf(payer), 100e6);
        assertEq(usdt.balanceOf(address(pay)), 100e6);
    }

    function test_happy_path_scan_to_chai() public {
        uint256 id = _open();
        assertEq(pay.balanceOf(payer), 100e6 - USDT_AMT);
        assertEq(uint8(pay.getOrder(id).status), uint8(ChaiPay.Status.Open));

        vm.prank(lp);
        pay.claim(id);

        bytes32 utr = keccak256("UTR-431297650012");
        vm.prank(verifier);
        pay.fulfill(id, utr);

        uint256 fee = (uint256(USDT_AMT) * 50) / 10_000;
        assertEq(usdt.balanceOf(lp), USDT_AMT - fee);
        assertEq(usdt.balanceOf(feeRecipient), fee);
        ChaiPay.Order memory o = pay.getOrder(id);
        assertEq(uint8(o.status), uint8(ChaiPay.Status.Fulfilled));
        assertEq(o.utrHash, utr);
    }

    function test_payer_never_needs_gas() public {
        assertEq(payer.balance, 0);
        uint256 id = _open(); // submitted by relayer
        assertEq(id, 1);
        assertEq(payer.balance, 0);
    }

    function test_cre_onReport_fulfills() public {
        uint256 id = _open();
        vm.prank(lp);
        pay.claim(id);

        vm.prank(verifier);
        pay.onReport("", abi.encode(id, keccak256("UTR-1")));
        assertEq(uint8(pay.getOrder(id).status), uint8(ChaiPay.Status.Fulfilled));
    }

    function test_supports_cre_receiver_interface() public view {
        assertTrue(pay.supportsInterface(type(IReceiver).interfaceId));
    }

    function test_replay_reverts() public {
        ChaiPay.PayIntent memory p = _intent(USDT_AMT, 0, block.timestamp + 5 minutes);
        bytes memory sig = _sign(payerPk, p);
        pay.pay(p, sig);
        vm.expectRevert(ChaiPay.BadNonce.selector);
        pay.pay(p, sig);
    }

    function test_forged_signature_reverts() public {
        ChaiPay.PayIntent memory p = _intent(USDT_AMT, 0, block.timestamp + 5 minutes);
        bytes memory sig = _sign(0xBAD, p);
        vm.expectRevert(ChaiPay.InvalidSignature.selector);
        pay.pay(p, sig);
    }

    function test_relayer_cannot_change_amount() public {
        ChaiPay.PayIntent memory p = _intent(USDT_AMT, 0, block.timestamp + 5 minutes);
        bytes memory sig = _sign(payerPk, p);
        p.usdtAmount = 50e6; // tamper
        vm.expectRevert(ChaiPay.InvalidSignature.selector);
        pay.pay(p, sig);
    }

    function test_expired_intent_reverts() public {
        ChaiPay.PayIntent memory p = _intent(USDT_AMT, 0, block.timestamp + 1);
        bytes memory sig = _sign(payerPk, p);
        vm.warp(block.timestamp + 2);
        vm.expectRevert(ChaiPay.SignatureExpired.selector);
        pay.pay(p, sig);
    }

    function test_order_cap() public {
        ChaiPay.PayIntent memory p = _intent(1_001e6, 0, block.timestamp + 5 minutes);
        bytes memory sig = _sign(payerPk, p);
        vm.expectRevert(ChaiPay.OrderTooLarge.selector);
        pay.pay(p, sig);
    }

    function test_insufficient_balance() public {
        ChaiPay.PayIntent memory p = _intent(101e6, 0, block.timestamp + 5 minutes);
        bytes memory sig = _sign(payerPk, p);
        vm.expectRevert(ChaiPay.InsufficientBalance.selector);
        pay.pay(p, sig);
    }

    function test_only_lp_can_claim() public {
        uint256 id = _open();
        vm.expectRevert(ChaiPay.NotLp.selector);
        pay.claim(id);
    }

    function test_only_verifier_can_fulfill() public {
        uint256 id = _open();
        vm.prank(lp);
        pay.claim(id);
        vm.prank(lp);
        vm.expectRevert(ChaiPay.NotVerifier.selector);
        pay.fulfill(id, bytes32(0));
        vm.prank(lp);
        vm.expectRevert(ChaiPay.NotVerifier.selector);
        pay.onReport("", abi.encode(id, bytes32(0)));
    }

    function test_cannot_fulfill_unclaimed() public {
        uint256 id = _open();
        vm.prank(verifier);
        vm.expectRevert(abi.encodeWithSelector(ChaiPay.WrongStatus.selector, ChaiPay.Status.Open));
        pay.fulfill(id, bytes32(0));
    }

    function test_refund_unclaimed_after_ttl() public {
        uint256 id = _open();
        vm.expectRevert(ChaiPay.NotRefundableYet.selector);
        pay.refund(id);

        vm.warp(block.timestamp + 15 minutes + 1);
        vm.prank(lp);
        vm.expectRevert(ChaiPay.OrderExpired.selector);
        pay.claim(id);

        pay.refund(id);
        assertEq(pay.balanceOf(payer), 100e6);
        assertEq(uint8(pay.getOrder(id).status), uint8(ChaiPay.Status.Refunded));
    }

    function test_refund_when_lp_ghosts() public {
        uint256 id = _open();
        vm.prank(lp);
        pay.claim(id);

        vm.warp(block.timestamp + 10 minutes);
        vm.expectRevert(ChaiPay.NotRefundableYet.selector);
        pay.refund(id);

        vm.warp(block.timestamp + 1);
        pay.refund(id);
        assertEq(pay.balanceOf(payer), 100e6);

        vm.prank(verifier);
        vm.expectRevert(abi.encodeWithSelector(ChaiPay.WrongStatus.selector, ChaiPay.Status.Refunded));
        pay.fulfill(id, bytes32(0));
    }

    function test_cannot_double_fulfill_or_refund_after_fulfill() public {
        uint256 id = _open();
        vm.prank(lp);
        pay.claim(id);
        vm.prank(verifier);
        pay.fulfill(id, bytes32(0));

        vm.prank(verifier);
        vm.expectRevert(abi.encodeWithSelector(ChaiPay.WrongStatus.selector, ChaiPay.Status.Fulfilled));
        pay.fulfill(id, bytes32(0));

        vm.warp(block.timestamp + 1 days);
        vm.expectRevert(abi.encodeWithSelector(ChaiPay.WrongStatus.selector, ChaiPay.Status.Fulfilled));
        pay.refund(id);
    }

    function test_withdraw_with_sig_gasless() public {
        address to = makeAddr("bank");
        uint256 deadline = block.timestamp + 5 minutes;
        bytes32 structHash = keccak256(abi.encode(pay.WITHDRAW_TYPEHASH(), payer, to, 10e6, uint256(0), deadline));
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", pay.domainSeparator(), structHash));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(payerPk, digest);

        vm.prank(relayer);
        pay.withdrawWithSig(payer, to, 10e6, deadline, abi.encodePacked(r, s, v));
        assertEq(usdt.balanceOf(to), 10e6);
        assertEq(pay.balanceOf(payer), 90e6);
        assertEq(pay.nonces(payer), 1);
    }

    function test_deposit_with_permit_gasless() public {
        uint256 pk = 0xB0B;
        address bob = vm.addr(pk);
        usdt.mint(bob, 5e6);
        uint256 deadline = block.timestamp + 1 hours;
        bytes32 permitHash = keccak256(
            abi.encode(
                keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"),
                bob,
                address(pay),
                5e6,
                usdt.nonces(bob),
                deadline
            )
        );
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", usdt.DOMAIN_SEPARATOR(), permitHash));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(pk, digest);

        vm.prank(relayer);
        pay.depositWithPermit(bob, 5e6, deadline, v, r, s);
        assertEq(pay.balanceOf(bob), 5e6);
    }

    function test_deposit_for_works_with_non_permit_token() public {
        MockUSDTNoPermit t = new MockUSDTNoPermit();
        ChaiPay p2 = new ChaiPay(IERC20(address(t)), owner, verifier, feeRecipient, 0, 0);
        address exchange = makeAddr("exchange");
        t.mint(exchange, 50e6);
        vm.startPrank(exchange);
        t.approve(address(p2), 50e6);
        p2.depositFor(payer, 50e6);
        vm.stopPrank();
        assertEq(p2.balanceOf(payer), 50e6);
    }

    function test_fee_capped() public {
        vm.prank(owner);
        vm.expectRevert(ChaiPay.FeeTooHigh.selector);
        pay.setFee(feeRecipient, 101);
    }

    function testFuzz_fulfill_conserves_funds(uint128 amt) public {
        amt = uint128(bound(amt, 1, 100e6));
        ChaiPay.PayIntent memory p = _intent(amt, 0, block.timestamp + 5 minutes);
        uint256 id = pay.pay(p, _sign(payerPk, p));
        vm.prank(lp);
        pay.claim(id);
        vm.prank(verifier);
        pay.fulfill(id, bytes32(0));
        assertEq(usdt.balanceOf(lp) + usdt.balanceOf(feeRecipient), amt);
        assertEq(usdt.balanceOf(address(pay)), 100e6 - amt);
    }
}
