// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script, console2} from "forge-std/Script.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {ChaiPay} from "../src/ChaiPay.sol";

/// Deploys ChaiPay to Whitechain Sepolia (chain 1874) against the official test USDT.
///
/// Required env:
///   PRIVATE_KEY      deployer key (needs a little test WBT from the faucet)
/// Optional env (default to the deployer address for a quick demo):
///   VERIFIER         CRE KeystoneForwarder, or your oracle key for the local demo
///   FEE_RECIPIENT    relayer operator wallet
///   LP               first liquidity provider to allowlist
contract Deploy is Script {
    address constant WHITECHAIN_TEST_USDT = 0xcedfB56113143d55b2358b8CFbB0dEB5Ad2f55a7;

    function run() external returns (ChaiPay pay) {
        uint256 pk = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(pk);
        address verifier = vm.envOr("VERIFIER", deployer);
        address feeRecipient = vm.envOr("FEE_RECIPIENT", deployer);
        address lp = vm.envOr("LP", deployer);

        uint8 dec = IERC20Metadata(WHITECHAIN_TEST_USDT).decimals();
        uint128 cap = uint128(100 * 10 ** dec); // 100 USDT per order, whatever the token's decimals

        vm.startBroadcast(pk);
        pay = new ChaiPay(
            IERC20(WHITECHAIN_TEST_USDT),
            deployer,
            verifier,
            feeRecipient,
            50, // 0.5% fee — funds relayer gas
            cap
        );
        pay.setLp(lp, true);
        vm.stopBroadcast();

        console2.log("ChaiPay deployed at", address(pay));
        console2.log("verifier", verifier);
        console2.log("lp", lp);
        console2.log("usdt decimals", dec);
    }
}
