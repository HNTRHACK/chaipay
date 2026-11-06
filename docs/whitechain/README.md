# Whitechain Integration in ChaiPay

ChaiPay is a local hackathon demo that explores paying through a UPI QR interface using USDT.

Whitechain Sepolia provides the blockchain environment for ChaiPay's smart contract deployment, USDT escrow, and settlement transactions. The relayer submits transactions and pays gas on behalf of the payer.

This document explains our Whitechain integration and the developer tooling used while building it.

The demo uses test tokens and mock payout verification. It does not perform real bank payouts.
