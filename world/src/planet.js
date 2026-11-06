import * as THREE from "three";
import { C, R } from "./palette.js";
import { NOISE } from "./noise.glsl.js";

export const LIGHT_DIR = new THREE.Vector3(0.45, 0.8, 0.35).normalize();

// Roads are great circles: a point is on the road when it lies close to the circle's plane.
export const ROADS = [
  new THREE.Vector3(0, 1, 0), // equator
  new THREE.Vector3(1, 0, 0.18).normalize(), // a crossing street
];
export const ROAD_HALF_WIDTH = 2.2; // world units

const col = (hex) => new THREE.Color(hex);

export function makePlanet() {
  const geo = new THREE.IcosahedronGeometry(R, 40);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uLight: { value: LIGHT_DIR },
      uGrass: { value: col(C.grass) },
      uGrassDark: { value: col(C.grassDark) },
      uDirt: { value: col(C.dirt) },
      uRoad: { value: col(C.road) },
      uLine: { value: col(C.roadLine) },
      uRoads: { value: ROADS },
      uHalf: { value: ROAD_HALF_WIDTH / R },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      varying vec3 vNormalW;
      void main(){
        vDir = normalize(position);
        vNormalW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: /* glsl */ `
      ${NOISE}
      uniform vec3 uLight, uGrass, uGrassDark, uDirt, uRoad, uLine;
      uniform vec3 uRoads[2];
      uniform float uHalf;
      varying vec3 vDir;
      varying vec3 vNormalW;
      void main(){
        vec3 d = normalize(vDir);
        // hard-edged painted patches
        float n1 = snoise(d*3.2) + 0.5*snoise(d*7.0);
        float n2 = snoise(d*5.5 + 11.0);
        vec3 c = uGrass;
        if (n1 > 0.35) c = uGrassDark;
        if (n2 > 0.62) c = uDirt;
        // roads with a dashed centre line
        for (int i=0;i<2;i++){
          float dist = abs(dot(d, uRoads[i]));
          float edge = uHalf + 0.004*snoise(d*30.0);
          if (dist < edge) {
            c = uRoad;
            if (snoise(d*9.0+3.0) > 0.45) c = mix(uRoad, uGrassDark, 0.35); // worn patches
            vec3 t = normalize(cross(uRoads[i], vec3(0.0,0.0,1.0)+uRoads[i].yzx*0.3));
            float along = atan(dot(d, cross(uRoads[i], t)), dot(d, t));
            if (dist < uHalf*0.07 && fract(along*28.0) < 0.5) c = uLine;
          }
        }
        float ndl = dot(normalize(vNormalW), uLight);
        float shade = ndl > 0.05 ? 1.0 : 0.68;
        gl_FragColor = vec4(c*shade, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = "planet";
  return mesh;
}

export function makeSky() {
  const geo = new THREE.SphereGeometry(900, 48, 24);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { uSky: { value: col(C.sky) }, uLight: { value: col(C.skyLight) }, uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `
      ${NOISE}
      uniform vec3 uSky, uLight; uniform float uTime;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        vec3 p = vec3(d.x*1.6, d.y*3.2, d.z*1.6) + vec3(uTime*0.004, 0.0, 0.0);
        float n = snoise(p*1.4) + 0.55*snoise(p*3.7) + 0.25*snoise(p*9.0);
        vec3 c = uSky;
        if (n > 0.55) c = uLight;
        if (n > 0.55 && n < 0.6) c = mix(uSky, uLight, 0.5);
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  const m = new THREE.Mesh(geo, mat);
  m.name = "sky";
  m.renderOrder = -1;
  return m;
}

// ----- helpers for placing things on the sphere -----

const Y = new THREE.Vector3(0, 1, 0);

export function dirFromLatLon(latDeg, lonDeg) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  return new THREE.Vector3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon));
}

/** Matrix that stands an object upright on the planet at `dir`, rotated `yaw` around the local up. */
export function surfaceMatrix(dir, yaw = 0, lift = 0, scale = 1) {
  const q = new THREE.Quaternion().setFromUnitVectors(Y, dir);
  const qy = new THREE.Quaternion().setFromAxisAngle(dir, yaw);
  const pos = dir.clone().multiplyScalar(R + lift);
  return new THREE.Matrix4().compose(pos, qy.multiply(q), new THREE.Vector3(scale, scale, scale));
}

export function placeOnSurface(obj, dir, yaw = 0, lift = 0) {
  surfaceMatrix(dir, yaw, lift).decompose(obj.position, obj.quaternion, obj.scale);
  return obj;
}

/** Yaw that makes an object's +Z face `targetDir` from `dir`. */
export function yawToward(dir, targetDir) {
  const q = new THREE.Quaternion().setFromUnitVectors(Y, dir);
  const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
  const t = targetDir.clone().sub(dir.clone().multiplyScalar(targetDir.dot(dir))).normalize();
  let a = fwd.angleTo(t);
  if (new THREE.Vector3().crossVectors(fwd, t).dot(dir) < 0) a = -a;
  return a;
}

export function angularDistance(a, b) {
  return Math.acos(THREE.MathUtils.clamp(a.dot(b), -1, 1));
}

/** Distance (in world units along the surface) from dir to the nearest road centreline. */
export function roadDistance(dir) {
  let best = Infinity;
  for (const n of ROADS) best = Math.min(best, Math.abs(Math.asin(THREE.MathUtils.clamp(dir.dot(n), -1, 1))) * R);
  return best;
}
