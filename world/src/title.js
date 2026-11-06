import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { C } from "./palette.js";
import { toon } from "./toon.js";

// Original chunky 5x5 letterforms, extruded from cubes.
const GLYPHS = {
  C: ["#####", "#....", "#....", "#....", "#####"],
  H: ["#...#", "#...#", "#####", "#...#", "#...#"],
  A: ["#####", "#...#", "#####", "#...#", "#...#"],
  I: ["#####", "..#..", "..#..", "..#..", "#####"],
  N: ["##..#", "#.#.#", "#.#.#", "#.#.#", "#..##"],
  G: ["#####", "#....", "#.###", "#...#", "#####"],
  R: ["####.", "#...#", "####.", "#..#.", "#...#"],
};

function letter(ch) {
  const rows = GLYPHS[ch];
  const geos = [];
  rows.forEach((row, y) =>
    [...row].forEach((c, x) => {
      if (c !== "#") return;
      const g = new THREE.BoxGeometry(1, 1, 1.4);
      g.translate(x - 2, 2 - y, 0);
      geos.push(g);
    }),
  );
  return new THREE.Mesh(mergeGeometries(geos), toon(C.paper));
}

/** "CHAI / NAGAR" floating in front of the camera. Attach to the camera. */
export function makeTitle() {
  const g = new THREE.Group();
  const rows = ["CHAI", "NAGAR"];
  rows.forEach((word, r) => {
    [...word].forEach((ch, i) => {
      const m = letter(ch);
      m.position.set((i - (word.length - 1) / 2) * 6.2, (0.5 - r) * 6.8, 0);
      m.rotation.y = (i % 2 ? 1 : -1) * 0.06;
      m.userData.base = m.position.clone();
      m.userData.k = i + r * 3;
      g.add(m);
    });
  });
  g.scale.setScalar(0.62);
  g.position.set(0, 2.2, -42);
  g.userData.update = (t) => {
    g.children.forEach((m) => {
      m.position.y = m.userData.base.y + Math.sin(t * 1.4 + m.userData.k * 0.7) * 0.25;
    });
    g.rotation.x = Math.sin(t * 0.5) * 0.04;
    g.rotation.y = Math.sin(t * 0.37) * 0.08;
  };
  return g;
}
