import * as THREE from "three";
import {
  getCoconutSkinTextures,
  getRimCutTexture,
  getCanLabelTexture,
  mulberry32,
} from "./textures";
import { Flavour, flavours } from "@/data/sip";

export const COCONUT = {
  RX: 0.86,
  RY: 0.98,
  INNER: 0.69,
  U: 168,
  V: 60,
  TEETH: 11,
};

export const CAN = {
  R: 0.32,
  H: 1.6,
  BODY_Y0: 0.13,
  BODY_Y1: 1.44,
};

// ==========================================
// COCONUT MATH & GEOMETRIES
// ==========================================

const toothRnd = mulberry32(7);
const toothAmp: number[] = [];
for (let i = 0; i < COCONUT.TEETH; i++) {
  toothAmp.push(0.6 + toothRnd() * 0.7);
}
const toothPeak: number[] = [];
for (let i = 0; i < COCONUT.TEETH; i++) {
  toothPeak.push(0.35 + toothRnd() * 0.3);
}

function cutTheta(phi: number): number {
  const normPhi = ((phi % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const x = (normPhi / (Math.PI * 2)) * COCONUT.TEETH;
  const i = Math.floor(x) % COCONUT.TEETH;
  const f = x - Math.floor(x);
  const peak = toothPeak[i];
  const amp = toothAmp[i];
  const tri = f < peak ? f / peak : (1 - f) / (1 - peak);
  return Math.PI / 2 - 0.07 + tri * 0.17 * amp + 0.03 * Math.sin(phi);
}

function evalCoconutSurface(
  theta: number,
  phi: number,
  scale = 1.0,
  target = new THREE.Vector3()
): THREE.Vector3 {
  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);

  const lobes = 1 + 0.04 * Math.cos(3 * phi + 0.4) * (sinTheta * sinTheta);
  const taper = 1 - 0.14 * Math.pow(Math.max(0, -cosTheta), 2.2);
  const n = 1 + 0.012 * Math.sin(5 * phi + 3 * theta) + 0.008 * Math.sin(9 * phi - 7 * theta);

  const r = COCONUT.RX * sinTheta * lobes * taper * n * scale;
  const yFactor = cosTheta < 0 ? 1.07 : 1 - 0.05 * Math.pow(cosTheta, 4);
  const y = COCONUT.RY * cosTheta * yFactor * n * scale;

  target.set(r * Math.cos(phi), y, r * Math.sin(phi));
  return target;
}

const tempPos0 = new THREE.Vector3();
const tempPosPhiP = new THREE.Vector3();
const tempPosPhiM = new THREE.Vector3();
const tempPosThetaP = new THREE.Vector3();
const tempPosThetaM = new THREE.Vector3();
const tempDPhi = new THREE.Vector3();
const tempDTheta = new THREE.Vector3();
const poleUp = new THREE.Vector3(0, 1, 0);
const poleDown = new THREE.Vector3(0, -1, 0);

function evalCoconutNormal(
  theta: number,
  phi: number,
  scale = 1.0,
  target = new THREE.Vector3()
): THREE.Vector3 {
  if (theta <= 1e-4) {
    return target.set(0, 1, 0);
  }
  if (theta >= Math.PI - 1e-4) {
    return target.set(0, -1, 0);
  }

  const eps = 1e-3;
  // Central differences as specified:
  // "Normals are analytic: central differences (ε = 1e-3) of the surface in φ and θ, cross(dφ, dθ), normalised; exact (0,±1,0) at the poles."
  evalCoconutSurface(theta, phi + eps, scale, tempPosPhiP);
  evalCoconutSurface(theta, phi - eps, scale, tempPosPhiM);
  tempDPhi.subVectors(tempPosPhiP, tempPosPhiM).divideScalar(2 * eps);

  evalCoconutSurface(theta + eps, phi, scale, tempPosThetaP);
  evalCoconutSurface(theta - eps, phi, scale, tempPosThetaM);
  tempDTheta.subVectors(tempPosThetaP, tempPosThetaM).divideScalar(2 * eps);

  // Surface tangent dPhi is along phi (azimuth), dTheta is along theta (polar downwards)
  // cross(dPhi, dTheta) points OUTWARD
  target.crossVectors(tempDPhi, tempDTheta);
  const len = target.length();
  if (len > 1e-6) {
    target.divideScalar(len);
  } else {
    target.set(0, theta < Math.PI / 2 ? 1 : -1, 0);
  }

  // Smooth polar blend to exact (0, 1, 0) and (0, -1, 0) avoiding polar parametric noise singularity
  const poleMargin = 0.22;
  if (theta < poleMargin) {
    const w = theta / poleMargin;
    const smoothW = w * w * (3 - 2 * w);
    target.lerpVectors(poleUp, target, smoothW).normalize();
  } else if (theta > Math.PI - poleMargin) {
    const w = (Math.PI - theta) / poleMargin;
    const smoothW = w * w * (3 - 2 * w);
    target.lerpVectors(poleDown, target, smoothW).normalize();
  }

  return target;
}

function buildCoconutHalfGeometry(
  isTop: boolean,
  scale = 1.0,
  invertNormals = false
): THREE.BufferGeometry {
  const U = COCONUT.U;
  const V = COCONUT.V;

  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const tempPos = new THREE.Vector3();
  const tempNorm = new THREE.Vector3();

  for (let j = 0; j <= V; j++) {
    const t = j / V;
    for (let i = 0; i <= U; i++) {
      const phi = (i / U) * Math.PI * 2;
      const cut = cutTheta(phi);
      const theta = isTop ? t * cut : cut + t * (Math.PI - cut);

      evalCoconutSurface(theta, phi, scale, tempPos);
      evalCoconutNormal(theta, phi, scale, tempNorm);

      if (invertNormals) {
        tempNorm.negate();
      }

      positions.push(tempPos.x, tempPos.y, tempPos.z);
      normals.push(tempNorm.x, tempNorm.y, tempNorm.z);
      uvs.push(i / U, 1 - theta / Math.PI);
    }
  }

  for (let j = 0; j < V; j++) {
    for (let i = 0; i < U; i++) {
      const a = j * (U + 1) + i;
      const b = (j + 1) * (U + 1) + i;
      const c = (j + 1) * (U + 1) + (i + 1);
      const d = j * (U + 1) + (i + 1);

      if (!invertNormals) {
        // Outward front-facing CCW winding
        indices.push(a, d, b);
        indices.push(b, d, c);
      } else {
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  return geom;
}

function buildCoconutRimGeometry(isTop = false): THREE.BufferGeometry {
  const U = COCONUT.U;
  const R = 6; // 7 rings (0 to 6)

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const tempPos = new THREE.Vector3();

  for (let r = 0; r <= R; r++) {
    const scale = 1.0 - (r / R) * (1.0 - COCONUT.INNER);
    for (let i = 0; i <= U; i++) {
      const phi = (i / U) * Math.PI * 2;
      const cut = cutTheta(phi);
      evalCoconutSurface(cut, phi, scale, tempPos);

      positions.push(tempPos.x, tempPos.y, tempPos.z);
      uvs.push((i / U) * 6, 1 - r / R);
    }
  }

  for (let r = 0; r < R; r++) {
    for (let i = 0; i < U; i++) {
      const a = r * (U + 1) + i;
      const b = (r + 1) * (U + 1) + i;
      const c = (r + 1) * (U + 1) + (i + 1);
      const d = r * (U + 1) + (i + 1);

      if (isTop) {
        // Top rim faces downward into crack (away from top half)
        indices.push(a, d, b);
        indices.push(b, d, c);
      } else {
        // Bottom rim faces upward into crack (away from bottom half)
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

export interface CoconutObject {
  root: THREE.Group;
  top: THREE.Group;
  bottom: THREE.Group;
}

let cachedCoconutGeometries: {
  outerTop: THREE.BufferGeometry;
  innerTop: THREE.BufferGeometry;
  outerBottom: THREE.BufferGeometry;
  innerBottom: THREE.BufferGeometry;
  rimTop: THREE.BufferGeometry;
  rimBottom: THREE.BufferGeometry;
} | null = null;

let cachedCoconutMaterials: {
  skin: THREE.MeshPhysicalMaterial;
  meat: THREE.MeshPhysicalMaterial;
  rim: THREE.MeshStandardMaterial;
} | null = null;

export function getCoconutMaterials() {
  if (cachedCoconutMaterials) return cachedCoconutMaterials;

  const skinTextures = getCoconutSkinTextures();
  const rimTexture = getRimCutTexture();

  const skin = new THREE.MeshPhysicalMaterial({
    map: skinTextures.color,
    bumpMap: skinTextures.bump,
    bumpScale: 1.1,
    roughness: 0.46,
    clearcoat: 0.35,
    clearcoatRoughness: 0.42,
    sheen: 0.4,
    sheenColor: new THREE.Color("#d9e6a8"),
    sheenRoughness: 0.6,
  });

  const meat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#f6f3ea"),
    roughness: 0.3,
    clearcoat: 0.7,
    clearcoatRoughness: 0.25,
    side: THREE.BackSide,
  });

  const rim = new THREE.MeshStandardMaterial({
    map: rimTexture,
    roughness: 0.7,
    side: THREE.DoubleSide,
  });

  cachedCoconutMaterials = { skin, meat, rim };
  return cachedCoconutMaterials;
}

export function createCoconut(): CoconutObject {
  if (!cachedCoconutGeometries) {
    cachedCoconutGeometries = {
      outerTop: buildCoconutHalfGeometry(true, 1.0, false),
      innerTop: buildCoconutHalfGeometry(true, COCONUT.INNER, false),
      outerBottom: buildCoconutHalfGeometry(false, 1.0, false),
      innerBottom: buildCoconutHalfGeometry(false, COCONUT.INNER, false),
      rimTop: buildCoconutRimGeometry(true),
      rimBottom: buildCoconutRimGeometry(false),
    };
  }

  const mats = getCoconutMaterials();

  const topGroup = new THREE.Group();
  topGroup.name = "coconut-top";

  const outerTopMesh = new THREE.Mesh(cachedCoconutGeometries.outerTop, mats.skin);
  outerTopMesh.castShadow = true;
  outerTopMesh.receiveShadow = true;
  topGroup.add(outerTopMesh);

  const innerTopMesh = new THREE.Mesh(cachedCoconutGeometries.innerTop, mats.meat);
  innerTopMesh.castShadow = true;
  innerTopMesh.receiveShadow = true;
  topGroup.add(innerTopMesh);

  const topRimMesh = new THREE.Mesh(cachedCoconutGeometries.rimTop, mats.rim);
  topRimMesh.castShadow = true;
  topRimMesh.receiveShadow = true;
  topGroup.add(topRimMesh);

  const bottomGroup = new THREE.Group();
  bottomGroup.name = "coconut-bottom";

  const outerBottomMesh = new THREE.Mesh(cachedCoconutGeometries.outerBottom, mats.skin);
  outerBottomMesh.castShadow = true;
  outerBottomMesh.receiveShadow = true;
  bottomGroup.add(outerBottomMesh);

  const innerBottomMesh = new THREE.Mesh(cachedCoconutGeometries.innerBottom, mats.meat);
  innerBottomMesh.castShadow = true;
  innerBottomMesh.receiveShadow = true;
  bottomGroup.add(innerBottomMesh);

  const bottomRimMesh = new THREE.Mesh(cachedCoconutGeometries.rimBottom, mats.rim);
  bottomRimMesh.castShadow = true;
  bottomRimMesh.receiveShadow = true;
  bottomGroup.add(bottomRimMesh);

  const root = new THREE.Group();
  root.name = "coconut-root";
  root.add(topGroup);
  root.add(bottomGroup);

  return { root, top: topGroup, bottom: bottomGroup };
}

// ==========================================
// CAN GEOMETRY & FACTORY
// ==========================================

let cachedCanGeometries: {
  body: THREE.BufferGeometry;
  label: THREE.BufferGeometry;
  ringPull: THREE.BufferGeometry;
} | null = null;

let cachedCanMetalMaterial: THREE.MeshStandardMaterial | null = null;
let cachedCanLidMaterial: THREE.MeshStandardMaterial | null = null;

export function getCanMaterials(flavour: Flavour) {
  if (!cachedCanMetalMaterial) {
    cachedCanMetalMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d4d6d8"),
      metalness: 1.0,
      roughness: 0.26,
      side: THREE.DoubleSide,
    });
  }

  if (!cachedCanLidMaterial) {
    cachedCanLidMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#c9ccce"),
      metalness: 1.0,
      roughness: 0.3,
    });
  }

  const labelTexture = getCanLabelTexture(flavour);
  const labelMaterial = new THREE.MeshPhysicalMaterial({
    map: labelTexture,
    roughness: 0.32,
    metalness: 0.18,
    clearcoat: 0.85,
    clearcoatRoughness: 0.16,
  });

  return {
    metal: cachedCanMetalMaterial,
    lid: cachedCanLidMaterial,
    label: labelMaterial,
  };
}

function getCanGeometries() {
  if (cachedCanGeometries) return cachedCanGeometries;

  const rawProfile: [number, number][] = [
    [0, 0.058],
    [0.1, 0.055],
    [0.19, 0.038],
    [0.232, 0.006],
    [0.245, 0],
    [0.262, 0.006],
    [0.285, 0.03],
    [0.305, 0.062],
    [0.318, 0.1],
    [0.32, 0.13],
    [0.32, 1.44],
    [0.316, 1.47],
    [0.303, 1.51],
    [0.29, 1.545],
    [0.286, 1.572],
    [0.291, 1.59],
    [0.287, 1.6],
    [0.278, 1.598],
    [0.272, 1.582],
    [0.265, 1.576],
    [0, 1.576],
  ];

  const halfH = CAN.H / 2;
  const profilePoints = rawProfile.map(
    ([x, y]) => new THREE.Vector2(x, y - halfH)
  );

  const bodyGeom = new THREE.LatheGeometry(profilePoints, 96);
  bodyGeom.computeVertexNormals();

  // Label: open CylinderGeometry radius R + .0016, height BODY_Y1 - BODY_Y0 - .02, 144 radial segments, thetaStart -PI/2
  const labelH = CAN.BODY_Y1 - CAN.BODY_Y0 - 0.02;
  const labelGeom = new THREE.CylinderGeometry(
    CAN.R + 0.0016,
    CAN.R + 0.0016,
    labelH,
    144,
    1,
    true,
    -Math.PI / 2,
    Math.PI * 2
  );
  // Center label at body band: middle of BODY_Y0 and BODY_Y1, offset by -halfH
  const labelY = (CAN.BODY_Y0 + CAN.BODY_Y1) / 2 - halfH;
  labelGeom.translate(0, labelY, 0);

  // Ring pull: ellipse shape .085 x .055 with elliptical hole .042 x .03 offset .02
  const pullShape = new THREE.Shape();
  pullShape.absellipse(0, 0, 0.085, 0.055, 0, Math.PI * 2, false, 0);

  const holePath = new THREE.Path();
  holePath.absellipse(0.02, 0, 0.042, 0.03, 0, Math.PI * 2, true, 0);
  pullShape.holes.push(holePath);

  const ringPullGeom = new THREE.ExtrudeGeometry(pullShape, {
    depth: 0.008,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.004,
    bevelThickness: 0.003,
    curveSegments: 24,
  });
  ringPullGeom.center();
  // Rotate flat and position on lid
  ringPullGeom.rotateX(Math.PI / 2);
  ringPullGeom.translate(0.03, 1.58 - halfH, 0);

  cachedCanGeometries = {
    body: bodyGeom,
    label: labelGeom,
    ringPull: ringPullGeom,
  };

  return cachedCanGeometries;
}

export interface CanObject {
  root: THREE.Group;
  body: THREE.Mesh;
  label: THREE.Mesh;
  ringPull: THREE.Mesh;
  flavour: Flavour;
}

export function createCan(flavour: Flavour = flavours[0]): CanObject {
  const geoms = getCanGeometries();
  const mats = getCanMaterials(flavour);

  const bodyMesh = new THREE.Mesh(geoms.body, mats.metal);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;

  const labelMesh = new THREE.Mesh(geoms.label, mats.label);
  labelMesh.castShadow = true;
  labelMesh.receiveShadow = true;

  const ringPullMesh = new THREE.Mesh(geoms.ringPull, mats.lid);
  ringPullMesh.castShadow = true;
  ringPullMesh.receiveShadow = true;

  const root = new THREE.Group();
  root.name = `can-${flavour.id}`;
  root.add(bodyMesh);
  root.add(labelMesh);
  root.add(ringPullMesh);

  return { root, body: bodyMesh, label: labelMesh, ringPull: ringPullMesh, flavour };
}
