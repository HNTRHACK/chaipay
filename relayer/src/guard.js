// In-memory sliding-window limiter. Good enough for a single relayer instance.
export class RateLimiter {
  constructor(limit, windowMs = 60_000) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.hits = new Map();
  }

  /** @returns {boolean} true if allowed */
  take(key) {
    const now = Date.now();
    const arr = (this.hits.get(key) || []).filter((t) => now - t < this.windowMs);
    if (arr.length >= this.limit) {
      this.hits.set(key, arr);
      return false;
    }
    arr.push(now);
    this.hits.set(key, arr);
    return true;
  }
}

const ADDR = /^0x[0-9a-fA-F]{40}$/;
const B32 = /^0x[0-9a-fA-F]{64}$/;
const HEX = /^0x[0-9a-fA-F]*$/;
const UINT = /^\d{1,78}$/;

/** Validates and normalises a PayIntent coming from the client. Throws on bad input. */
export function parsePayBody(body) {
  const i = body?.intent;
  const sig = body?.signature;
  if (!i || typeof i !== "object") throw new Error("missing intent");
  if (!ADDR.test(i.payer)) throw new Error("bad payer");
  if (!B32.test(i.payeeHash)) throw new Error("bad payeeHash");
  for (const k of ["inrPaise", "usdtAmount", "nonce", "deadline"]) {
    if (!UINT.test(String(i[k]))) throw new Error(`bad ${k}`);
  }
  if (typeof sig !== "string" || !HEX.test(sig) || sig.length < 132) throw new Error("bad signature");
  return {
    intent: {
      payer: i.payer,
      payeeHash: i.payeeHash,
      inrPaise: BigInt(i.inrPaise),
      usdtAmount: BigInt(i.usdtAmount),
      nonce: BigInt(i.nonce),
      deadline: BigInt(i.deadline),
    },
    signature: sig,
  };
}
