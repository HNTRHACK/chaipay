#!/usr/bin/env bash
# Tops up a ChaiPay payer balance with Whitechain test USDT, from a wallet that holds USDT + WBT.
#   scripts/fund-payer.sh <payer-address> <usdt-amount, e.g. 5>
# Env: RPC_URL, CHAIPAY_ADDRESS, FUNDER_PRIVATE_KEY
set -euo pipefail
PAYER=${1:?payer address}
AMOUNT=${2:-5}
USDT=${USDT_ADDRESS:-0xcedfB56113143d55b2358b8CFbB0dEB5Ad2f55a7}
DECIMALS=$(cast call "$USDT" "decimals()(uint8)" --rpc-url "$RPC_URL")
UNITS=$(python3 -c "print(int(round($AMOUNT * 10**$DECIMALS)))")
echo "Depositing $AMOUNT USDT ($UNITS units, $DECIMALS decimals) for $PAYER"
cast send "$USDT" "approve(address,uint256)" "$CHAIPAY_ADDRESS" "$UNITS" --rpc-url "$RPC_URL" --private-key "$FUNDER_PRIVATE_KEY"
cast send "$CHAIPAY_ADDRESS" "depositFor(address,uint256)" "$PAYER" "$UNITS" --rpc-url "$RPC_URL" --private-key "$FUNDER_PRIVATE_KEY"
echo "Balance: $(cast call "$CHAIPAY_ADDRESS" "balanceOf(address)(uint256)" "$PAYER" --rpc-url "$RPC_URL")"
