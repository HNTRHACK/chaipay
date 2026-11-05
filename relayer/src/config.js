import "dotenv/config";
import { readFileSync } from "node:fs";
import { defineChain } from "viem";

export const abi = JSON.parse(readFileSync(new URL("../../shared/ChaiPay.abi.json", import.meta.url), "utf8"));

function req(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name} (see relayer/.env.example)`);
  return v;
}

export const config = {
  port: Number(process.env.PORT || 8787),
  rpcUrl: req("RPC_URL"),
  chainId: Number(process.env.CHAIN_ID || 1874),
  contract: req("CHAIPAY_ADDRESS"),
  explorer: process.env.EXPLORER_URL || "https://explorer.testnet.whitechain.io",

  relayerKey: req("RELAYER_PRIVATE_KEY"),
  lpKey: process.env.LP_PRIVATE_KEY || null,
  verifierKey: process.env.VERIFIER_PRIVATE_KEY || null, // oracle mode only; CRE mode leaves this unset
  lpApiToken: process.env.LP_API_TOKEN || null,

  // Pricing: INR per 1 USDT, plus a spread that pays the LP for their float.
  inrPerUsdt: Number(process.env.INR_PER_USDT || 88),
  spreadBps: Number(process.env.SPREAD_BPS || 100),

  // Drain protection
  minOrderPaise: Number(process.env.MIN_ORDER_PAISE || 1000), // ₹10 — keeps the 0.5% fee above gas
  maxGasPriceGwei: Number(process.env.MAX_GAS_PRICE_GWEI || 5),
  maxPaysPerPayerPerMin: Number(process.env.MAX_PAYS_PER_PAYER_PER_MIN || 6),
  maxReqPerIpPerMin: Number(process.env.MAX_REQ_PER_IP_PER_MIN || 60),
  lowBalanceWei: BigInt(process.env.LOW_BALANCE_WEI || "50000000000000000"), // 0.05 WBT

  payoutProvider: process.env.PAYOUT_PROVIDER || "mock", // "mock" | "razorpayx"
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || null,
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || null,
};

export const chain = defineChain({
  id: config.chainId,
  name: "Whitechain Sepolia",
  nativeCurrency: { name: "Whitechain", symbol: "WBT", decimals: 18 },
  rpcUrls: { default: { http: [config.rpcUrl] } },
  blockExplorers: { default: { name: "Whitechain Explorer", url: config.explorer } },
  testnet: true,
});
