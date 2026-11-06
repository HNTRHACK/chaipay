import * as THREE from "three";
import { R } from "./palette.js";
import { colliders } from "./town.js";

const tmpQ = new THREE.Quaternion();
const tmpV = new THREE.Vector3();

/** Walks a person around the planet with spherical gravity. */
export class Walker {
  constructor(person, startDir) {
    this.p = person;
    this.dir = startDir.clone().normalize(); // position on the unit sphere
    // initial forward: tangent pointing "east"
    this.fwd = new THREE.Vector3(0, 1, 0).cross(this.dir).normalize().negate();
    if (this.fwd.lengthSq() < 0.5) this.fwd.set(1, 0, 0);
    this.speed = 0;
    this.input = { x: 0, y: 0, run: false };
    this.enabled = false;
    this.apply();
  }

  /** Turn to face a world direction on the sphere (used when talking to someone). */
  face(targetDir) {
    const t = targetDir.clone().sub(this.dir.clone().multiplyScalar(targetDir.dot(this.dir))).normalize();
    if (t.lengthSq() > 0.5) this.fwd.copy(t);
    this.apply();
  }

  update(dt) {
    const { x, y, run } = this.enabled ? this.input : { x: 0, y: 0, run: false };
    // turning
    if (Math.abs(x) > 0.05) {
      tmpQ.setFromAxisAngle(this.dir, -x * 2.6 * dt);
      this.fwd.applyQuaternion(tmpQ);
    }
    // moving
    const target = y * (run ? 9 : 5);
    this.speed += (target - this.speed) * Math.min(1, dt * 8);
    if (Math.abs(this.speed) > 0.01) {
      const axis = tmpV.crossVectors(this.dir, this.fwd).normalize();
      tmpQ.setFromAxisAngle(axis, (this.speed * dt) / R);
      const next = this.dir.clone().applyQuaternion(tmpQ).normalize();
      if (!this.blocked(next)) {
        this.dir.copy(next);
        this.fwd.applyQuaternion(tmpQ);
      } else {
        this.speed *= 0.3;
      }
    }
    // keep forward tangent and orthonormal
    this.fwd.sub(this.dir.clone().multiplyScalar(this.fwd.dot(this.dir))).normalize();
    this.apply();
  }

  blocked(next) {
    for (const c of colliders) {
      const d = Math.acos(THREE.MathUtils.clamp(next.dot(c.dir), -1, 1)) * R;
      if (d < c.radius + 0.45) {
        // only block if we're moving closer
        const now = Math.acos(THREE.MathUtils.clamp(this.dir.dot(c.dir), -1, 1)) * R;
        if (d < now) return true;
      }
    }
    return false;
  }

  apply() {
    const g = this.p.group;
    g.position.copy(this.dir).multiplyScalar(R);
    const m = new THREE.Matrix4().makeBasis(new THREE.Vector3().crossVectors(this.dir, this.fwd), this.dir, this.fwd);
    g.quaternion.setFromRotationMatrix(m);
  }

  get position() {
    return this.p.group.position;
  }
}

/** Third-person camera that follows behind the walker, with the planet normal as "up". */
export class FollowCam {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
    this.orbit = 0; // small user orbit offset
    this.initialised = false;
  }

  desired(w) {
    const up = w.dir;
    const back = w.fwd.clone().applyAxisAngle(up, this.orbit).negate();
    const pos = w.dir.clone().multiplyScalar(R).addScaledVector(up, 6.2).addScaledVector(back, 10.5);
    const look = w.dir.clone().multiplyScalar(R).addScaledVector(up, 1.8).addScaledVector(back, -3);
    return { pos, look, up };
  }

  snap(w) {
    const d = this.desired(w);
    this.pos.copy(d.pos);
    this.look.copy(d.look);
    this.up.copy(d.up);
    this.initialised = true;
    this.apply();
  }

  update(w, dt) {
    const d = this.desired(w);
    const k = 1 - Math.exp(-dt * 5);
    this.pos.lerp(d.pos, k);
    this.look.lerp(d.look, Math.min(1, k * 1.6));
    this.up.lerp(d.up, k).normalize();
    this.orbit *= 1 - Math.min(1, dt * 0.8);
    this.apply();
  }

  apply() {
    this.cam.position.copy(this.pos);
    this.cam.up.copy(this.up);
    this.cam.lookAt(this.look);
  }
}
