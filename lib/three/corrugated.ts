import * as THREE from "three";

export const FLUTE = {
  B: { amp: 0.011, wavelength: 0.05 },
  E: { amp: 0.006, wavelength: 0.026 },
  F: { amp: 0.0035, wavelength: 0.016 },
} as const;

export type FluteType = keyof typeof FLUTE;

export const LINER_T = 0.004;
export const MEDIUM_T = 0.0035;

/**
 * 3-ply = 2 * amp + LINER_T + 2 * LINER_T = 2 * amp + 3 * LINER_T
 * 5-ply = 2 * (2 * amp + LINER_T) + 3 * LINER_T
 */
export function boardThickness(plies: 3 | 5, flute: FluteType = "B"): number {
  const { amp } = FLUTE[flute];
  if (plies === 3) {
    return 2 * amp + LINER_T + 2 * LINER_T;
  }
  return 2 * (2 * amp + LINER_T) + 3 * LINER_T;
}

let cachedKraftTexture: THREE.CanvasTexture | null = null;
let cachedRoughnessTexture: THREE.CanvasTexture | null = null;

export function getKraftTexture(): THREE.CanvasTexture {
  if (cachedKraftTexture) return cachedKraftTexture;

  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Noise canvas around rgb(214, 180, 132) (+-7)
    const imgData = ctx.createImageData(size, size);
    const data = imgData.data;

    // Seeded random for reproducible texture
    let s = 12345;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };

    for (let i = 0; i < data.length; i += 4) {
      const d = (rnd() - 0.5) * 14;
      data[i] = Math.min(255, Math.max(0, 214 + d));
      data[i + 1] = Math.min(255, Math.max(0, 180 + d));
      data[i + 2] = Math.min(255, Math.max(0, 132 + d));
      data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);

    // 900 faint fibres
    ctx.strokeStyle = "rgba(140, 105, 65, 0.12)";
    for (let i = 0; i < 900; i++) {
      const x = rnd() * size;
      const y = rnd() * size;
      const len = 4 + rnd() * 12;
      const ang = rnd() * Math.PI * 2;
      ctx.lineWidth = 0.5 + rnd() * 0.8;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.colorSpace = THREE.SRGBColorSpace;
  cachedKraftTexture = texture;
  return texture;
}

export function getRoughnessTexture(): THREE.CanvasTexture {
  if (cachedRoughnessTexture) return cachedRoughnessTexture;

  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const imgData = ctx.createImageData(size, size);
    const data = imgData.data;
    let s = 98765;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };

    for (let i = 0; i < data.length; i += 4) {
      const val = 180 + (rnd() - 0.5) * 50;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  cachedRoughnessTexture = texture;
  return texture;
}

/**
 * makeFluteGeometry(width, height, flute):
 * a sine strip (thickness MEDIUM_T) as a Shape across width (12 samples per wave,
 * waves = max(4, round(width/wavelength))), extruded along height, rotated so flute displacement is along Z.
 */
export function makeFluteGeometry(
  width: number,
  height: number,
  fluteType: FluteType = "B"
): THREE.BufferGeometry {
  const { amp, wavelength } = FLUTE[fluteType];
  const waves = Math.max(4, Math.round(width / wavelength));
  const samplesPerWave = 12;
  const totalSamples = waves * samplesPerWave;

  // We build a closed ribbon shape in the XY plane: top edge along sine wave, bottom edge offset by MEDIUM_T
  const shape = new THREE.Shape();
  const halfW = width / 2;
  const k = (Math.PI * 2) / (width / waves);

  // Top profile
  for (let i = 0; i <= totalSamples; i++) {
    const t = i / totalSamples;
    const x = -halfW + t * width;
    const y = Math.sin(x * k) * amp;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }

  // Bottom profile (offset by MEDIUM_T in y)
  for (let i = totalSamples; i >= 0; i--) {
    const t = i / totalSamples;
    const x = -halfW + t * width;
    const y = Math.sin(x * k) * amp - MEDIUM_T;
    shape.lineTo(x, y);
  }

  shape.closePath();

  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    depth: height,
    bevelEnabled: false,
    steps: 1,
  };

  const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  // Center along depth (extrude depth is along Z) and rotate so flute displacement is along Z and height is along Y
  geom.center();
  // Rotate around X axis so extruded depth aligns with Y axis
  geom.rotateX(Math.PI / 2);
  geom.computeVertexNormals();

  return geom;
}
