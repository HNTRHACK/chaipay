import express from "express";
import cors from "cors";
import { fileURLToPath } from "node:url";
import {
  createPublicClient,
  createWalletClient,
  http,
  keccak256,
  toBytes,
  parseGwei,
  formatEther,
  parseEventLogs,
  BaseError,
  ContractFunctionRevertedError,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { abi, chain, config } from "./config.js";
import { RateLimiter, parsePayBody } from "./guard.js";
import { quoteUsdt, formatUsdt, setUsdtDecimals, usdtDecimals } from "./quote.js";
import { makePayoutVerifier } from "./payout.js";
import { inrToPaise } from "../../shared/upi.js";

const STATUS = ["None", "Open", "Claimed", "Fulfilled", "Refunded"];

const transport = http(config.rpcUrl);
const pub = createPublicClient({ chain, transport });
const relayer = createWalletClient({ chain, transport, account: privateKeyToAccount(config.relayerKey) });
const lpWallet = config.lpKey ? createWalletClient({ chain, transport, account: privateKeyToAccount(config.lpKey) }) : null;
const verifierWallet = config.verifierKey
  ? createWalletClient({ chain, transport, account: privateKeyToAccount(config.verifierKey) })
  : null;
const payouts = makePayoutVerifier(config);

const contract = { address: config.contract, abi };
const erc20 = [{ type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] }];
const payerLimiter = new RateLimiter(config.maxPaysPerPayerPerMin);
const ipLimiter = new RateLimiter(config.maxReqPerIpPerMin);

// orderId -> { vpa, name } so LPs know whom to pay. Only the hash is onchain.
const payees = new Map();

// ------------------------------------------------------------------ helpers

/** Simulate first (a revert costs us nothing), enforce a gas-price cap, then send. */
async function send(wallet, functionName, args) {
  const gasPrice = await pub.getGasPrice();
  if (gasPrice > parseGwei(String(config.maxGasPriceGwei))) {
    throw httpError(503, `gas price ${gasPrice} above cap; try again shortly`);
  }
  const { request } = await pub.simulateContract({ ...contract, functionName, args, account: wallet.account });
  const hash = await wallet.writeContract(request);
  const receipt = await pub.waitForTransactionReceipt({ hash });
  if (receipt.status !== "success") throw httpError(500, `tx ${hash} reverted`);
  return { hash, receipt, url: `${config.explorer}/tx/${hash}` };
}

function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

function revertReason(err) {
  if (err instanceof BaseError) {
    const r = err.walk((e) => e instanceof ContractFunctionRevertedError);
    if (r instanceof ContractFunctionRevertedError) return r.data?.errorName || r.shortMessage;
    return err.shortMessage;
  }
  return err.message;
}

async function readOrder(id) {
  const o = await pub.readContract({ ...contract, functionName: "getOrder", args: [BigInt(id)] });
  return {
    id: String(id),
    payer: o.payer,
    lp: o.lp,
    usdtAmount: o.usdtAmount.toString(),
    usdt: formatUsdt(o.usdtAmount),
    inrPaise: o.inrPaise.toString(),
    inr: (Number(o.inrPaise) / 100).toFixed(2),
    status: STATUS[o.status],
    createdAt: Number(o.createdAt),
    expiresAt: Number(o.expiresAt),
    claimDeadline: Number(o.claimDeadline),
    payeeHash: o.payeeHash,
    utrHash: o.utrHash,
    payee: payees.get(String(id)) || null,
  };
}

const wrap = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (err) {
    const status = err.status || (err instanceof BaseError ? 400 : 500);
    res.status(status).json({ error: revertReason(err) });
  }
};

function requireLp(req) {
  if (!lpWallet) throw httpError(501, "LP key not configured on this relayer");
  if (!config.lpApiToken || req.get("authorization") !== `Bearer ${config.lpApiToken}`) {
    throw httpError(401, "LP token required");
  }
}

// --------------------------------------------------------------------- app

const app = express();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use("/api", (req, res, next) => {
  if (!ipLimiter.take(req.ip)) return res.status(429).json({ error: "slow down" });
  next();
});

app.get(
  "/api/config",
  wrap(async (_req, res) => {
    res.json({
      chainId: config.chainId,
      contract: config.contract,
      explorer: config.explorer,
      inrPerUsdt: config.inrPerUsdt,
      spreadBps: config.spreadBps,
      minOrderPaise: config.minOrderPaise,
      usdtDecimals: usdtDecimals(),
      payoutProvider: payouts.name,
      domain: { name: "ChaiPay", version: "1", chainId: config.chainId, verifyingContract: config.contract },
      types: {
        Pay: [
          { name: "payer", type: "address" },
          { name: "payeeHash", type: "bytes32" },
          { name: "inrPaise", type: "uint64" },
          { name: "usdtAmount", type: "uint128" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
        Withdraw: [
          { name: "payer", type: "address" },
          { name: "to", type: "address" },
          { name: "amount", type: "uint256" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      },
    });
  }),
);

app.get(
  "/api/quote",
  wrap(async (req, res) => {
    const paise = req.query.paise ? Number(req.query.paise) : inrToPaise(req.query.inr);
    if (!Number.isSafeInteger(paise) || paise <= 0) throw httpError(400, "bad amount");
    const units = quoteUsdt(paise, config.inrPerUsdt, config.spreadBps);
    res.json({ paise, usdtAmount: units.toString(), usdt: formatUsdt(units), inrPerUsdt: config.inrPerUsdt });
  }),
);

app.get(
  "/api/account/:addr",
  wrap(async (req, res) => {
    const addr = req.params.addr;
    if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) throw httpError(400, "bad address");
    const [bal, nonce] = await Promise.all([
      pub.readContract({ ...contract, functionName: "balanceOf", args: [addr] }),
      pub.readContract({ ...contract, functionName: "nonces", args: [addr] }),
    ]);
    res.json({ balance: bal.toString(), usdt: formatUsdt(bal), nonce: nonce.toString() });
  }),
);

// Payer submits a signed intent. Relayer pays gas.
app.post(
  "/api/pay",
  wrap(async (req, res) => {
    const { intent, signature } = parsePayBody(req.body);
    const vpa = String(req.body.vpa || "").toLowerCase();
    if (keccak256(toBytes(vpa)) !== intent.payeeHash) throw httpError(400, "vpa does not match payeeHash");
    if (intent.inrPaise < BigInt(config.minOrderPaise)) throw httpError(400, "below minimum order");

    // Price check: the payer must sign at least our quote, so LPs will pick the order up.
    const minUsdt = quoteUsdt(intent.inrPaise, config.inrPerUsdt, config.spreadBps);
    if (intent.usdtAmount < minUsdt) throw httpError(400, `stale quote; need ${formatUsdt(minUsdt)} USDT`);
    // ...and not wildly more, so a buggy client can't overpay.
    if (intent.usdtAmount > (minUsdt * 105n) / 100n) throw httpError(400, "quote too high; refresh");

    if (!payerLimiter.take(intent.payer.toLowerCase())) throw httpError(429, "too many payments, wait a minute");

    const tx = await send(relayer, "pay", [intent, signature]);
    const [evt] = parseEventLogs({ abi, logs: tx.receipt.logs, eventName: "OrderOpened" });
    const orderId = evt.args.orderId.toString();
    payees.set(orderId, { vpa, name: req.body.payeeName ? String(req.body.payeeName).slice(0, 80) : null });
    res.json({ orderId, txHash: tx.hash, explorerUrl: tx.url });
  }),
);

app.post(
  "/api/withdraw",
  wrap(async (req, res) => {
    const { payer, to, amount, deadline, signature } = req.body || {};
    if (!payerLimiter.take(String(payer).toLowerCase())) throw httpError(429, "slow down");
    const tx = await send(relayer, "withdrawWithSig", [payer, to, BigInt(amount), BigInt(deadline), signature]);
    res.json({ txHash: tx.hash, explorerUrl: tx.url });
  }),
);

app.get(
  "/api/orders/:id",
  wrap(async (req, res) => {
    if (!/^\d{1,20}$/.test(req.params.id)) throw httpError(400, "bad id");
    res.json(await readOrder(req.params.id));
  }),
);

// ----------------------------------------------------------------- LP side

app.get(
  "/api/lp/orders",
  wrap(async (req, res) => {
    requireLp(req);
    const ids = [...payees.keys()].slice(-50);
    const orders = await Promise.all(ids.map(readOrder));
    res.json(orders.filter((o) => o.status === "Open" || (o.status === "Claimed" && o.lp === lpWallet.account.address)).reverse());
  }),
);

app.post(
  "/api/lp/claim",
  wrap(async (req, res) => {
    requireLp(req);
    const tx = await send(lpWallet, "claim", [BigInt(req.body.orderId)]);
    res.json({ txHash: tx.hash, explorerUrl: tx.url, order: await readOrder(req.body.orderId) });
  }),
);

// LP reports the UPI payout. In oracle mode the relayer verifies and fulfils; in CRE mode the
// Chainlink workflow picks this up via GET /api/payouts/:orderId and calls onReport instead.
const reportedPayouts = new Map();

app.post(
  "/api/lp/paid",
  wrap(async (req, res) => {
    requireLp(req);
    const order = await readOrder(req.body.orderId);
    if (order.status !== "Claimed") throw httpError(409, `order is ${order.status}`);
    const check = await payouts.verify({
      utr: req.body.utr,
      payoutId: req.body.payoutId,
      expectedVpa: order.payee?.vpa,
      expectedPaise: order.inrPaise,
    });
    if (!check.ok) throw httpError(422, check.reason);
    reportedPayouts.set(order.id, { utrHash: check.utrHash, payoutId: req.body.payoutId || null, source: check.source });

    if (!verifierWallet) return res.json({ queued: true, note: "CRE workflow will verify and fulfil" });
    const tx = await send(verifierWallet, "fulfill", [BigInt(order.id), check.utrHash]);
    res.json({ txHash: tx.hash, explorerUrl: tx.url, order: await readOrder(order.id) });
  }),
);

// Read-only feed the CRE workflow polls: claimed orders whose LP has reported a UPI payout.
// The workflow re-verifies each payout itself (RazorpayX mode) before signing a report, so this
// endpoint is a work queue, not a source of truth.
app.get(
  "/api/payouts/pending",
  wrap(async (_req, res) => {
    const out = [];
    for (const [orderId, p] of reportedPayouts) {
      const o = await readOrder(orderId);
      if (o.status !== "Claimed") continue;
      out.push({
        orderId,
        payoutId: p.payoutId,
        utrHash: p.utrHash,
        source: p.source,
        expectedVpa: o.payee?.vpa || null,
        expectedPaise: o.inrPaise,
      });
    }
    res.json(out);
  }),
);

app.get(
  "/api/payouts/:orderId",
  wrap(async (req, res) => {
    const p = reportedPayouts.get(req.params.orderId);
    if (!p) throw httpError(404, "no payout reported");
    res.json({ orderId: req.params.orderId, ...p });
  }),
);

// --------------------------------------------------------------- static app

app.use("/shared", express.static(fileURLToPath(new URL("../../shared", import.meta.url))));
app.use(express.static(fileURLToPath(new URL("../../app", import.meta.url))));

// ------------------------------------------------------- background sweeper

// Refund expired orders so payers get their balance back without doing anything.
async function sweep() {
  const now = Math.floor(Date.now() / 1000);
  for (const id of payees.keys()) {
    try {
      const o = await readOrder(id);
      const due = (o.status === "Open" && now > o.expiresAt) || (o.status === "Claimed" && now > o.claimDeadline);
      if (due) {
        const tx = await send(relayer, "refund", [BigInt(id)]);
        console.log(`refunded order ${id}: ${tx.url}`);
      }
    } catch (e) {
      console.warn(`sweep ${id}: ${revertReason(e)}`);
    }
  }
  const bal = await pub.getBalance({ address: relayer.account.address });
  if (bal < config.lowBalanceWei) console.warn(`⚠ relayer low on gas: ${formatEther(bal)} WBT`);
}

async function loadTokenDecimals() {
  const token = await pub.readContract({ ...contract, functionName: "usdt" });
  const d = await pub.readContract({ address: token, abi: erc20, functionName: "decimals" });
  setUsdtDecimals(d);
  return { token, d };
}

if (process.env.NODE_ENV !== "test") {
  const { token, d } = await loadTokenDecimals();
  setInterval(() => sweep().catch((e) => console.warn("sweep failed", e.message)), 30_000);
  app.listen(config.port, () => {
    console.log(`ChaiPay relayer on http://localhost:${config.port}`);
    console.log(`  relayer  ${relayer.account.address}`);
    console.log(`  contract ${config.contract} (chain ${config.chainId})`);
    console.log(`  usdt     ${token} (${d} decimals)`);
    console.log(`  payouts  ${payouts.name}${verifierWallet ? " · oracle fulfil" : " · CRE fulfil"}`);
  });
}

export { app };
