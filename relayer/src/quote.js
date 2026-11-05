// INR → USDT quoting. Token decimals are read from the chain at startup (setUsdtDecimals) so this
// works whether the test USDT uses 6 or 18 decimals.
let DECIMALS = 6n;

export function setUsdtDecimals(d) {
  const n = BigInt(d);
  if (n < 0n || n > 36n) throw new Error(`unexpected token decimals ${d}`);
  DECIMALS = n;
}

export function usdtDecimals() {
  return Number(DECIMALS);
}

/**
 * Converts paise to USDT base units at `inrPerUsdt`, adding `spreadBps` for the LP and rounding up
 * so the LP is never short-changed.
 */
export function quoteUsdt(paise, inrPerUsdt, spreadBps) {
  const p = BigInt(paise);
  // rate scaled by 1e4 to keep 4 decimals of the INR price as an integer
  const rate = BigInt(Math.round(inrPerUsdt * 10_000));
  if (rate <= 0n) throw new Error("bad rate");
  // usdt = paise/100 / (rate/1e4) * 10^dec  =>  paise * 10^(dec+2) / rate
  const base = ceilDiv(p * 10n ** (DECIMALS + 2n), rate);
  return ceilDiv(base * (10_000n + BigInt(spreadBps)), 10_000n);
}

function ceilDiv(a, b) {
  return (a + b - 1n) / b;
}

/** Human-readable amount, always 6 decimal places for display. */
export function formatUsdt(units) {
  const u = BigInt(units);
  const scale = 10n ** DECIMALS;
  const whole = u / scale;
  let frac = (u % scale).toString().padStart(Number(DECIMALS), "0");
  frac = (frac + "000000").slice(0, 6);
  return `${whole}.${frac}`;
}
