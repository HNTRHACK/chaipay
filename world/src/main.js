import * as THREE from "three";
import { C, R } from "./palette.js";
import { makePlanet, makeSky, angularDistance } from "./planet.js";
import { buildTown, PLACES } from "./town.js";
import { makePerson, animatePerson, CAST } from "./people.js";
import { Walker, FollowCam } from "./player.js";
import { InkPass } from "./post.js";
import { makeTitle } from "./title.js";
import { Envelope, Confetti, chaiGlass } from "./fx.js";
import { ui, bindInput } from "./ui.js";
import { VENDORS } from "./vendors.js";
import * as chain from "./chain.js";
import "./style.css";

// Optional per-demo overrides: /world/?raju=friend@okaxis
const params = new URLSearchParams(location.search);
for (const k of Object.keys(VENDORS)) if (params.get(k)) VENDORS[k].vpa = params.get(k);

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// ------------------------------------------------------------------ renderer & scene

const canvas = document.getElementById("scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance" });
const PR = Math.min(devicePixelRatio || 1, 1.5);
renderer.setPixelRatio(PR);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(C.sky);
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 2000);
scene.add(camera);

const ambient = new THREE.AmbientLight(0xffffff, 1.35);
const sun = new THREE.DirectionalLight(0xffffff, 1.9);
scene.add(ambient, sun, sun.target);

const sky = makeSky();
scene.add(sky);
const planet = makePlanet();
scene.add(planet);

const ink = new InkPass(renderer);

function resize() {
  const w = innerWidth;
  const h = innerHeight;
  renderer.setSize(w, h, false);
  ink.setSize(w, h, PR);
  camera.aspect = w / h;
  camera.fov = w < h ? 68 : 55;
  camera.updateProjectionMatrix();
}
addEventListener("resize", resize);
resize();

// ------------------------------------------------------------------ world

await document.fonts?.ready; // sign textures use the handwritten font
await Promise.race([document.fonts?.load?.('80px "Gochi Hand"'), new Promise((r) => setTimeout(r, 1500))]).catch(() => {});

const { landmarks } = buildTown(scene);

// The player
const me = makePerson(CAST.player);
scene.add(me.group);
const walker = new Walker(me, PLACES.spawn);
const follow = new FollowCam(camera);

// NPCs: stand behind their counter, facing the street
const npcs = {};
function addNpc(key, cast, local, talkLocal) {
  const lm = landmarks[key];
  const p = makePerson(cast);
  lm.group.add(p.group);
  p.group.position.copy(local);
  const talkAt = lm.group.localToWorld(talkLocal.clone());
  npcs[key] = { person: p, talkAt, home: lm };
}
for (const k of ["raju", "pinky", "lucky"]) addNpc(k, CAST[k], new THREE.Vector3(0, 0, -0.55), new THREE.Vector3(0, 0, 3.1));
addNpc("sharma", CAST.sharma, new THREE.Vector3(0.2, 0, 1.85), new THREE.Vector3(0, 0, 4.1));

const interactables = [
  ...Object.keys(VENDORS).map((k) => ({ key: k, label: `TALK TO ${VENDORS[k].name}`, at: npcs[k].talkAt, run: () => talkVendor(k) })),
  { key: "sharma", label: "TALK TO SHARMA JI", at: npcs.sharma.talkAt, run: talkSharma },
  { key: "tower", label: "READ THE ESCROW TOWER", at: landmarks.tower.group.localToWorld(new THREE.Vector3(0, 0, 3.2)), run: talkTower },
  { key: "addMoney", label: "READ THE SIGN", at: landmarks.addMoney.group.localToWorld(new THREE.Vector3(0, 0, 1.6)), run: talkAddMoney },
];

const beacon = landmarks.tower.group.getObjectByName("beacon");
const towerTop = () => landmarks.tower.group.localToWorld(new THREE.Vector3(0, 11.8, 0));
const sharmaDesk = () => landmarks.sharma.group.localToWorld(new THREE.Vector3(0.5, 1.6, 2.2));
const vendorHands = (k) => npcs[k].home.group.localToWorld(new THREE.Vector3(0, 1.8, 0.4));
const playerHands = () => me.group.localToWorld(new THREE.Vector3(0, 1.4, 0.5));

const confetti = new Confetti(scene);
const envelopes = new Set();
let beaconPulse = 0;

// ------------------------------------------------------------------ title

const title = makeTitle();
camera.add(title);
let mode = "title";
let titleT = 0;
let swoop = null;

function titleCamera(t) {
  const a = t * 0.12;
  const pos = new THREE.Vector3(Math.sin(a) * 150, 45 + Math.sin(t * 0.2) * 8, Math.cos(a) * 150);
  camera.position.copy(pos);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, -8, 0);
}

function startGame() {
  const from = { pos: camera.position.clone(), up: camera.up.clone(), look: new THREE.Vector3(0, -8, 0) };
  const to = follow.desired(walker);
  if (reduceMotion) {
    finishSwoop();
    return;
  }
  mode = "swoop";
  swoop = { t: 0, from, to };
}

function finishSwoop() {
  mode = "play";
  camera.remove(title);
  follow.snap(walker);
  walker.enabled = true;
  ui.showHud();
  refreshBalance();
  setTimeout(() => {
    ui.say("YOU", "SLEPT IN AGAIN... RAJU'S CHAI IS JUST UP THE ROAD. I'VE GOT USDT, HE TAKES UPI. LET'S SEE.").then(ui.closeDialogue);
  }, 300);
}

// ------------------------------------------------------------------ chain bits

async function refreshBalance() {
  try {
    ui.setBalance(await chain.balance());
  } catch {
    ui.setBalance(null);
  }
}

let busy = false; // one conversation at a time

async function talkVendor(k) {
  const v = VENDORS[k];
  const npc = npcs[k];
  walker.face(npc.home.dir);
  const pick = await ui.say(v.name, v.greet, {
    choices: [
      { label: `PAY ₹${v.inr}`, value: "pay" },
      { label: "NOT NOW", value: "no" },
    ],
  });
  if (pick !== "pay") return ui.closeDialogue();

  let q;
  try {
    ui.status(v.name, "LET ME CHECK THE RATE...");
    q = await chain.quote(v.inr);
  } catch (e) {
    await ui.say(v.name, e.message, { tone: "error" });
    return ui.closeDialogue();
  }
  const ok = await ui.say(v.name, `₹${v.inr} = ${Number(q.usdt).toFixed(4)} USDT. NETWORK FEE ₹0.`, {
    choices: [
      { label: "CONFIRM", value: "go" },
      { label: "BACK", value: "back" },
    ],
  });
  if (ok !== "go") return ui.closeDialogue();

  ui.status("YOU", "SIGNING ON MY PHONE... NO GAS NEEDED.");
  me.holding = true;
  let res;
  try {
    res = await chain.pay({ vpa: v.vpa, name: v.shop, q });
  } catch (e) {
    me.holding = false;
    await ui.say(v.name, e.message, { tone: "error", choices: [{ label: "OK", value: 1 }] });
    if (e.message.includes("ADD MONEY")) ui.toast("TOP UP AT THE YELLOW ‘ADD MONEY’ SIGN NEAR WHERE YOU WOKE UP.");
    return ui.closeDialogue();
  }
  me.holding = false;
  runOrder(k, res, q);
  await ui.say("ESCROW", "LOCKED IN ESCROW. NOT HELD BY US.", {
    html: `<a href="${esc(res.explorerUrl)}" target="_blank" rel="noopener">View the transaction</a>`,
  });
  await ui.say(v.name, "SHARMA JI WILL PICK IT UP AND PAY ME OVER UPI. WATCH THE ENVELOPE.");
  ui.closeDialogue();
}

/** Plays the order's journey: player → escrow tower → Sharma Ji → vendor (or back to player). */
function runOrder(k, res, q) {
  const v = VENDORS[k];
  const env = new Envelope(scene);
  envelopes.add(env);
  const feed = { id: res.orderId, inr: String(v.inr), to: v.shop, status: "Open", url: res.explorerUrl };
  ui.upsertFeed(feed);

  let stage = "start";
  let queue = env.fly(playerHands(), towerTop(), { height: 5, duration: 2.4 }).then(() => {
    env.park(towerTop());
    beaconPulse = 2.5;
    stage = "escrow";
  });

  const toSharma = () =>
    (queue = queue.then(async () => {
      if (stage !== "escrow") return;
      stage = "partner";
      await env.fly(towerTop(), sharmaDesk(), { height: 6, duration: 2.6 });
      env.park(sharmaDesk());
      npcs.sharma.person.holding = true;
      ui.toast("SHARMA JI TOOK THE ORDER. HE'S PAYING OVER UPI NOW.");
    }));

  chain.watchOrder(res.orderId, (o) => {
    feed.status = o.status;
    ui.upsertFeed(feed);
    if (o.status === "Claimed") toSharma();
    if (o.status === "Fulfilled") {
      toSharma();
      queue = queue.then(async () => {
        await env.fly(sharmaDesk(), vendorHands(k), { height: 6, duration: 2.4 });
        npcs.sharma.person.holding = false;
        env.dispose();
        envelopes.delete(env);
        npcs[k].person.cheer = 1.6;
        confetti.burst(vendorHands(k));
        giveItem(k);
        refreshBalance();
        const near = angularDistance(walker.dir, npcs[k].talkAt.clone().normalize()) * R < 12;
        if (near && !busy) {
          busy = true;
          await ui.say(v.name, `₹${v.inr} JUST LANDED IN MY BANK, AND YOU PAID IN USDT. ${v.thanks}`);
          ui.closeDialogue();
          busy = false;
        } else {
          ui.toast(`${v.name} GOT ₹${v.inr} OVER UPI. YOUR ${v.item.toUpperCase()} IS READY!`, 4000);
        }
      });
    }
    if (o.status === "Refunded") {
      queue = queue.then(async () => {
        const from = stage === "partner" ? sharmaDesk() : towerTop();
        npcs.sharma.person.holding = false;
        await env.fly(from, playerHands(), { height: 5, duration: 2.4 });
        env.dispose();
        envelopes.delete(env);
        refreshBalance();
        ui.toast("NOBODY PAID THE SHOP IN TIME, SO YOUR USDT CAME BACK.", 4500);
      });
    }
  });
}

let held = null;
function giveItem(k) {
  if (held) me.holdSlot.remove(held);
  held = chaiGlass();
  if (k !== "raju") held.children[1].material = held.children[1].material.clone();
  if (k === "pinky") held.children[1].material.color.set(C.haldi);
  if (k === "lucky") held.children[1].material.color.set(C.leaf);
  me.holdSlot.add(held);
  me.holding = true;
  setTimeout(() => {
    me.holding = false;
    if (held) me.holdSlot.remove(held);
    held = null;
  }, 14000);
}

async function talkSharma() {
  await ui.say("SHARMA JI", "NAMASTE! I'M A CASH PARTNER. WHEN YOU PAY IN USDT, I PAY THE SHOP IN RUPEES OVER UPI.");
  await ui.say("SHARMA JI", "THE ESCROW ONLY RELEASES YOUR USDT TO ME AFTER MY UPI PAYOUT IS VERIFIED. IF I DON'T PAY IN TIME, IT GOES BACK TO YOU.", {
    html: `<a href="/#lp" target="_blank" rel="noopener">Open the partner dashboard</a>`,
  });
  ui.closeDialogue();
}

async function talkTower() {
  let link = "";
  try {
    const cfg = await chain.config();
    link = `<a href="${esc(cfg.explorer)}/address/${esc(cfg.contract)}" target="_blank" rel="noopener">See the escrow contract</a>`;
  } catch {
    /* offline */
  }
  await ui.say("ESCROW TOWER", "EVERY PAYMENT WAITS HERE AS USDT. NOBODY CAN TAKE IT EXCEPT THE SHOP'S CASH PARTNER, AFTER A VERIFIED UPI PAYOUT.");
  await ui.say("ESCROW TOWER", "LIVES ON WHITECHAIN. A RELAYER PAYS THE GAS, SO YOU NEVER NEED ANY.", { html: link });
  ui.closeDialogue();
}

async function talkAddMoney() {
  let line = "";
  try {
    const b = await chain.balance();
    line = `YOU HAVE ₹${Math.floor(b.inr)} (${b.usdt.toFixed(2)} USDT).`;
  } catch {
    line = "THE CHAIPAY SERVER IS OFFLINE RIGHT NOW.";
  }
  await ui.say("SIGN", `${line} TO TOP UP, SEND USDT ON WHITECHAIN TO YOUR CHAIPAY BALANCE FOR THIS ADDRESS:`, {
    html: `<code class="addr">${esc(chain.account.address)}</code> <button class="copy" type="button">Copy</button>`,
  });
  ui.closeDialogue();
}

document.addEventListener("click", async (e) => {
  const b = e.target.closest(".copy");
  if (!b) return;
  try {
    await navigator.clipboard.writeText(chain.account.address);
    b.textContent = "Copied";
  } catch {
    b.textContent = "Copy failed";
  }
});

// ------------------------------------------------------------------ talking

let nearest = null;
function findNearest() {
  let best = null;
  let bd = 3.4;
  for (const it of interactables) {
    const d = it.at.distanceTo(me.group.position);
    if (d < bd) {
      bd = d;
      best = it;
    }
  }
  return best;
}

async function talk() {
  if (busy || mode !== "play" || !nearest) return;
  busy = true;
  walker.enabled = false;
  walker.input.x = walker.input.y = 0;
  ui.hint("");
  try {
    await nearest.run();
  } finally {
    walker.enabled = true;
    busy = false;
  }
}
bindInput(walker, talk);

// ------------------------------------------------------------------ loop

const clock = new THREE.Clock();
const lightDir = new THREE.Vector3();

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (mode === "title") {
    titleT += dt;
    titleCamera(titleT);
    title.userData.update(t);
  } else if (mode === "swoop") {
    swoop.t = Math.min(1, swoop.t + dt / 2.6);
    const e = 1 - Math.pow(1 - swoop.t, 3);
    camera.position.lerpVectors(swoop.from.pos, swoop.to.pos, e);
    camera.up.lerpVectors(swoop.from.up, swoop.to.up, e).normalize();
    const look = new THREE.Vector3().lerpVectors(swoop.from.look, swoop.to.look, e);
    camera.lookAt(look);
    title.scale.setScalar(Math.max(0.0001, 1 - swoop.t * 3));
    if (swoop.t >= 1) finishSwoop();
  } else {
    walker.update(dt);
    follow.update(walker, dt);
    if (!busy && !ui.dialogueOpen()) {
      nearest = findNearest();
      ui.hint(nearest ? (ui.touch ? nearest.label : `PRESS E · ${nearest.label}`) : "");
    } else ui.hint("");
  }

  animatePerson(me, dt, Math.abs(walker.speed), t);
  for (const k in npcs) {
    const n = npcs[k].person;
    animatePerson(n, dt, 0, t);
    // look toward the player when near
    const d = n.group.getWorldPosition(new THREE.Vector3()).distanceTo(me.group.position);
    const target = d < 9 ? 0.5 * Math.sign(Math.sin(t * 0.3 + n.phase)) : 0;
    n.head.rotation.y += (target - n.head.rotation.y) * Math.min(1, dt * 3);
  }
  if (held) held.userData.update(t);

  for (const env of envelopes) env.update(dt);
  confetti.update(dt);
  beaconPulse = Math.max(0, beaconPulse - dt);
  beacon.scale.setScalar(1 + Math.sin(t * 3) * 0.06 + (beaconPulse > 0 ? Math.sin(beaconPulse * 12) * 0.25 : 0));

  // Keep the scene lit from over the viewer's shoulder, wherever they are on the planet.
  const up = camera.up;
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const back = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 2);
  lightDir.copy(up).multiplyScalar(1).addScaledVector(right, 0.55).addScaledVector(back, 0.35).normalize();
  if (mode === "title") lightDir.copy(camera.position).normalize().addScaledVector(up, 0.6).normalize();
  sun.position.copy(lightDir).multiplyScalar(100);
  planet.material.uniforms.uLight.value.copy(lightDir);
  sky.material.uniforms.uTime.value = t;

  ink.render(scene, camera, t, [sky]);
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ boot

requestAnimationFrame(frame);
ui.hideLoading();
ui.showTitle(startGame);
// Test hook (used by the automated browser test; harmless in production)
window.__chainagar = { walker, follow, landmarks, npcs, interactables, account: chain.account, get mode() { return mode; } };
