// DOM overlay: loading, title button, dialogue, HUD, onchain feed, mobile controls.
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const ui = {
  hideLoading() {
    const l = $("#loading");
    l.classList.add("gone");
    setTimeout(() => l.remove(), 700);
  },

  showTitle(onStart) {
    const t = $("#title");
    t.hidden = false;
    const go = () => {
      t.hidden = true;
      removeEventListener("keydown", key);
      onStart();
    };
    const key = (e) => {
      if (e.key === "Enter" || e.key === " ") go();
    };
    $("#start").onclick = go;
    addEventListener("keydown", key);
    $("#start").focus();
  },

  showHud() {
    $("#hud").hidden = false;
    $("#feed-btn").hidden = false;
  },

  setBalance(b) {
    if (!b) {
      $("#hud-inr").textContent = "₹ —";
      $("#hud-usdt").textContent = "offline";
      return;
    }
    $("#hud-inr").textContent = `₹ ${Math.floor(b.inr).toLocaleString("en-IN")}`;
    $("#hud-usdt").textContent = `${b.usdt.toFixed(2)} USDT`;
  },

  hint(text) {
    const h = $("#hint");
    h.hidden = !text;
    if (text) h.textContent = text;
    $("#talk").hidden = !text || !ui.touch;
  },

  toast(text, ms = 2600) {
    const t = $("#toast");
    t.textContent = text;
    t.hidden = false;
    clearTimeout(ui._toast);
    ui._toast = setTimeout(() => (t.hidden = true), ms);
  },

  // ---------------------------------------------------------------- feed
  feed: new Map(),
  upsertFeed(o) {
    ui.feed.set(o.id, o);
    const list = $("#feed-list");
    const rows = [...ui.feed.values()].sort((a, b) => Number(b.id) - Number(a.id));
    list.innerHTML = rows.length
      ? rows
          .map(
            (r) => `<li><span class="f-id">#${esc(r.id)}</span><span class="f-what">₹${esc(r.inr)} to ${esc(r.to)}</span>
              <span class="f-st st-${esc(r.status)}">${esc(r.status)}</span>
              ${r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">tx</a>` : ""}</li>`,
          )
          .join("")
      : `<li class="f-empty">No envelopes yet. Buy something from a stall.</li>`;
    $("#feed-count").textContent = rows.length ? String(rows.length) : "";
  },
};

// ------------------------------------------------------------------ dialogue

let typing = null;
let pendingCleanup = null;

/** A status line with no buttons (used while something is happening). */
ui.status = function status(name, text, html = "") {
  pendingCleanup?.();
  pendingCleanup = null;
  clearInterval(typing);
  typing = null;
  const box = $("#dialogue");
  box.hidden = false;
  box.dataset.tone = "busy";
  $("#dlg-name").textContent = name;
  $("#dlg-text").textContent = text;
  $("#dlg-extra").innerHTML = html;
  $("#dlg-choices").innerHTML = "";
  $("#dlg-next").hidden = true;
};

/**
 * Shows a line of dialogue. Resolves with the chosen option's value, or `true` when the player
 * presses next. `html` lets a line include links/buttons (already escaped by the caller).
 */
ui.say = function say(name, text, { choices = null, html = "", tone = "" } = {}) {
  pendingCleanup?.();
  const box = $("#dialogue");
  const tag = $("#dlg-name");
  const body = $("#dlg-text");
  const extra = $("#dlg-extra");
  const ch = $("#dlg-choices");
  const next = $("#dlg-next");
  box.hidden = false;
  box.dataset.tone = tone;
  tag.textContent = name;
  extra.innerHTML = html;
  ch.innerHTML = "";
  next.hidden = true;
  body.textContent = "";

  const full = String(text);
  let i = 0;
  clearInterval(typing);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  return new Promise((resolve) => {
    const finishTyping = () => {
      clearInterval(typing);
      typing = null;
      body.textContent = full;
      if (choices) {
        ch.innerHTML = choices
          .map((c, k) => `<button class="choice" data-k="${k}">${esc(c.label)}</button>`)
          .join("");
        ch.querySelectorAll("button").forEach((b) => {
          b.onclick = (e) => {
            e.stopPropagation();
            cleanup();
            resolve(choices[Number(b.dataset.k)].value);
          };
        });
        ch.querySelector("button")?.focus();
      } else {
        next.hidden = false;
        next.focus();
      }
    };
    const advance = (e) => {
      if (e && e.target.closest && e.target.closest("a, .choice, .copy")) return;
      if (typing) return finishTyping();
      if (!choices) {
        cleanup();
        resolve(true);
      }
    };
    const key = (e) => {
      if (["Enter", " ", "e", "E"].includes(e.key) && !(e.target instanceof HTMLButtonElement && e.target.classList.contains("choice"))) {
        e.preventDefault();
        advance();
      }
    };
    const cleanup = () => {
      box.removeEventListener("click", advance);
      removeEventListener("keydown", key);
      if (pendingCleanup === cleanup) pendingCleanup = null;
    };
    pendingCleanup = cleanup;
    box.addEventListener("click", advance);
    // defer so the key press that opened the dialogue doesn't skip it
    setTimeout(() => addEventListener("keydown", key), 50);

    if (reduce) return finishTyping();
    typing = setInterval(() => {
      i += 1;
      body.textContent = full.slice(0, i);
      if (i >= full.length) finishTyping();
    }, 28);
  });
};

ui.closeDialogue = () => {
  $("#dialogue").hidden = true;
};

ui.dialogueOpen = () => !$("#dialogue").hidden;

// ------------------------------------------------------------------ input

ui.touch = matchMedia("(pointer: coarse)").matches;

export function bindInput(walker, onTalk) {
  const keys = new Set();
  const sync = () => {
    walker.input.y = (keys.has("w") || keys.has("arrowup") ? 1 : 0) - (keys.has("s") || keys.has("arrowdown") ? 1 : 0);
    walker.input.x = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
    walker.input.run = keys.has("shift");
  };
  addEventListener("keydown", (e) => {
    if (ui.dialogueOpen()) return;
    const k = e.key.toLowerCase();
    if (k === "e") return onTalk();
    keys.add(k);
    sync();
  });
  addEventListener("keyup", (e) => {
    keys.delete(e.key.toLowerCase());
    sync();
  });
  addEventListener("blur", () => {
    keys.clear();
    sync();
  });

  $("#talk").onclick = onTalk;

  // virtual joystick
  const pad = $("#joy");
  const knob = $("#joy-knob");
  if (ui.touch) pad.hidden = false;
  let id = null;
  let cx = 0;
  let cy = 0;
  pad.addEventListener("pointerdown", (e) => {
    id = e.pointerId;
    const r = pad.getBoundingClientRect();
    cx = r.left + r.width / 2;
    cy = r.top + r.height / 2;
    pad.setPointerCapture(id);
    move(e);
  });
  const move = (e) => {
    if (e.pointerId !== id) return;
    let dx = (e.clientX - cx) / 50;
    let dy = (e.clientY - cy) / 50;
    const len = Math.hypot(dx, dy);
    if (len > 1) {
      dx /= len;
      dy /= len;
    }
    knob.style.transform = `translate(${dx * 40}px, ${dy * 40}px)`;
    walker.input.x = Math.abs(dx) > 0.15 ? dx : 0;
    walker.input.y = -dy;
    walker.input.run = len > 0.95;
  };
  pad.addEventListener("pointermove", move);
  const end = (e) => {
    if (e.pointerId !== id) return;
    id = null;
    knob.style.transform = "";
    walker.input.x = walker.input.y = 0;
    walker.input.run = false;
  };
  pad.addEventListener("pointerup", end);
  pad.addEventListener("pointercancel", end);
}

// feed toggle
document.addEventListener("click", (e) => {
  if (e.target.closest("#feed-btn")) $("#feed").hidden = !$("#feed").hidden;
  else if (e.target.closest("#feed-close")) $("#feed").hidden = true;
});
