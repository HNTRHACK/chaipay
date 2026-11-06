import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { toon } from "./toon.js";

/**
 * Collects static geometry by colour and merges it into one mesh per colour,
 * so a whole town is a handful of draw calls.
 */
export class StaticBatch {
  constructor() {
    this.parts = new Map();
  }

  add(geometry, matrix, color) {
    const g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    g.applyMatrix4(matrix);
    for (const k of Object.keys(g.attributes)) if (k !== "position" && k !== "normal") g.deleteAttribute(k);
    if (!this.parts.has(color)) this.parts.set(color, []);
    this.parts.get(color).push(g);
  }

  /** Adds every mesh in a group (using its world transform relative to `parentMatrix`). */
  addGroup(group, parentMatrix) {
    group.updateMatrixWorld(true);
    group.traverse((o) => {
      if (!o.isMesh) return;
      const m = parentMatrix.clone().multiply(o.matrixWorld);
      this.add(o.geometry, m, o.userData.color ?? o.material.color.getHex());
    });
  }

  build() {
    const out = new THREE.Group();
    for (const [color, geos] of this.parts) {
      const merged = mergeGeometries(geos, false);
      const mesh = new THREE.Mesh(merged, toon(color));
      out.add(mesh);
    }
    out.name = "town";
    return out;
  }
}

/** Small factory for primitives tagged with a colour (materials are assigned when batched). */
export function part(geometry, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geometry, toon(color));
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.userData.color = color;
  return m;
}
