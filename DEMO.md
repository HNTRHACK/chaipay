# Demo script (target: 3 minutes)

Whitechain wants a 2–4 minute video that shows **each party**: payer, cash partner, and merchant.

## Setup before you record

- Phone A (**payer**): app open over HTTPS, wallet funded with a few test USDT.
- Phone B (**cash partner**): `/#lp` open, signed in with the partner access code. Real UPI app installed.
- A real merchant UPI QR. Your own personal UPI QR works if you can't film a stall.
- Laptop: Whitechain explorer tab open on the ChaiPay contract.

## Shot list

1. **Problem (15s).** "I hold USDT. This tea stall takes UPI. Today I can't pay with it."
2. **Payer (40s).** Open ChaiPay, which shows ₹ spendable. Tap *Scan to pay*, scan the QR, and the
   confirm screen shows "₹20 = 0.2295 USDT, network fee ₹0". Tap *Pay ₹20*. Point out there's no gas
   popup, no seed phrase and no chain picker.
3. **Escrow (20s).** The receipt shows "USDT locked in escrow". Tap *View on explorer* to show the
   `OrderOpened` event, and that the transaction sender is the relayer, not the payer.
4. **Cash partner (40s).** Phone B shows the order. Tap *Take this order*, then *Pay ₹20 in your UPI
   app*, which opens their UPI app prefilled. Pay, copy the UTR, paste it, tap *Mark paid*.
5. **Merchant (15s).** Show the merchant's phone getting a normal ₹20 UPI credit.
6. **Settled (20s).** Phone A's receipt flips to "Paid. Raju Chai Stall has the money." Show the
   `OrderFulfilled` event on the explorer, with USDT going to the partner and the 0.5% fee going to
   the relayer.
7. **Safety + Chainlink (30s).** "If no partner pays, the escrow refunds automatically. In
   production every payout is re-verified by a Chainlink CRE workflow." Show `bun test` passing in
   `cre/chaipay-verifier` and the `onReport` function in the contract.

## Lines that answer the judges' questions

- *How does the business pay gas?* A 0.5% fee per fulfilled order goes to the relayer, with a ₹10
  minimum so the fee covers gas.
- *What stops a relayer drain?* Simulate before send, rate limits, a gas price cap, a fixed function
  list, and the contract's per-order cap.
- *Is it custodial?* No. Funds leave escrow only to a partner after a verified payout, or back to you.
