import { keccak256, toBytes } from "viem";

// Verifies that an LP actually paid the merchant over UPI.
//
// - "razorpayx": the LP pays through RazorpayX Payouts (mode=UPI). We look the payout up by id and
//   accept it only if it is processed, to the right VPA, for the right amount. This is the path the
//   Chainlink CRE workflow mirrors, so the check is independently reproducible by the DON.
// - "mock": for the stage demo when the LP pays from a phone UPI app. We record the UTR the LP
//   submits and trust the LP's allowlisted key. Clearly labelled in the UI and README.

export function makePayoutVerifier(config) {
  if (config.payoutProvider === "razorpayx") return razorpayx(config);
  return mock();
}

function mock() {
  return {
    name: "mock",
    async verify({ utr }) {
      if (!/^[A-Za-z0-9]{6,35}$/.test(String(utr || ""))) {
        return { ok: false, reason: "UTR must be 6-35 alphanumeric characters" };
      }
      return { ok: true, utrHash: keccak256(toBytes(String(utr))), source: "lp-attested" };
    },
  };
}

function razorpayx({ razorpayKeyId, razorpayKeySecret }) {
  if (!razorpayKeyId || !razorpayKeySecret) throw new Error("RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET required");
  const auth = "Basic " + Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64");
  return {
    name: "razorpayx",
    async verify({ payoutId, expectedVpa, expectedPaise }) {
      if (!/^pout_[A-Za-z0-9]+$/.test(String(payoutId || ""))) return { ok: false, reason: "bad payout id" };
      const res = await fetch(`https://api.razorpay.com/v1/payouts/${payoutId}`, { headers: { authorization: auth } });
      if (!res.ok) return { ok: false, reason: `payout lookup failed (${res.status})` };
      const p = await res.json();
      if (p.status !== "processed") return { ok: false, reason: `payout status ${p.status}` };
      if (p.mode !== "UPI") return { ok: false, reason: "payout mode is not UPI" };
      if (Number(p.amount) !== Number(expectedPaise)) return { ok: false, reason: "amount mismatch" };
      const vpa = p.fund_account?.vpa?.address?.toLowerCase();
      if (expectedVpa && vpa && vpa !== expectedVpa) return { ok: false, reason: "payee mismatch" };
      if (!p.utr) return { ok: false, reason: "no UTR yet" };
      return { ok: true, utrHash: keccak256(toBytes(p.utr)), source: "razorpayx" };
    },
  };
}
