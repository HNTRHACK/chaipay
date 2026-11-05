// End-to-end demo against a running relayer: a payer with ZERO gas scans a chai wala's QR,
// signs, the relayer submits, the LP claims + pays over UPI, and the verifier releases the USDT.
//
//   node scripts/e2e-demo.mjs <relayerUrl> <payerPrivateKey> <lpApiToken>
import { createWalletClient, http, keccak256, toBytes } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { parseUpiQr, inrToPaise } from "../shared/upi.js";

const [base = "http://localhost:8787", payerKey, lpToken = "change-me"] = process.argv.slice(2);
const account = privateKeyToAccount(payerKey);
const wallet = createWalletClient({ account, transport: http("http://unused.invalid") });

async function api(path, opts = {}) {
  const res = await fetch(base + path, {
    ...opts,
    headers: { "content-type": "application/json", ...(opts.headers || {}) },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${path}: ${json.error}`);
  return json;
}
const lp = { authorization: `Bearer ${lpToken}` };

const qr = parseUpiQr("upi://pay?pa=raju.chai@okaxis&pn=Raju%20Chai%20Stall&am=20.00&cu=INR");
console.log(`📷 scanned: pay ₹${qr.amountInr} to ${qr.name} (${qr.vpa})`);

const cfg = await api("/api/config");
const paise = inrToPaise(qr.amountInr);
const quote = await api(`/api/quote?paise=${paise}`);
const acct = await api(`/api/account/${account.address}`);
console.log(`💱 quote: ${quote.usdt} USDT · balance ${acct.usdt} USDT`);

const intent = {
  payer: account.address,
  payeeHash: keccak256(toBytes(qr.vpa)),
  inrPaise: String(paise),
  usdtAmount: quote.usdtAmount,
  nonce: acct.nonce,
  deadline: String(Math.floor(Date.now() / 1000) + 300),
};
const signature = await wallet.signTypedData({
  domain: cfg.domain,
  types: { Pay: cfg.types.Pay },
  primaryType: "Pay",
  message: { ...intent, inrPaise: BigInt(intent.inrPaise), usdtAmount: BigInt(intent.usdtAmount), nonce: BigInt(intent.nonce), deadline: BigInt(intent.deadline) },
});
const paid = await api("/api/pay", { method: "POST", body: { intent, signature, vpa: qr.vpa, payeeName: qr.name } });
console.log(`✍️  signed (no gas) → order #${paid.orderId} opened · ${paid.txHash}`);

const open = await api("/api/lp/orders", { headers: lp });
console.log(`🧑‍💼 LP sees ${open.length} open order(s): pay ₹${open[0].inr} to ${open[0].payee.vpa}`);
const claimed = await api("/api/lp/claim", { method: "POST", headers: lp, body: { orderId: paid.orderId } });
console.log(`🤝 LP claimed · status ${claimed.order.status}`);

const done = await api("/api/lp/paid", { method: "POST", headers: lp, body: { orderId: paid.orderId, utr: "431297650012" } });
console.log(`✅ UPI payout verified → USDT released to LP · status ${done.order.status} · ${done.txHash}`);

const after = await api(`/api/account/${account.address}`);
console.log(`👛 payer balance now ${after.usdt} USDT — chai paid, zero gas spent.`);
