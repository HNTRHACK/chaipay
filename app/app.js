import { keccak256, toBytes, privateKeyToAccount, generatePrivateKey } from "./vendor/viem.js";
import { parseUpiQr, inrToPaise } from "/shared/upi.js";

const $app = document.getElementById("app");
const $scanner = document.getElementById("scanner");
const $video = document.getElementById("video");

// ------------------------------------------------------------------ wallet
// A device wallet: created on first open, never shown as a seed phrase, never needs gas.
function store(key, val) {
  try {
    if (val === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, val);
  } catch {
    return null;
  }
}
let pk = store("chaipay.key");
if (!pk) {
  pk = generatePrivateKey();
  store("chaipay.key", pk);
}
const account = privateKeyToAccount(pk);

// --------------------------------------------------------------------- api
async function api(path, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(path, {
    method,
    headers: { "content-type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(friendly(json.error || `Request failed (${res.status})`));
  return json;
}

function friendly(msg) {
  const map = {
    InsufficientBalance: "Not enough USDT. Add money first.",
    SignatureExpired: "That payment took too long to confirm. Scan again.",
    BadNonce: "This payment was already sent.",
    OrderTooLarge: "That's above the per-payment limit.",
    InvalidSignature: "Signature didn't match. Scan again.",
  };
  for (const [k, v] of Object.entries(map)) if (msg.includes(k)) return v;
  return msg;
}

let cfg;
const cfgReady = api("/api/config").then((c) => (cfg = c));

// ------------------------------------------------------------------ helpers
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const inrFmt = (n) => Number(n).toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const initials = (name, vpa) => (name || vpa || "?").trim().charAt(0).toUpperCase();
const logo = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 11h17v8a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7z" fill="var(--leaf)"/><path d="M23 13h2.5a3 3 0 0 1 0 6H23" fill="none" stroke="var(--leaf)" stroke-width="2.4"/><path d="M11 4c-1 2 1 3 0 5M16 4c-1 2 1 3 0 5" fill="none" stroke="var(--haldi)" stroke-width="2.2" stroke-linecap="round"/></svg>`;

function header(right = "") {
  return `<header class="top"><a href="#" class="brand" style="color:inherit;text-decoration:none">${logo}ChaiPay</a>${right}</header>`;
}

let pollTimer = null;
function stopPolling() {
  clearTimeout(pollTimer);
  pollTimer = null;
}

// ---------------------------------------------------------------- routing
let pending = null; // scanned payment awaiting confirmation

async function route() {
  stopPolling();
  const [view, arg] = location.hash.slice(1).split("/");
  try {
    await cfgReady;
  } catch {
    $app.innerHTML = `${header()}<p class="error">Can't reach the ChaiPay server. Check your connection and reload.</p>`;
    return;
  }
  if (view === "pay" && pending) return renderConfirm();
  if (view === "order" && arg) return renderReceipt(arg);
  if (view === "lp") return renderLp();
  if (view === "topup") return renderTopup();
  return renderHome();
}
addEventListener("hashchange", route);

// ------------------------------------------------------------------- home
async function renderHome() {
  $app.innerHTML = `
    ${header(`<a class="btn ghost small" href="#topup">Add money</a>`)}
    <section class="balance">
      <p class="muted">You can spend</p>
      <p class="amount" id="bal-inr"><span class="rupee">₹</span>…</p>
      <p class="sub-amount" id="bal-usdt">&nbsp;</p>
    </section>
    <section class="panel">
      <h2>Pay any shop that takes UPI</h2>
      <p class="muted small" style="margin-top:6px">Scan their QR. You pay in USDT, they receive rupees in their bank like any UPI payment. No gas, no seed phrase.</p>
    </section>
    <div class="dock"><button class="btn" id="scan">Scan to pay</button></div>`;
  document.getElementById("scan").onclick = openScanner;

  try {
    const a = await api(`/api/account/${account.address}`);
    const inr = (Number(a.usdt) * cfg.inrPerUsdt) / (1 + cfg.spreadBps / 10_000);
    document.getElementById("bal-inr").innerHTML = `<span class="rupee">₹</span>${inrFmt(Math.floor(inr))}`;
    document.getElementById("bal-usdt").textContent = `${Number(a.usdt).toFixed(2)} USDT`;
  } catch (e) {
    document.getElementById("bal-usdt").innerHTML = `<span class="error">${esc(e.message)}</span>`;
  }
}

// ------------------------------------------------------------------ top up
function renderTopup() {
  $app.innerHTML = `
    ${header()}
    <h1>Add money</h1>
    <p class="muted">Send USDT on Whitechain to your ChaiPay balance. Anyone can top you up, an exchange or a friend, by depositing for this address:</p>
    <p class="addr" id="addr">${account.address}</p>
    <div class="row"><button class="btn ghost" id="copy">Copy address</button><a class="btn ghost" href="#">Done</a></div>
    <p class="muted small">This wallet lives on this phone. Clearing your browser data deletes it, so keep balances small.</p>`;
  document.getElementById("copy").onclick = async (e) => {
    try {
      await navigator.clipboard.writeText(account.address);
      e.target.textContent = "Copied";
    } catch {
      e.target.textContent = "Copy failed";
    }
  };
}

// ----------------------------------------------------------------- scanner
let stream = null;
let scanning = false;

async function openScanner() {
  $scanner.showModal();
  document.getElementById("manual-input").value = "";
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    $video.srcObject = stream;
    await $video.play();
    scanning = true;
    scanLoop();
  } catch {
    document.querySelector(".scan-hint").textContent = "Camera unavailable. Paste the link below.";
  }
}

function closeScanner() {
  scanning = false;
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
  if ($scanner.open) $scanner.close();
}

let detector = null;
async function decodeFrame() {
  if ("BarcodeDetector" in window) {
    detector ??= new BarcodeDetector({ formats: ["qr_code"] });
    const codes = await detector.detect($video);
    return codes[0]?.rawValue || null;
  }
  if (!window.jsQR) {
    await new Promise((ok, fail) => {
      const s = document.createElement("script");
      s.src = "/vendor/jsQR.js";
      s.onload = ok;
      s.onerror = fail;
      document.head.append(s);
    });
  }
  const c = (decodeFrame.canvas ??= document.createElement("canvas"));
  c.width = $video.videoWidth;
  c.height = $video.videoHeight;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage($video, 0, 0);
  const img = ctx.getImageData(0, 0, c.width, c.height);
  return window.jsQR(img.data, img.width, img.height)?.data || null;
}

async function scanLoop() {
  if (!scanning) return;
  try {
    if ($video.readyState >= 2) {
      const text = await decodeFrame();
      if (text) return handleQr(text);
    }
  } catch {
    /* keep trying */
  }
  setTimeout(scanLoop, 250);
}

function handleQr(text) {
  try {
    const qr = parseUpiQr(text);
    closeScanner();
    pending = qr;
    location.hash = "pay";
    if (location.hash === "#pay") route();
  } catch (e) {
    document.querySelector(".scan-hint").textContent = e.message;
    setTimeout(scanLoop, 1200);
  }
}

document.getElementById("scan-close").onclick = closeScanner;
document.getElementById("manual").onsubmit = (e) => {
  e.preventDefault();
  handleQr(document.getElementById("manual-input").value);
};
$scanner.addEventListener("close", () => {
  scanning = false;
  stream?.getTracks().forEach((t) => t.stop());
});

// ----------------------------------------------------------------- confirm
async function renderConfirm() {
  const qr = pending;
  const fixed = qr.amountInr != null;
  $app.innerHTML = `
    ${header()}
    <section class="payee">
      <div class="avatar">${esc(initials(qr.name, qr.vpa))}</div>
      <div><h2>${esc(qr.name || "UPI merchant")}</h2><p class="vpa">${esc(qr.vpa)}</p></div>
    </section>
    <section>
      ${
        fixed
          ? `<p class="amount"><span class="rupee">₹</span>${inrFmt(qr.amountInr)}</p>`
          : `<label class="muted" for="amt">Amount in rupees</label>
             <input id="amt" class="amount-input" inputmode="decimal" placeholder="₹0" autofocus>`
      }
    </section>
    <section class="panel" id="quote-box">
      <div class="quote"><span class="muted">You pay</span><strong id="q-usdt">${fixed ? "…" : "–"}</strong></div>
      <div class="quote"><span class="muted">Network fee</span><strong>₹0, covered by ChaiPay</strong></div>
      <div class="quote"><span class="muted">Rate</span><span>1 USDT = ₹${cfg.inrPerUsdt}</span></div>
    </section>
    <p id="pay-err" class="error" role="alert"></p>
    <div class="dock"><button class="btn" id="go" disabled>Pay</button></div>`;

  let quote = null;
  const $go = document.getElementById("go");
  const $q = document.getElementById("q-usdt");

  async function refreshQuote(inr) {
    quote = null;
    $go.disabled = true;
    $go.textContent = "Pay";
    if (!inr || inr <= 0) return ($q.textContent = "–");
    let paise;
    try {
      paise = inrToPaise(inr);
    } catch (e) {
      return ($q.textContent = e.message);
    }
    if (paise < cfg.minOrderPaise) return ($q.textContent = `Minimum ₹${cfg.minOrderPaise / 100}`);
    const q = await api(`/api/quote?paise=${paise}`);
    quote = { ...q, paise };
    $q.textContent = `${Number(q.usdt).toFixed(4)} USDT`;
    $go.disabled = false;
    $go.textContent = `Pay ₹${inrFmt(paise / 100)}`;
  }

  if (fixed) refreshQuote(qr.amountInr).catch((e) => ($q.textContent = e.message));
  else {
    let t;
    document.getElementById("amt").oninput = (e) => {
      clearTimeout(t);
      t = setTimeout(() => refreshQuote(Number(e.target.value)).catch((err) => ($q.textContent = err.message)), 250);
    };
  }

  $go.onclick = async () => {
    if (!quote) return;
    $go.disabled = true;
    $go.textContent = "Paying…";
    document.getElementById("pay-err").textContent = "";
    try {
      const acct = await api(`/api/account/${account.address}`);
      if (BigInt(acct.balance) < BigInt(quote.usdtAmount)) throw new Error("Not enough USDT. Add money first.");
      const intent = {
        payer: account.address,
        payeeHash: keccak256(toBytes(qr.vpa)),
        inrPaise: String(quote.paise),
        usdtAmount: quote.usdtAmount,
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
      const r = await api("/api/pay", { method: "POST", body: { intent, signature, vpa: qr.vpa, payeeName: qr.name } });
      store(`chaipay.tx.${r.orderId}`, r.explorerUrl);
      pending = null;
      location.hash = `order/${r.orderId}`;
    } catch (e) {
      document.getElementById("pay-err").textContent = e.message;
      $go.disabled = false;
      $go.textContent = `Pay ₹${inrFmt(quote.paise / 100)}`;
    }
  };
}

// ----------------------------------------------------------------- receipt
async function renderReceipt(id) {
  let o;
  try {
    o = await api(`/api/orders/${encodeURIComponent(id)}`);
  } catch (e) {
    $app.innerHTML = `${header()}<p class="error">${esc(e.message)}</p>`;
    return;
  }
  const name = o.payee?.name || o.payee?.vpa || "the shop";
  const tx = store(`chaipay.tx.${id}`);
  const rank = { Open: 1, Claimed: 2, Fulfilled: 3, Refunded: -1 }[o.status] ?? 0;
  const refunded = o.status === "Refunded";

  const steps = [
    { label: "You approved the payment", detail: "Signed on this phone. You paid no gas." },
    {
      label: "USDT locked in escrow",
      detail: `${Number(o.usdt).toFixed(4)} USDT is held by the contract, not by us.${tx ? ` <a href="${esc(tx)}" target="_blank" rel="noopener">View on explorer</a>` : ""}`,
    },
    { label: "A cash partner took the order", detail: "They pay the shop in rupees over UPI." },
    { label: `${esc(name)} got ₹${inrFmt(o.inr)}`, detail: "UPI payout verified. USDT released to the partner." },
  ];
  const state = (i) => {
    if (refunded) return i <= 1 ? "done" : i === 2 ? "failed" : "";
    if (i < rank + 1) return "done";
    if (i === rank + 1) return "active";
    return "";
  };

  $app.innerHTML = `
    ${header()}
    <section>
      <p class="muted">Paying ${esc(name)}</p>
      <p class="amount"><span class="rupee">₹</span>${inrFmt(o.inr)}</p>
    </section>
    ${o.status === "Fulfilled" ? `<div class="paid-banner">Paid. ${esc(name)} has the money.</div>` : ""}
    ${refunded ? `<p class="error">No partner picked this up in time, so ${Number(o.usdt).toFixed(4)} USDT is back in your balance.</p>` : ""}
    <ol class="steps">
      ${steps
        .map(
          (s, i) => `<li class="step ${state(i)}"><span class="dot">${state(i) === "done" ? "✓" : state(i) === "failed" ? "!" : i + 1}</span>
          <div><p class="label">${s.label}</p><p class="detail">${s.detail}</p></div></li>`,
        )
        .join("")}
    </ol>
    <p class="muted small">Order #${esc(o.id)}</p>
    <div class="dock"><a class="btn" href="#">Done</a></div>`;

  if (o.status === "Open" || o.status === "Claimed") {
    pollTimer = setTimeout(() => location.hash === `#order/${id}` && renderReceipt(id), 2000);
  }
}

// ---------------------------------------------------------------- LP side
async function renderLp() {
  const token = store("chaipay.lpToken");
  if (!token) {
    $app.innerHTML = `
      ${header()}
      <h1>Cash partner</h1>
      <p class="muted">Pay shops in rupees, earn USDT plus the spread.</p>
      <form id="lp-login" class="panel" style="display:flex;flex-direction:column;gap:10px">
        <label for="tok">Partner access code</label>
        <input id="tok" class="text" autocomplete="off" required>
        <button class="btn">Open dashboard</button>
      </form>`;
    document.getElementById("lp-login").onsubmit = (e) => {
      e.preventDefault();
      store("chaipay.lpToken", document.getElementById("tok").value.trim());
      renderLp();
    };
    return;
  }
  const auth = { authorization: `Bearer ${token}` };
  let orders;
  try {
    orders = await api("/api/lp/orders", { headers: auth });
  } catch (e) {
    $app.innerHTML = `${header()}<p class="error">${esc(e.message)}</p><button class="btn ghost" id="reset">Use a different code</button>`;
    document.getElementById("reset").onclick = () => {
      store("chaipay.lpToken", "");
      renderLp();
    };
    return;
  }

  $app.innerHTML = `
    ${header()}
    <h1>Orders to pay</h1>
    ${orders.length === 0 ? `<p class="muted">No orders right now. This page refreshes on its own.</p>` : ""}
    <section class="panel" style="${orders.length ? "" : "display:none"}">
      ${orders
        .map((o) => {
          const upi = `upi://pay?pa=${encodeURIComponent(o.payee?.vpa || "")}&pn=${encodeURIComponent(o.payee?.name || "")}&am=${o.inr}&cu=INR&tn=${encodeURIComponent("ChaiPay #" + o.id)}`;
          return `<div class="order" data-id="${esc(o.id)}">
            <div class="head"><span class="inr">₹${inrFmt(o.inr)}</span><span class="muted small">earn ${Number(o.usdt).toFixed(4)} USDT</span></div>
            <p class="vpa">${esc(o.payee?.name || "")} · ${esc(o.payee?.vpa || "unknown")}</p>
            ${
              o.status === "Open"
                ? `<button class="btn small" data-act="claim">Take this order</button>`
                : `<a class="btn small ghost" href="${esc(upi)}">Pay ₹${inrFmt(o.inr)} in your UPI app</a>
                   <form data-act="paid" class="row">
                     <input class="text" name="utr" placeholder="UTR number" aria-label="UPI reference (UTR) number" required autocomplete="off">
                     <button class="btn small">Mark paid</button>
                   </form>`
            }
            <p class="error small" data-err></p>
          </div>`;
        })
        .join("")}
    </section>`;

  $app.querySelectorAll('[data-act="claim"]').forEach((b) => {
    b.onclick = async () => {
      const el = b.closest(".order");
      b.disabled = true;
      b.textContent = "Taking…";
      try {
        await api("/api/lp/claim", { method: "POST", headers: auth, body: { orderId: el.dataset.id } });
        renderLp();
      } catch (e) {
        el.querySelector("[data-err]").textContent = e.message;
        b.disabled = false;
        b.textContent = "Take this order";
      }
    };
  });
  $app.querySelectorAll('[data-act="paid"]').forEach((f) => {
    f.onsubmit = async (e) => {
      e.preventDefault();
      const el = f.closest(".order");
      const btn = f.querySelector("button");
      btn.disabled = true;
      btn.textContent = "Checking…";
      try {
        await api("/api/lp/paid", { method: "POST", headers: auth, body: { orderId: el.dataset.id, utr: f.utr.value.trim() } });
        renderLp();
      } catch (err) {
        el.querySelector("[data-err]").textContent = err.message;
        btn.disabled = false;
        btn.textContent = "Mark paid";
      }
    };
  });

  pollTimer = setTimeout(() => location.hash === "#lp" && renderLp(), 4000);
}

route();
