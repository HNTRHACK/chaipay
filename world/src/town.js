import * as THREE from "three";
import { C, R } from "./palette.js";
import { StaticBatch, part } from "./batch.js";
import { toon, flat } from "./toon.js";
import {
  dirFromLatLon,
  surfaceMatrix,
  placeOnSurface,
  yawToward,
  angularDistance,
  roadDistance,
  ROADS,
  ROAD_HALF_WIDTH,
} from "./planet.js";

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, s = 10) => new THREE.CylinderGeometry(rt, rb, h, s);

// ------------------------------------------------------------------ layout

export const PLACES = {
  spawn: dirFromLatLon(-3, 0),
  raju: dirFromLatLon(5.5, 9),
  pinky: dirFromLatLon(-5.5, -12),
  lucky: dirFromLatLon(-5.5, 24),
  sharma: dirFromLatLon(9, -26),
  tower: dirFromLatLon(13, 4),
  addMoney: dirFromLatLon(-6.5, 3.5),
};

/** Colliders: { dir, radius (world units) }. The player can't walk into these. */
export const colliders = [];
function block(dir, radius) {
  colliders.push({ dir: dir.clone(), radius });
}

// ------------------------------------------------------------------ signs

export function textTexture(lines, { w = 512, h = 256, bg = "#F2F3EA", fg = "#1F2B2B", font = "Gochi Hand", size = 80, border = true } = {}) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  if (border) {
    g.strokeStyle = fg;
    g.lineWidth = 10;
    g.strokeRect(8, 8, w - 16, h - 16);
  }
  g.fillStyle = fg;
  g.textAlign = "center";
  g.textBaseline = "middle";
  const arr = Array.isArray(lines) ? lines : [lines];
  arr.forEach((line, i) => {
    const s = i === 0 ? size : size * 0.55;
    g.font = `${s}px "${font}", "Comic Sans MS", cursive`;
    g.fillText(line, w / 2, h / 2 + (i - (arr.length - 1) / 2) * size * 0.8);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function qrTexture(seed = 1) {
  const n = 25;
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#fff";
  g.fillRect(0, 0, 256, 256);
  const s = 256 / (n + 4);
  let x = seed * 9301 + 49297;
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280);
  g.fillStyle = "#1F2B2B";
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const finder = (i < 7 && j < 7) || (i > n - 8 && j < 7) || (i < 7 && j > n - 8);
      if (finder) continue;
      if (rnd() > 0.52) g.fillRect((i + 2) * s, (j + 2) * s, s + 0.5, s + 0.5);
    }
  for (const [fi, fj] of [[0, 0], [n - 7, 0], [0, n - 7]]) {
    g.fillRect((fi + 2) * s, (fj + 2) * s, 7 * s, 7 * s);
    g.fillStyle = "#fff";
    g.fillRect((fi + 3) * s, (fj + 3) * s, 5 * s, 5 * s);
    g.fillStyle = "#1F2B2B";
    g.fillRect((fi + 4) * s, (fj + 4) * s, 3 * s, 3 * s);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function signMesh(tex, w, h) {
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), flat(tex));
}

// ------------------------------------------------------------------ props (local space, +Y up, +Z front)

function house(rng) {
  const g = new THREE.Group();
  const w = 3.2 + rng() * 2.4;
  const d = 3 + rng() * 2;
  const floors = rng() > 0.6 ? 2 : 1;
  const h = 2.6 * floors;
  const wall = rng() > 0.25 ? C.paper : C.paperShade;
  const roofC = [C.roof, C.roofAlt, C.roofTeal, C.roof][Math.floor(rng() * 4)];
  g.add(part(box(w, h, d), wall, 0, h / 2, 0));
  if (rng() > 0.45) {
    // flat roof with a parapet + water tank (very Indian street)
    g.add(part(box(w + 0.2, 0.35, d + 0.2), C.paperShade, 0, h + 0.17, 0));
    g.add(part(cyl(0.45, 0.45, 0.9, 8), C.ink, w * 0.25, h + 0.8, -d * 0.2));
  } else {
    const roof = part(new THREE.CylinderGeometry(0.01, Math.max(w, d) * 0.78, 1.6, 4, 1), roofC, 0, h + 0.8, 0, 0, Math.PI / 4, 0);
    roof.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d));
    g.add(roof);
  }
  for (let f = 0; f < floors; f++) {
    const y = 1.5 + f * 2.6;
    g.add(part(box(0.7, 0.8, 0.06), C.window, -w * 0.25, y, d / 2 + 0.01));
    g.add(part(box(0.7, 0.8, 0.06), C.window, w * 0.25, y, d / 2 + 0.01));
  }
  if (rng() > 0.5) g.add(part(box(w * 0.9, 0.12, 0.9), C.paperShade, 0, 2.5, d / 2 + 0.45)); // balcony
  g.add(part(box(0.9, 1.7, 0.06), C.wood, 0, 0.85, d / 2 + 0.02));
  return { group: g, radius: Math.max(w, d) * 0.62 };
}

function tree(rng) {
  const g = new THREE.Group();
  const h = 1.6 + rng() * 1.4;
  g.add(part(cyl(0.16, 0.24, h, 6), C.wood, 0, h / 2, 0));
  const blobs = 2 + Math.floor(rng() * 3);
  for (let i = 0; i < blobs; i++) {
    const r = 0.9 + rng() * 0.8;
    const c = rng() > 0.4 ? C.leaf : C.leafDark;
    g.add(part(new THREE.IcosahedronGeometry(r, 0), c, (rng() - 0.5) * 1.4, h + r * 0.6 + i * 0.35, (rng() - 0.5) * 1.4, rng(), rng(), rng()));
  }
  return { group: g, radius: 0.6 };
}

function pole() {
  const g = new THREE.Group();
  g.add(part(cyl(0.12, 0.16, 7, 6), C.steel, 0, 3.5, 0));
  g.add(part(box(1.8, 0.12, 0.12), C.steel, 0, 6.6, 0));
  g.add(part(cyl(0.22, 0.22, 0.6, 6), C.paperShade, 0.5, 6.1, 0.15));
  return g;
}

function railing(len) {
  const g = new THREE.Group();
  g.add(part(box(len, 0.3, 0.08), C.paper, 0, 0.75, 0));
  for (let x = -len / 2; x <= len / 2 + 0.01; x += 1.5) g.add(part(box(0.12, 0.8, 0.12), C.paper, x, 0.4, 0));
  return g;
}

function scooter(color) {
  const g = new THREE.Group();
  g.add(part(box(0.5, 0.45, 1.5), color, 0, 0.55, 0));
  g.add(part(box(0.45, 0.9, 0.25), color, 0, 0.95, 0.6));
  g.add(part(cyl(0.28, 0.28, 0.2, 10), C.ink, 0, 0.28, 0.65, 0, 0, Math.PI / 2));
  g.add(part(cyl(0.28, 0.28, 0.2, 10), C.ink, 0, 0.28, -0.55, 0, 0, Math.PI / 2));
  g.add(part(box(0.9, 0.08, 0.08), C.steel, 0, 1.45, 0.65));
  return g;
}

// ------------------------------------------------------------------ landmark builders (not batched: they have signs)

function stall({ name, sub, tarp, counter, extras }) {
  const g = new THREE.Group();
  g.add(part(box(3.6, 1.1, 1.4), counter, 0, 0.55, 0.6));
  g.add(part(box(3.8, 0.1, 1.6), C.wood, 0, 1.15, 0.6));
  for (const x of [-1.75, 1.75]) for (const z of [-0.9, 1.2]) g.add(part(cyl(0.07, 0.07, 2.9, 6), C.steel, x, 1.45, z));
  const roof = part(box(4.4, 0.12, 2.9), tarp, 0, 2.95, 0.15, -0.12, 0, 0);
  g.add(roof);
  g.add(part(box(4.4, 0.4, 0.06), tarp, 0, 2.75, 1.6)); // valance
  const sign = signMesh(textTexture([name, sub], { size: 74 }), 2.8, 0.9);
  sign.position.set(0, 3.55, 0.95);
  sign.rotation.x = -0.12;
  g.add(sign);
  const qr = signMesh(qrTexture(name.length * 7), 0.75, 0.75);
  qr.position.set(1.25, 1.65, 1.38);
  g.add(qr);
  const qrLabel = signMesh(textTexture("UPI", { w: 256, h: 96, size: 64, bg: "#5AA9E2", fg: "#ffffff", border: false }), 0.75, 0.28);
  qrLabel.position.set(1.25, 2.15, 1.38);
  g.add(qrLabel);
  for (const e of extras) g.add(e);
  return g;
}

function chaiExtras() {
  const out = [];
  out.push(part(cyl(0.32, 0.38, 0.55, 12), C.steel, -0.9, 1.48, 0.6)); // kettle
  out.push(part(cyl(0.05, 0.05, 0.4, 6), C.steel, -0.5, 1.55, 0.6, 0, 0, -1.1)); // spout
  out.push(part(cyl(0.45, 0.45, 0.25, 12), C.ink, -0.9, 1.15 + 0.12, 0.6)); // stove
  for (let i = 0; i < 4; i++) out.push(part(cyl(0.09, 0.07, 0.22, 8), C.chai, 0.1 + i * 0.25, 1.32, 0.95));
  return out;
}
function vadaPavExtras() {
  const out = [];
  out.push(part(cyl(0.55, 0.45, 0.3, 14), C.ink, -0.8, 1.35, 0.6)); // kadhai
  for (let i = 0; i < 5; i++) out.push(part(new THREE.IcosahedronGeometry(0.15, 0), C.haldi, 0.1 + (i % 3) * 0.3, 1.33, 0.7 + Math.floor(i / 3) * 0.3));
  for (const x of [-1.5, 1.5]) out.push(part(cyl(0.45, 0.45, 0.15, 12), C.ink, x, 0.45, 1.35, 0, 0, Math.PI / 2)); // cart wheels
  return out;
}
function paanExtras() {
  const out = [];
  for (let i = 0; i < 6; i++) out.push(part(box(0.18, 0.5, 0.03), i % 2 ? C.red : C.haldi, -1.5 + i * 0.55, 2.4, 1.55)); // hanging packets
  out.push(part(box(1, 0.5, 0.6), C.leaf, -0.6, 1.45, 0.6));
  return out;
}

function escrowTower() {
  const g = new THREE.Group();
  g.add(part(cyl(1.6, 2.1, 1, 8), C.paperShade, 0, 0.5, 0));
  g.add(part(cyl(1.1, 1.5, 7, 8), C.paper, 0, 4.5, 0));
  for (let y = 2; y < 8; y += 1.8) g.add(part(cyl(1.25, 1.25, 0.22, 8), C.tagBlue, 0, y, 0));
  g.add(part(cyl(1.6, 1.6, 0.25, 8), C.ink, 0, 8.1, 0));
  const beacon = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), toon(C.haldi, { emissive: 0x6b5200 }));
  beacon.position.y = 9.1;
  beacon.name = "beacon";
  g.add(beacon);
  g.add(part(new THREE.ConeGeometry(1.4, 1.2, 8), C.roof, 0, 10.4, 0));
  const sign = signMesh(textTexture(["ChaiPay Escrow", "holds USDT, not us"], { size: 64 }), 3, 1);
  sign.position.set(0, 3, 1.6);
  g.add(sign);
  return g;
}

function partnerHut() {
  const g = new THREE.Group();
  g.add(part(box(4, 2.8, 3.2), C.roofAlt, 0, 1.4, 0));
  g.add(part(box(4.6, 0.3, 3.8), C.ink, 0, 2.95, 0));
  g.add(part(box(2.2, 0.9, 0.9), C.wood, 0, 0.45, 2.2)); // desk outside
  g.add(part(box(0.3, 0.55, 0.05), C.ink, 0.5, 1.2, 2.2)); // phone
  g.add(part(cyl(0.06, 0.06, 0.6, 6), C.steel, -0.8, 1.2, 2.1));
  g.add(part(cyl(0.25, 0.1, 0.3, 8), C.haldi, -0.8, 1.55, 2.1)); // lamp
  const sign = signMesh(textTexture(["Sharma Ji", "cash partner"], { size: 70 }), 2.6, 0.9);
  sign.position.set(0, 2.2, 1.62);
  g.add(sign);
  return g;
}

function addMoneySign() {
  const g = new THREE.Group();
  g.add(part(cyl(0.08, 0.08, 2.2, 6), C.wood, -0.7, 1.1, 0));
  g.add(part(cyl(0.08, 0.08, 2.2, 6), C.wood, 0.7, 1.1, 0));
  const s = signMesh(textTexture(["Add money", "top up USDT"], { size: 70, bg: "#F2C744" }), 1.9, 0.95);
  s.position.set(0, 1.85, 0.06);
  g.add(s);
  return g;
}

// ------------------------------------------------------------------ build the town

function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomDir(rng) {
  const u = rng() * 2 - 1;
  const th = rng() * Math.PI * 2;
  const s = Math.sqrt(1 - u * u);
  return new THREE.Vector3(s * Math.cos(th), u, s * Math.sin(th));
}

export function buildTown(scene) {
  colliders.length = 0;
  const rng = mulberry(42);
  const batch = new StaticBatch();
  const landmarks = {};

  const nearRoadYaw = (dir) => {
    // face the nearest road
    let best = null;
    let bd = Infinity;
    for (const n of ROADS) {
      const d = Math.abs(dir.dot(n));
      if (d < bd) {
        bd = d;
        best = n;
      }
    }
    const onRoad = dir.clone().sub(best.clone().multiplyScalar(dir.dot(best))).normalize();
    return yawToward(dir, onRoad);
  };

  // Landmarks
  const addLandmark = (key, group, dir, radius, lift = 0) => {
    const yaw = nearRoadYaw(dir);
    placeOnSurface(group, dir, yaw, lift);
    scene.add(group);
    block(dir, radius);
    landmarks[key] = { group, dir, yaw };
  };
  addLandmark("raju", stall({ name: "Raju's Chai", sub: "garam chai", tarp: C.red, counter: C.paper, extras: chaiExtras() }), PLACES.raju, 2.1);
  addLandmark("pinky", stall({ name: "Pinky Vada Pav", sub: "fresh & hot", tarp: C.pink, counter: C.haldi, extras: vadaPavExtras() }), PLACES.pinky, 2.1);
  addLandmark("lucky", stall({ name: "Lucky Paan", sub: "meetha paan", tarp: C.leaf, counter: C.paper, extras: paanExtras() }), PLACES.lucky, 2.1);
  addLandmark("sharma", partnerHut(), PLACES.sharma, 2.6);
  {
    const t = escrowTower();
    placeOnSurface(t, PLACES.tower, 0);
    scene.add(t);
    block(PLACES.tower, 2.2);
    landmarks.tower = { group: t, dir: PLACES.tower, yaw: 0 };
  }
  addLandmark("addMoney", addMoneySign(), PLACES.addMoney, 0.6);

  const keepClear = Object.values(PLACES);
  const tooClose = (dir, minWorld) => keepClear.some((p) => angularDistance(p, dir) * R < minWorld);

  // Houses along the roads, then scattered
  const placed = [];
  const free = (dir, r) => placed.every((p) => angularDistance(p.dir, dir) * R > p.r + r + 0.6);
  let tries = 0;
  while (placed.length < 95 && tries < 6000) {
    tries++;
    const dir = randomDir(rng);
    const rd = roadDistance(dir);
    const nearRoad = rd > ROAD_HALF_WIDTH + 2.6 && rd < ROAD_HALF_WIDTH + 6;
    if (!nearRoad && rng() > 0.35) continue;
    if (rd < ROAD_HALF_WIDTH + 2.6) continue;
    if (tooClose(dir, 7)) continue;
    const h = house(rng);
    if (!free(dir, h.radius)) continue;
    batch.addGroup(h.group, surfaceMatrix(dir, nearRoadYaw(dir)));
    placed.push({ dir, r: h.radius });
    block(dir, h.radius);
  }

  // Trees
  let trees = 0;
  tries = 0;
  while (trees < 170 && tries < 8000) {
    tries++;
    const dir = randomDir(rng);
    if (roadDistance(dir) < ROAD_HALF_WIDTH + 1) continue;
    if (tooClose(dir, 4.5)) continue;
    if (!free(dir, 0.8)) continue;
    const t = tree(rng);
    batch.addGroup(t.group, surfaceMatrix(dir, rng() * 6.28, 0, 0.85 + rng() * 0.5));
    placed.push({ dir, r: 0.8 });
    block(dir, 0.55);
    trees++;
  }

  // Electric poles along the equator road with sagging wires between them
  const poleTops = [];
  for (let lon = -180; lon < 180; lon += 13) {
    const dir = dirFromLatLon(-(ROAD_HALF_WIDTH + 0.9) / R * (180 / Math.PI), lon);
    if (tooClose(dir, 9)) continue;
    const m = surfaceMatrix(dir, 0);
    batch.addGroup(pole(), m);
    block(dir, 0.3);
    poleTops.push(dir.clone().multiplyScalar(R + 6.6));
  }
  for (let i = 0; i < poleTops.length; i++) {
    const a = poleTops[i];
    const b = poleTops[(i + 1) % poleTops.length];
    if (a.distanceTo(b) > 14) continue;
    for (const off of [-0.7, 0.7]) {
      const pts = [];
      for (let k = 0; k <= 12; k++) {
        const t = k / 12;
        const p = a.clone().lerp(b, t);
        const sag = Math.sin(Math.PI * t) * 0.9;
        p.setLength(p.length() - sag);
        p.y += off * 0.05;
        pts.push(p);
      }
      const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.035, 4);
      batch.add(tube, new THREE.Matrix4(), C.ink);
    }
  }

  // Guard rails, scooters, potted plants for street life
  let streetBits = 0;
  tries = 0;
  for (let i = 0; streetBits < 26 && tries < 20000; tries++) {
    const dir = randomDir(rng);
    const rd = roadDistance(dir);
    if (rd < ROAD_HALF_WIDTH + 0.6 || rd > ROAD_HALF_WIDTH + 2) continue;
    if (tooClose(dir, 4) || !free(dir, 1.2)) continue;
    i = streetBits++;
    const yaw = nearRoadYaw(dir) + Math.PI / 2;
    if (i % 3 === 0) {
      batch.addGroup(scooter([C.red, C.tagBlue, C.haldi, C.roofTeal][i % 4]), surfaceMatrix(dir, yaw));
      block(dir, 0.8);
    } else {
      batch.addGroup(railing(5), surfaceMatrix(dir, yaw));
    }
    placed.push({ dir, r: 1.2 });
  }

  const town = batch.build();
  scene.add(town);
  return { town, landmarks };
}
