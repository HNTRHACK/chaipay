import * as THREE from "three";
import { C } from "./palette.js";
import { toon } from "./toon.js";

const mesh = (g, c) => new THREE.Mesh(g, toon(c));

/** A small stylised person. +Z is the front. Returns the group plus limb refs for animation. */
export function makePerson(o = {}) {
  const skin = o.skin ?? C.skin;
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);

  const legGeo = new THREE.BoxGeometry(0.22, 0.75, 0.24);
  legGeo.translate(0, -0.375, 0);
  const legL = mesh(legGeo, o.pants ?? C.window);
  const legR = mesh(legGeo, o.pants ?? C.window);
  legL.position.set(-0.14, 0.8, 0);
  legR.position.set(0.14, 0.8, 0);
  const shoe = new THREE.BoxGeometry(0.24, 0.12, 0.34);
  shoe.translate(0, -0.75, 0.05);
  legL.add(mesh(shoe, C.paper));
  legR.add(mesh(shoe, C.paper));
  body.add(legL, legR);

  const torso = mesh(new THREE.BoxGeometry(0.62, 0.72, 0.36), o.shirt ?? C.paper);
  torso.position.y = 1.15;
  body.add(torso);
  if (o.vest) {
    const v = mesh(new THREE.BoxGeometry(0.64, 0.5, 0.38), o.vest);
    v.position.y = 1.2;
    body.add(v);
  }

  const armGeo = new THREE.BoxGeometry(0.17, 0.62, 0.18);
  armGeo.translate(0, -0.31, 0);
  const armL = mesh(armGeo, o.sleeves ?? o.shirt ?? C.paper);
  const armR = mesh(armGeo, o.sleeves ?? o.shirt ?? C.paper);
  armL.position.set(-0.42, 1.48, 0);
  armR.position.set(0.42, 1.48, 0);
  const hand = new THREE.BoxGeometry(0.15, 0.14, 0.16);
  hand.translate(0, -0.66, 0);
  armL.add(mesh(hand, skin));
  armR.add(mesh(hand, skin));
  body.add(armL, armR);

  const head = new THREE.Group();
  head.position.y = 1.78;
  body.add(head);
  const face = mesh(new THREE.BoxGeometry(0.46, 0.5, 0.44), skin);
  head.add(face);
  const hair = mesh(new THREE.BoxGeometry(0.5, 0.2, 0.48), o.hair ?? C.hair);
  hair.position.set(0, 0.2, -0.02);
  head.add(hair);
  const back = mesh(new THREE.BoxGeometry(0.5, 0.38, 0.12), o.hair ?? C.hair);
  back.position.set(0, 0.04, -0.2);
  head.add(back);
  for (const x of [-0.1, 0.1]) {
    const eye = mesh(new THREE.BoxGeometry(0.06, 0.08, 0.02), C.ink);
    eye.position.set(x, 0.02, 0.225);
    head.add(eye);
  }
  if (o.mustache) {
    const m = mesh(new THREE.BoxGeometry(0.26, 0.05, 0.03), C.ink);
    m.position.set(0, -0.1, 0.23);
    head.add(m);
  }
  if (o.glasses) {
    const gl = mesh(new THREE.BoxGeometry(0.34, 0.03, 0.03), C.ink);
    gl.position.set(0, 0.02, 0.235);
    head.add(gl);
    for (const x of [-0.1, 0.1]) {
      const lens = mesh(new THREE.BoxGeometry(0.13, 0.11, 0.02), C.steel);
      lens.position.set(x, 0.02, 0.24);
      head.add(lens);
    }
  }
  if (o.cap) {
    const cap = mesh(new THREE.BoxGeometry(0.52, 0.14, 0.5), o.cap);
    cap.position.set(0, 0.3, 0);
    head.add(cap);
    const brim = mesh(new THREE.BoxGeometry(0.46, 0.05, 0.28), o.cap);
    brim.position.set(0, 0.25, 0.32);
    head.add(brim);
  }
  if (o.bun) {
    const bun = mesh(new THREE.IcosahedronGeometry(0.16, 0), o.hair ?? C.hair);
    bun.position.set(0, 0.32, -0.12);
    head.add(bun);
  }
  if (o.towel) {
    const t = mesh(new THREE.BoxGeometry(0.12, 0.6, 0.38), o.towel);
    t.position.set(0.32, 1.35, 0);
    body.add(t);
  }
  if (o.dupatta) {
    const d = mesh(new THREE.BoxGeometry(0.66, 0.14, 0.4), o.dupatta);
    d.position.set(0, 1.45, 0);
    d.rotation.z = 0.3;
    body.add(d);
  }
  if (o.bag) {
    const bag = mesh(new THREE.BoxGeometry(0.3, 0.32, 0.12), o.bag);
    bag.position.set(0.3, 1.0, -0.22);
    body.add(bag);
    const strap = mesh(new THREE.BoxGeometry(0.06, 0.8, 0.4), o.bag);
    strap.position.set(0, 1.25, 0);
    strap.rotation.z = 0.6;
    body.add(strap);
  }

  // what the person holds when a payment completes
  const holdSlot = new THREE.Group();
  holdSlot.position.set(0, -0.72, 0.1);
  armR.add(holdSlot);

  return { group: g, body, legL, legR, armL, armR, head, holdSlot, phase: Math.random() * 6 };
}

/** Advance walk/idle animation. `speed` in units/s. */
export function animatePerson(p, dt, speed, t) {
  const moving = speed > 0.2;
  p.phase += dt * (moving ? 2.2 + speed * 1.1 : 1.5);
  const s = Math.sin(p.phase * 2);
  if (moving) {
    const amp = Math.min(0.9, 0.35 + speed * 0.08);
    p.legL.rotation.x = s * amp;
    p.legR.rotation.x = -s * amp;
    p.armL.rotation.x = -s * amp * 0.8;
    if (!p.holding) p.armR.rotation.x = s * amp * 0.8;
    p.body.position.y = Math.abs(Math.cos(p.phase * 2)) * 0.08;
  } else {
    const k = Math.min(1, dt * 8);
    p.legL.rotation.x += (0 - p.legL.rotation.x) * k;
    p.legR.rotation.x += (0 - p.legR.rotation.x) * k;
    p.armL.rotation.x += (0 - p.armL.rotation.x) * k;
    if (!p.holding) p.armR.rotation.x += (0 - p.armR.rotation.x) * k;
    p.body.position.y = Math.sin(t * 2 + p.phase) * 0.02; // breathing
  }
  if (p.holding) p.armR.rotation.x += (-1.2 - p.armR.rotation.x) * Math.min(1, dt * 6);
  if (p.cheer > 0) {
    p.cheer -= dt;
    const j = Math.abs(Math.sin(p.cheer * 9));
    p.body.position.y = j * 0.45;
    p.armL.rotation.z = -2.6;
    p.armR.rotation.z = 2.6;
    if (p.cheer <= 0) p.armL.rotation.z = p.armR.rotation.z = 0;
  }
}

export const CAST = {
  player: { shirt: C.paper, sleeves: C.paper, pants: C.window, cap: C.haldi, bag: C.tagBlue, hair: C.hair },
  raju: { shirt: C.paper, vest: C.paperShade, pants: C.wood, mustache: true, towel: C.red, skin: C.skinDark },
  pinky: { shirt: C.pink, pants: C.window, dupatta: C.haldi, bun: true },
  lucky: { shirt: C.haldi, pants: C.ink, cap: C.red, skin: C.skinDark },
  sharma: { shirt: C.paper, pants: C.paperShade, glasses: true, hair: C.steel, mustache: true },
};
