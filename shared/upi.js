// Parses UPI QR payloads, e.g.
//   upi://pay?pa=chaiwala@okaxis&pn=Raju%20Chai&am=20.00&cu=INR&tn=chai
// Works in Node and the browser (no dependencies).

const VPA_RE = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z][a-zA-Z0-9]{1,64}$/;

/**
 * @param {string} raw text decoded from the QR
 * @returns {{ vpa: string, name: string|null, amountInr: number|null, note: string|null, currency: string }}
 */
export function parseUpiQr(raw) {
  if (typeof raw !== "string") throw new Error("QR payload must be a string");
  const text = raw.trim();
  if (!/^upi:\/\/pay\?/i.test(text)) throw new Error("Not a UPI payment QR");

  const params = new URLSearchParams(text.slice(text.indexOf("?") + 1));
  const vpa = (params.get("pa") || "").trim().toLowerCase();
  if (!VPA_RE.test(vpa)) throw new Error("QR has no valid UPI ID (pa)");

  const currency = (params.get("cu") || "INR").toUpperCase();
  if (currency !== "INR") throw new Error(`Unsupported currency ${currency}`);

  const am = params.get("am");
  let amountInr = null;
  if (am !== null && am !== "") {
    amountInr = Number(am);
    if (!Number.isFinite(amountInr) || amountInr <= 0) throw new Error("QR has an invalid amount");
  }

  return {
    vpa,
    name: params.get("pn") ? params.get("pn").trim() : null,
    amountInr,
    note: params.get("tn") || null,
    currency,
  };
}

/** ₹ → paise as an integer, rejecting more than 2 decimals. */
export function inrToPaise(inr) {
  const paise = Math.round(Number(inr) * 100);
  if (!Number.isSafeInteger(paise) || paise <= 0) throw new Error("Invalid INR amount");
  if (Math.abs(paise / 100 - Number(inr)) > 1e-9) throw new Error("INR amount has more than 2 decimals");
  return paise;
}
