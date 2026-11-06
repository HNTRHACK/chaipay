import * as THREE from "three";
import { C, R } from "./palette.js";
import { toon } from "./toon.js";

// ------------------------------------------------------------------ envelopes

function envelopeMesh() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.62), toon(C.paper));
  g.add(body);
  const flap = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.32, 3), toon(C.paperShade));
  flap.rotation.set(Math.PI / 2, 0, 0);
  flap.scale.set(1, 1, 0.12);
  flap.position.set(0, 0.04, 0.0);
  g.add(flap);
  const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 10), toon(C.haldi, { emissive: 0x3a2c00 }));
  seal.position.set(0, 0.06, 0.05);
  g.add(seal);
  g.scale.setScalar(1.3);
  return g;
}

/**
 * An envelope that flies between two points on the planet in an arc.
 * `fly(fromVec3, toVec3)` returns a promise that resolves on landing.
 */
export class Envelope {
  constructor(scene) {
    this.scene = scene;
    this.mesh = envelopeMesh();
    this.scene.add(this.mesh);
    this.anim = null;
    this.hover = null;
  }

  fly(from, to, { height = 7, duration = 2.2 } = {}) {
    this.hover = null;
    return new Promise((resolve) => {
      this.anim = { from: from.clone(), to: to.clone(), t: 0, height, duration, resolve };
    });
  }

  park(at) {
    this.anim = null;
    this.hover = { at: at.clone(), t: 0 };
  }

  update(dt) {
    if (this.anim) {
      const a = this.anim;
      a.t = Math.min(1, a.t + dt / a.duration);
      const e = a.t < 0.5 ? 2 * a.t * a.t : 1 - Math.pow(-2 * a.t + 2, 2) / 2; // easeInOutQuad
      const da = a.from.clone().normalize();
      const db = a.to.clone().normalize();
      const dir = new THREE.Vector3().copy(da).lerp(db, e).normalize();
      const r = THREE.MathUtils.lerp(a.from.length(), a.to.length(), e) + Math.sin(Math.PI * e) * a.height;
      const p = dir.multiplyScalar(r);
      const prev = this.mesh.position.clone();
      this.mesh.position.copy(p);
      const vel = p.clone().sub(prev);
      if (vel.lengthSq() > 1e-6) {
        this.mesh.up.copy(p).normalize();
        this.mesh.lookAt(p.clone().add(vel));
        this.mesh.rotateZ(Math.sin(a.t * 18) * 0.25); // flutter
      }
      if (a.t >= 1) {
        this.anim = null;
        a.resolve();
      }
    } else if (this.hover) {
      this.hover.t += dt;
      const h = this.hover;
      const up = h.at.clone().normalize();
      this.mesh.position.copy(h.at).addScaledVector(up, Math.sin(h.t * 2.5) * 0.25);
      this.mesh.up.copy(up);
      this.mesh.rotateOnWorldAxis(up, dt * 1.2);
    }
  }

  dispose() {
    this.scene.remove(this.mesh);
  }
}

// ------------------------------------------------------------------ confetti

export class Confetti {
  constructor(scene) {
    this.scene = scene;
    this.bits = [];
    this.geo = new THREE.PlaneGeometry(0.22, 0.12);
    this.mats = [C.haldi, C.paper, C.tagBlue, C.pink].map(
      (c) => new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }),
    );
  }

  burst(at, n = 70) {
    const up = at.clone().normalize();
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(this.geo, this.mats[i % this.mats.length]);
      m.position.copy(at).addScaledVector(up, 2);
      const rnd = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(9);
      const v = up.clone().multiplyScalar(7 + Math.random() * 5).add(rnd);
      this.scene.add(m);
      this.bits.push({ m, v, life: 2.2 + Math.random(), spin: new THREE.Vector3(Math.random() * 9, Math.random() * 9, 0) });
    }
  }

  update(dt) {
    for (let i = this.bits.length - 1; i >= 0; i--) {
      const b = this.bits[i];
      const g = b.m.position.clone().normalize().multiplyScalar(-14); // gravity toward planet
      b.v.addScaledVector(g, dt).multiplyScalar(1 - dt * 1.6);
      b.m.position.addScaledVector(b.v, dt);
      b.m.rotation.x += b.spin.x * dt;
      b.m.rotation.y += b.spin.y * dt;
      b.life -= dt;
      if (b.life <= 0 || b.m.position.length() < R) {
        this.scene.remove(b.m);
        this.bits.splice(i, 1);
      }
    }
  }
}

// ------------------------------------------------------------------ chai glass with steam

export function chaiGlass() {
  const g = new THREE.Group();
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.28, 10), toon(C.paperShade));
  const tea = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.095, 0.22, 10), toon(C.chai));
  tea.position.y = -0.02;
  g.add(glass, tea);
  const steam = [];
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }));
    s.userData.o = i / 3;
    g.add(s);
    steam.push(s);
  }
  g.userData.update = (t) => {
    for (const s of steam) {
      const k = (t * 0.7 + s.userData.o) % 1;
      s.position.set(Math.sin(k * 9 + s.userData.o * 5) * 0.06, 0.2 + k * 0.6, 0);
      s.material.opacity = 0.8 * (1 - k);
      s.scale.setScalar(0.6 + k);
    }
  };
  return g;
}
