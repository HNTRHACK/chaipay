import { keccak256, toBytes } from "viem";
import { privateKeyToAccount, generatePrivateKey } from "viem/accounts";

// Same device wallet as the main ChaiPay app (localStorage "chaipay.key"), so balances are shared.
function load() {
  try {
    return localStorage.getItem("chaipay.key");
  } catch {
    return null;
  }
}
let pk = load();
if (!pk) {
  pk = generatePrivateKey();
  try {
    localStorage.setItem("chaipay.key", pk);
  } catch {
    /* private mode: wallet lives for this tab only */
  }
}
export const account = privateKeyToAccount(pk);

const FRIENDLY = {
  InsufficientBalance: "NOT ENOUGH USDT. ADD MONEY FIRST.",
  SignatureExpired: "THAT TOOK TOO LONG. TRY AGAIN.",
  BadNonce: "THAT PAYMENT WAS ALREADY SENT.",
  OrderTooLarge: "THAT'S ABOVE THE PAYMENT LIMIT.",
  InvalidSignature: "SIGNATURE DIDN'T MATCH. TRY AGAIN.",
};

export async function api(path, { method = "GET", body } = {}) {
  let res;
  try {
    res = await fetch(path, {
      method,
      headers: { "content-type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("CAN'T REACH THE CHAIPAY SERVER.");
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const raw = String(json.error || `REQUEST FAILED (${res.status})`);
    const hit = Object.keys(FRIENDLY).find((k) => raw.includes(k));
    throw new Error(hit ? FRIENDLY[hit] : raw.toUpperCase());
  }
  return json;
}

let cfgP = null;
export const config = () => (cfgP ??= api("/api/config"));

export async function balance() {
  const [cfg, a] = await Promise.all([config(), api(`/api/account/${account.address}`)]);
  const usdt = Number(a.usdt);
  const inr = (usdt * cfg.inrPerUsdt) / (1 + cfg.spreadBps / 10_000);
  return { usdt, inr, raw: BigInt(a.balance) };
}

export async function quote(inr) {
  const paise = Math.round(inr * 100);
  const q = await api(`/api/quote?paise=${paise}`);
  return { ...q, paise };
}

/** Signs a Pay intent (no gas) and hands it to the relayer. Returns { orderId, explorerUrl }. */
export async function pay({ vpa, name, q }) {
  const cfg = await config();
  const acct = await api(`/api/account/${account.address}`);
  if (BigInt(acct.balance) < BigInt(q.usdtAmount)) throw new Error(FRIENDLY.InsufficientBalance);
  const v = vpa.toLowerCase();
  const intent = {
    payer: account.address,
    payeeHash: keccak256(toBytes(v)),
    inrPaise: String(q.paise),
    usdtAmount: q.usdtAmount,
    nonce: acct.nonce,
    deadline: String(Math.floor(Date.now() / 1000) + 300),
  };
  const signature = await account.signTypedData({
    domain: cfg.domain,
    types: { Pay: cfg.types.Pay },
    primaryType: "Pay",
    message: {
      ...intent,
      inrPaise: BigInt(intent.inrPaise),
      usdtAmount: BigInt(intent.usdtAmount),
      nonce: BigInt(intent.nonce),
      deadline: BigInt(intent.deadline),
    },
  });
  return api("/api/pay", { method: "POST", body: { intent, signature, vpa: v, payeeName: name } });
}

export const order = (id) => api(`/api/orders/${encodeURIComponent(id)}`);

/** Polls an order and calls onStatus whenever its status changes. Stops at a final state. */
export function watchOrder(id, onStatus) {
  let last = null;
  let stopped = false;
  const tick = async () => {
    if (stopped) return;
    try {
      const o = await order(id);
      if (o.status !== last) {
        last = o.status;
        onStatus(o);
      }
      if (o.status === "Fulfilled" || o.status === "Refunded") return;
    } catch {
      /* transient — keep polling */
    }
    setTimeout(tick, 2000);
  };
  tick();
  return () => (stopped = true);
}
