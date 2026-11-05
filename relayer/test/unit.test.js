import { test } from "node:test";
import assert from "node:assert/strict";
import { parseUpiQr, inrToPaise } from "../../shared/upi.js";
import { quoteUsdt, formatUsdt } from "../src/quote.js";
import { RateLimiter } from "../src/guard.js";

test("parses a typical merchant QR", () => {
  const q = parseUpiQr("upi://pay?pa=ChaiWala@okaxis&pn=Raju%20Chai&am=20.00&cu=INR&tn=chai");
  assert.equal(q.vpa, "chaiwala@okaxis");
  assert.equal(q.name, "Raju Chai");
  assert.equal(q.amountInr, 20);
});

test("static QR without amount", () => {
  assert.equal(parseUpiQr("upi://pay?pa=raju@ybl&pn=Raju").amountInr, null);
});

test("rejects non-UPI and bad VPA", () => {
  assert.throws(() => parseUpiQr("https://evil.example"));
  assert.throws(() => parseUpiQr("upi://pay?pa=nope"));
  assert.throws(() => parseUpiQr("upi://pay?pa=a@b&cu=USD"));
});

test("inrToPaise", () => {
  assert.equal(inrToPaise(20), 2000);
  assert.equal(inrToPaise("12.5"), 1250);
  assert.throws(() => inrToPaise("1.234"));
});

test("quote: ₹20 at 88/USDT + 1% spread rounds up", () => {
  const u = quoteUsdt(2000, 88, 100);
  assert.equal(formatUsdt(u), "0.229546"); // 20/88 = 0.227273 → +1% = 0.229546
});

test("rate limiter", () => {
  const l = new RateLimiter(2, 1000);
  assert.ok(l.take("a")); assert.ok(l.take("a")); assert.ok(!l.take("a")); assert.ok(l.take("b"));
});

test("quote works for an 18-decimal token too", async () => {
  const q = await import("../src/quote.js");
  q.setUsdtDecimals(18);
  const u = q.quoteUsdt(2000, 88, 100);
  assert.equal(q.formatUsdt(u), "0.229545");
  assert.equal(u.toString().length, 18); // ~2.29e17 base units
  q.setUsdtDecimals(6);
});
