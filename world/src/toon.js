import * as THREE from "three";

// Two-tone cel shading: everything is either lit or in shade, nothing in between.
const grad = new THREE.DataTexture(new Uint8Array([150, 150, 150, 255, 255, 255, 255, 255]), 2, 1, THREE.RGBAFormat);
grad.minFilter = grad.magFilter = THREE.NearestFilter;
grad.generateMipmaps = false;
grad.needsUpdate = true;

const cache = new Map();

/** Shared toon material per color (keeps draw state small). */
export function toon(color, opts = {}) {
  const key = `${color}|${opts.emissive || 0}|${opts.side || 0}`;
  if (!cache.has(key)) {
    cache.set(
      key,
      new THREE.MeshToonMaterial({
        color,
        gradientMap: grad,
        emissive: opts.emissive || 0x000000,
        side: opts.side ?? THREE.FrontSide,
      }),
    );
  }
  return cache.get(key);
}

/** Flat material for things that should not shade at all (signs, screens). */
export function flat(map) {
  return new THREE.MeshBasicMaterial({ map, toneMapped: false });
}
