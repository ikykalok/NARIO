import * as THREE from "three";
import { Flavour, flavours, getIngredients, getNutrition, sipBrand } from "@/data/sip";

export function mulberry32(seed: number) {
  let a = seed;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

let fontsReadyPromise: Promise<void> | null = null;

export function labelFontsReady(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (fontsReadyPromise) return fontsReadyPromise;

  fontsReadyPromise = new Promise<void>((resolve) => {
    let resolved = false;
    const finish = () => {
      if (!resolved) {
        resolved = true;
        resolve();
      }
    };

    const timeout = setTimeout(finish, 2500);

    if (document.fonts) {
      Promise.all([
        document.fonts.load('600 64px "Inter Tight"'),
        document.fonts.load('500 64px "Inter Tight"'),
        document.fonts.load('500 32px "Manrope"'),
        document.fonts.load('500 24px "JetBrains Mono"'),
        document.fonts.ready,
      ])
        .then(() => {
          clearTimeout(timeout);
          finish();
        })
        .catch(finish);
    } else {
      clearTimeout(timeout);
      finish();
    }
  });

  return fontsReadyPromise;
}

export interface CoconutSkinTextures {
  color: THREE.CanvasTexture;
  bump: THREE.CanvasTexture;
}

let cachedSkinTextures: CoconutSkinTextures | null = null;
let cachedRimTexture: THREE.CanvasTexture | null = null;

export function getCoconutSkinTextures(): CoconutSkinTextures {
  if (cachedSkinTextures) return cachedSkinTextures;

  const W = 1024;
  const H = 512;

  const colorCanvas = document.createElement("canvas");
  colorCanvas.width = W;
  colorCanvas.height = H;
  const cctx = colorCanvas.getContext("2d")!;

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = W;
  bumpCanvas.height = H;
  const bctx = bumpCanvas.getContext("2d")!;

  const rnd = mulberry32(11);

  // Vertical gradient
  // #a3ad4f (0) -> #86a23f (.1) -> #6f9637 (.45) -> #5c8530 (.8) -> #4b6f28 (1)
  const cGrad = cctx.createLinearGradient(0, 0, 0, H);
  cGrad.addColorStop(0, "#a3ad4f");
  cGrad.addColorStop(0.1, "#86a23f");
  cGrad.addColorStop(0.45, "#6f9637");
  cGrad.addColorStop(0.8, "#5c8530");
  cGrad.addColorStop(1, "#4b6f28");
  cctx.fillStyle = cGrad;
  cctx.fillRect(0, 0, W, H);

  // Bump base #808080 (neutral 128 mid-grey)
  bctx.fillStyle = "#808080";
  bctx.fillRect(0, 0, W, H);

  // Micro-tissue plant cellular noise for natural organic surface feel
  const imgData = cctx.getImageData(0, 0, W, H);
  const data = imgData.data;
  const bumpData = bctx.getImageData(0, 0, W, H);
  const bData = bumpData.data;

  for (let y = 0; y < H; y++) {
    const rowOffset = y * W * 4;
    for (let x = 0; x < W; x++) {
      const idx = rowOffset + x * 4;
      // High-frequency subtle organic grain
      const noise = (rnd() - 0.5) * 14;
      data[idx] = Math.max(0, Math.min(255, data[idx] + noise));
      data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + noise * 1.2));
      data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + noise * 0.8));

      // Delicate tactile micro-bump variation
      const bNoise = (rnd() - 0.5) * 16;
      const bVal = Math.max(0, Math.min(255, 128 + bNoise));
      bData[idx] = bVal;
      bData[idx + 1] = bVal;
      bData[idx + 2] = bVal;
    }
  }
  cctx.putImageData(imgData, 0, 0);
  bctx.putImageData(bumpData, 0, 0);

  // 90 soft radial blotches (light rgba(190,205,110,.2) or dark rgba(40,70,25,.18), r 20-110)
  // drawn at x-W, x, x+W so seam wraps invisibly
  for (let i = 0; i < 90; i++) {
    const isLight = rnd() > 0.45;
    const cx = rnd() * W;
    const cy = rnd() * H;
    const r = 20 + rnd() * 90;
    const color = isLight ? "rgba(190, 205, 110, 0.22)" : "rgba(40, 70, 25, 0.18)";

    for (const ox of [-W, 0, W]) {
      const g = cctx.createRadialGradient(cx + ox, cy, 0, cx + ox, cy, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "transparent");
      cctx.fillStyle = g;
      cctx.beginPath();
      cctx.arc(cx + ox, cy, r, 0, Math.PI * 2);
      cctx.fill();

      // Soft height variation in bump map for natural undulating skin
      const bg = bctx.createRadialGradient(cx + ox, cy, 0, cx + ox, cy, r);
      bg.addColorStop(0, isLight ? "rgba(146, 146, 146, 0.35)" : "rgba(110, 110, 110, 0.35)");
      bg.addColorStop(1, "rgba(128, 128, 128, 0)");
      bctx.fillStyle = bg;
      bctx.beginPath();
      bctx.arc(cx + ox, cy, r, 0, Math.PI * 2);
      bctx.fill();
    }
  }

  // 520 meridian fibre streaks (quadratic curves 40-260 px, alpha .05-.13, light or dark)
  // mirrored as +-10% strokes into bump map
  for (let i = 0; i < 520; i++) {
    const isLight = rnd() > 0.5;
    const x0 = rnd() * W;
    const y0 = rnd() * H;
    const len = 40 + rnd() * 220;
    const x1 = x0 + (rnd() - 0.5) * 24;
    const y1 = y0 + len;
    const cpx = (x0 + x1) / 2 + (rnd() - 0.5) * 16;
    const cpy = (y0 + y1) / 2;
    const alpha = 0.05 + rnd() * 0.08;

    cctx.strokeStyle = isLight
      ? `rgba(215, 230, 140, ${alpha})`
      : `rgba(25, 45, 15, ${alpha * 1.1})`;
    cctx.lineWidth = 0.6 + rnd() * 1.4;

    // +-10% mirrored strokes into bump map (relative to 128: 128 +- 25 -> #999999 / #676767)
    bctx.strokeStyle = isLight ? "rgba(168, 168, 168, 0.55)" : "rgba(88, 88, 88, 0.55)";
    bctx.lineWidth = cctx.lineWidth;

    for (const ox of [-W, 0, W]) {
      cctx.beginPath();
      cctx.moveTo(x0 + ox, y0);
      cctx.quadraticCurveTo(cpx + ox, cpy, x1 + ox, y1);
      cctx.stroke();

      bctx.beginPath();
      bctx.moveTo(x0 + ox, y0);
      bctx.quadraticCurveTo(cpx + ox, cpy, x1 + ox, y1);
      bctx.stroke();
    }
  }

  // 4200 lenticel dots r .4-1.7 (light or dark) mirrored into bump (white .35 / black .3)
  for (let i = 0; i < 4200; i++) {
    const isLight = rnd() > 0.5;
    const x = rnd() * W;
    const y = rnd() * H;
    const r = 0.4 + rnd() * 1.3;

    cctx.fillStyle = isLight ? "rgba(220, 235, 160, 0.45)" : "rgba(35, 55, 20, 0.45)";
    bctx.fillStyle = isLight ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.35)";

    for (const ox of [-W, 0, W]) {
      cctx.beginPath();
      cctx.arc(x + ox, y, r, 0, Math.PI * 2);
      cctx.fill();

      bctx.beginPath();
      bctx.arc(x + ox, y, r, 0, Math.PI * 2);
      bctx.fill();
    }
  }

  // Three pale vertical ridges at (k+.1)/3 * W, 80 px wide
  for (let k = 0; k < 3; k++) {
    const rx = ((k + 0.1) / 3) * W;
    for (const ox of [-W, 0, W]) {
      const g = cctx.createLinearGradient(rx + ox - 40, 0, rx + ox + 40, 0);
      g.addColorStop(0, "transparent");
      g.addColorStop(0.5, "rgba(210, 225, 145, 0.18)");
      g.addColorStop(1, "transparent");
      cctx.fillStyle = g;
      cctx.fillRect(rx + ox - 40, 0, 80, H);

      const bg = bctx.createLinearGradient(rx + ox - 40, 0, rx + ox + 40, 0);
      bg.addColorStop(0, "rgba(128,128,128,0)");
      bg.addColorStop(0.5, "rgba(165,165,165,0.45)");
      bg.addColorStop(1, "rgba(128,128,128,0)");
      bctx.fillStyle = bg;
      bctx.fillRect(rx + ox - 40, 0, 80, H);
    }
  }

  // Calyx at stem end: dry brown (#6f6334) three-lobed star band 10-44 px deep plus a darker 9 px cap
  cctx.fillStyle = "#6f6334";
  cctx.beginPath();
  cctx.moveTo(0, 0);
  for (let x = 0; x <= W; x += 4) {
    const phi = (x / W) * Math.PI * 2;
    const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
    cctx.lineTo(x, depth);
  }
  cctx.lineTo(W, 0);
  cctx.closePath();
  cctx.fill();

  // Darker 9px cap
  cctx.fillStyle = "#4a4220";
  cctx.fillRect(0, 0, W, 9);

  // Calyx radial scratches in color
  cctx.strokeStyle = "rgba(45, 38, 18, 0.4)";
  for (let i = 0; i < 180; i++) {
    const x = rnd() * W;
    cctx.beginPath();
    cctx.moveTo(x, 0);
    cctx.lineTo(x + (rnd() - 0.5) * 8, 8 + rnd() * 28);
    cctx.stroke();
  }

  // Calyx relief mirrored into bump map for tactile woody crown
  bctx.fillStyle = "rgba(155, 155, 155, 0.55)";
  bctx.beginPath();
  bctx.moveTo(0, 0);
  for (let x = 0; x <= W; x += 4) {
    const phi = (x / W) * Math.PI * 2;
    const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
    bctx.lineTo(x, depth);
  }
  bctx.lineTo(W, 0);
  bctx.closePath();
  bctx.fill();

  // Dark woody ridge bevel at calyx edge
  bctx.strokeStyle = "rgba(70, 70, 70, 0.6)";
  bctx.lineWidth = 2.0;
  bctx.beginPath();
  for (let x = 0; x <= W; x += 4) {
    const phi = (x / W) * Math.PI * 2;
    const depth = 22 + 18 * Math.sin(3 * phi + 0.3);
    if (x === 0) bctx.moveTo(x, depth);
    else bctx.lineTo(x, depth);
  }
  bctx.stroke();

  // Bump radial scratch grooves on calyx
  bctx.strokeStyle = "rgba(60, 60, 60, 0.45)";
  bctx.lineWidth = 1.0;
  for (let i = 0; i < 180; i++) {
    const x = rnd() * W;
    bctx.beginPath();
    bctx.moveTo(x, 0);
    bctx.lineTo(x + (rnd() - 0.5) * 8, 8 + rnd() * 28);
    bctx.stroke();
  }

  // Flower-end tip: 26 px gradient to rgba(90,78,40,.95) at the bottom
  const tipGrad = cctx.createLinearGradient(0, H - 26, 0, H);
  tipGrad.addColorStop(0, "transparent");
  tipGrad.addColorStop(1, "rgba(90, 78, 40, 0.95)");
  cctx.fillStyle = tipGrad;
  cctx.fillRect(0, H - 26, W, 26);

  // Tip subtle dimple/bump contour
  const tipBumpGrad = bctx.createLinearGradient(0, H - 26, 0, H);
  tipBumpGrad.addColorStop(0, "rgba(128, 128, 128, 0)");
  tipBumpGrad.addColorStop(0.7, "rgba(110, 110, 110, 0.3)");
  tipBumpGrad.addColorStop(1, "rgba(85, 85, 85, 0.6)");
  bctx.fillStyle = tipBumpGrad;
  bctx.fillRect(0, H - 26, W, 26);

  const colorTexture = new THREE.CanvasTexture(colorCanvas);
  colorTexture.wrapS = THREE.RepeatWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;
  colorTexture.colorSpace = THREE.SRGBColorSpace;
  colorTexture.generateMipmaps = true;
  colorTexture.minFilter = THREE.LinearMipmapLinearFilter;
  colorTexture.magFilter = THREE.LinearFilter;
  colorTexture.anisotropy = 8;

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping;
  bumpTexture.generateMipmaps = true;
  bumpTexture.minFilter = THREE.LinearMipmapLinearFilter;
  bumpTexture.magFilter = THREE.LinearFilter;
  bumpTexture.anisotropy = 8;

  cachedSkinTextures = { color: colorTexture, bump: bumpTexture };
  return cachedSkinTextures;
}

export function getRimCutTexture(): THREE.CanvasTexture {
  if (cachedRimTexture) return cachedRimTexture;

  const W = 1024;
  const H = 256;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const rnd = mulberry32(5);

  // Layers by v:
  // skin 0-.035 (#5f8b33 with a light line)
  // husk .035-.6 (cream gradient #e9e2b9 -> #f1ead0 -> #e8dcbc with 1800 short fibres)
  // shell .6-.69 (brown #7a5431 -> #5d3e22 -> #6d4a2a)
  // meat .69-1 (#fbf9f2 -> #eef0e8)

  // 1. Skin
  ctx.fillStyle = "#5f8b33";
  ctx.fillRect(0, 0, W, H * 0.035);
  ctx.strokeStyle = "#8ebd4c";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, H * 0.035);
  ctx.lineTo(W, H * 0.035);
  ctx.stroke();

  // 2. Husk
  const huskGrad = ctx.createLinearGradient(0, H * 0.035, 0, H * 0.6);
  huskGrad.addColorStop(0, "#e9e2b9");
  huskGrad.addColorStop(0.5, "#f1ead0");
  huskGrad.addColorStop(1, "#e8dcbc");
  ctx.fillStyle = huskGrad;
  ctx.fillRect(0, H * 0.035, W, H * (0.6 - 0.035));

  // 1800 short husk fibres
  ctx.strokeStyle = "rgba(165, 140, 105, 0.28)";
  for (let i = 0; i < 1800; i++) {
    const x = rnd() * W;
    const y = H * 0.035 + rnd() * H * (0.6 - 0.035);
    const len = 3 + rnd() * 8;
    const ang = rnd() * Math.PI * 2;
    ctx.lineWidth = 0.5 + rnd() * 0.8;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
    ctx.stroke();
  }

  // 3. Shell
  const shellGrad = ctx.createLinearGradient(0, H * 0.6, 0, H * 0.69);
  shellGrad.addColorStop(0, "#7a5431");
  shellGrad.addColorStop(0.5, "#5d3e22");
  shellGrad.addColorStop(1, "#6d4a2a");
  ctx.fillStyle = shellGrad;
  ctx.fillRect(0, H * 0.6, W, H * 0.09);

  // 4. Meat
  const meatGrad = ctx.createLinearGradient(0, H * 0.69, 0, H);
  meatGrad.addColorStop(0, "#fbf9f2");
  meatGrad.addColorStop(1, "#eef0e8");
  ctx.fillStyle = meatGrad;
  ctx.fillRect(0, H * 0.69, W, H * 0.31);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.flipY = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 8;

  cachedRimTexture = texture;
  return texture;
}

// Flat fruit illustrations (2-4 fills each)
function drawFruit(
  ctx: CanvasRenderingContext2D,
  fruit: string,
  cx: number,
  cy: number,
  R: number
) {
  ctx.save();
  ctx.translate(cx, cy);

  if (fruit === "coconut") {
    // Half-shell bowl (green outside, cream husk ring, brown shell, white meat),
    // a striped straw at -0.5 rad and a palm frond in moss
    // Palm frond
    ctx.save();
    ctx.rotate(0.4);
    ctx.strokeStyle = "#2f4a3c";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-R * 0.6, -R * 0.2);
    ctx.quadraticCurveTo(0, -R * 0.7, R * 0.7, -R * 0.85);
    ctx.stroke();
    // leaflets
    for (let i = 0; i < 9; i++) {
      const t = i / 9;
      const lx = -R * 0.5 + t * R * 1.1;
      const ly = -R * 0.3 - t * R * 0.5;
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      ctx.lineTo(lx - 22, ly - 28);
      ctx.stroke();
    }
    ctx.restore();

    // Striped straw at -0.5 rad
    ctx.save();
    ctx.rotate(-0.5);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(-10, -R * 0.95, 20, R * 0.9);
    ctx.fillStyle = "#e39a2d";
    for (let sy = -R * 0.9; sy < 0; sy += 24) {
      ctx.beginPath();
      ctx.moveTo(-10, sy);
      ctx.lineTo(10, sy + 14);
      ctx.lineTo(10, sy + 22);
      ctx.lineTo(-10, sy + 8);
      ctx.fill();
    }
    ctx.restore();

    // Coconut half-shell bowl (bottom half arc)
    // Green outside
    ctx.fillStyle = "#5c8530";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.75, 0, Math.PI);
    ctx.fill();

    // Cream husk ring
    ctx.fillStyle = "#e9e2b9";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.65, 0, Math.PI);
    ctx.fill();

    // Brown shell
    ctx.fillStyle = "#6d4a2a";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.55, 0, Math.PI);
    ctx.fill();

    // White meat
    ctx.fillStyle = "#fbf9f2";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.48, 0, Math.PI);
    ctx.fill();

    // Cut line flat rim
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(0, 0, R * 0.75, R * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fbf9f2";
    ctx.beginPath();
    ctx.ellipse(0, 0, R * 0.48, R * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (fruit === "mango") {
    // Rotated -0.35, yellow->orange->red gradient ellipse, highlight, green leaf, stem
    ctx.rotate(-0.35);

    // Stem & Leaf
    ctx.fillStyle = "#3a2a10";
    ctx.fillRect(-4, -R * 0.75, 8, 28);

    ctx.fillStyle = "#3d7332";
    ctx.beginPath();
    ctx.moveTo(0, -R * 0.65);
    ctx.quadraticCurveTo(R * 0.6, -R * 0.85, R * 0.65, -R * 0.5);
    ctx.quadraticCurveTo(R * 0.35, -R * 0.4, 0, -R * 0.65);
    ctx.fill();

    // Mango body: gradient ellipse
    const mg = ctx.createRadialGradient(-R * 0.15, -R * 0.1, R * 0.1, 0, 0, R * 0.68);
    mg.addColorStop(0, "#ffe043");
    mg.addColorStop(0.55, "#f78a1c");
    mg.addColorStop(1, "#d63820");
    ctx.fillStyle = mg;
    ctx.beginPath();
    // Mango curve
    ctx.moveTo(0, -R * 0.6);
    ctx.bezierCurveTo(R * 0.6, -R * 0.6, R * 0.75, R * 0.2, R * 0.2, R * 0.68);
    ctx.bezierCurveTo(-R * 0.15, R * 0.78, -R * 0.65, R * 0.4, -R * 0.55, -R * 0.2);
    ctx.bezierCurveTo(-R * 0.5, -R * 0.55, -R * 0.2, -R * 0.6, 0, -R * 0.6);
    ctx.fill();

    // Soft highlight
    ctx.fillStyle = "rgba(255, 255, 255, 0.32)";
    ctx.beginPath();
    ctx.ellipse(-R * 0.18, -R * 0.15, R * 0.24, R * 0.14, -0.4, 0, Math.PI * 2);
    ctx.fill();
  } else if (fruit === "guava") {
    // Green rind, pale flesh ring, coral flesh, pink core, 22 seeds
    ctx.fillStyle = "#63993c";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f5ead3";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.64, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#e37470";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.58, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#d44f57";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.38, 0, Math.PI * 2);
    ctx.fill();

    // 22 seeds
    ctx.fillStyle = "#fff4d0";
    for (let i = 0; i < 22; i++) {
      const ang = (i / 22) * Math.PI * 2;
      const sr = R * (0.2 + (i % 3) * 0.07);
      const sx = Math.cos(ang) * sr;
      const sy = Math.sin(ang) * sr;
      ctx.beginPath();
      ctx.ellipse(sx, sy, 4.5, 3, ang, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (fruit === "lychee") {
    // Scalloped pink shell at left, peeled white fruit with brown stone at right
    // Shell at left
    ctx.fillStyle = "#bf436c";
    ctx.beginPath();
    ctx.arc(-R * 0.22, 0, R * 0.52, 0, Math.PI * 2);
    ctx.fill();

    // Shell texture bumps
    ctx.fillStyle = "#8a2444";
    for (let i = 0; i < 28; i++) {
      const ang = (i / 28) * Math.PI * 2;
      const bx = -R * 0.22 + Math.cos(ang) * R * 0.48;
      const by = Math.sin(ang) * R * 0.48;
      ctx.beginPath();
      ctx.arc(bx, by, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Peeled white aril at right
    ctx.fillStyle = "#faf3ee";
    ctx.beginPath();
    ctx.arc(R * 0.25, 0, R * 0.48, 0, Math.PI * 2);
    ctx.fill();

    // Translucent pulp glow
    ctx.fillStyle = "rgba(235, 210, 220, 0.4)";
    ctx.beginPath();
    ctx.arc(R * 0.25, 0, R * 0.38, 0, Math.PI * 2);
    ctx.fill();

    // Brown stone in center
    ctx.fillStyle = "#4a2318";
    ctx.beginPath();
    ctx.ellipse(R * 0.25, 0, R * 0.2, R * 0.26, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (fruit === "pineapple") {
    // Seven crown leaves, gold body clipped with a diagonal lattice
    // Leaves
    ctx.fillStyle = "#3e7a3e";
    const leafAngles = [-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6];
    for (const ang of leafAngles) {
      ctx.save();
      ctx.translate(0, -R * 0.25);
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(8, -R * 0.55, 0, -R * 0.65);
      ctx.quadraticCurveTo(-8, -R * 0.55, 0, 0);
      ctx.fill();
      ctx.restore();
    }

    // Gold body
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(0, R * 0.18, R * 0.46, R * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#e5a720";
    ctx.fill();
    ctx.clip();

    // Diagonal lattice
    ctx.strokeStyle = "#a57010";
    ctx.lineWidth = 3.5;
    for (let d = -R; d < R * 2; d += 22) {
      ctx.beginPath();
      ctx.moveTo(-R, d);
      ctx.lineTo(R, d - R * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-R, d - R * 2);
      ctx.lineTo(R, d);
      ctx.stroke();
    }
    ctx.restore();
  } else if (fruit === "lime") {
    // Green rind, pale pith, nine segments, two mint leaves
    // Mint leaves
    ctx.fillStyle = "#3e8c45";
    ctx.save();
    ctx.translate(-R * 0.45, -R * 0.45);
    ctx.rotate(-0.5);
    ctx.beginPath();
    ctx.ellipse(0, 0, R * 0.35, R * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(R * 0.4, -R * 0.45);
    ctx.rotate(0.6);
    ctx.beginPath();
    ctx.ellipse(0, 0, R * 0.32, R * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Green rind
    ctx.fillStyle = "#489e2c";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.65, 0, Math.PI * 2);
    ctx.fill();

    // Pale pith
    ctx.fillStyle = "#e3efd4";
    ctx.beginPath();
    ctx.arc(0, 0, R * 0.59, 0, Math.PI * 2);
    ctx.fill();

    // 9 segments
    ctx.fillStyle = "#8dc854";
    for (let i = 0; i < 9; i++) {
      const a1 = (i / 9) * Math.PI * 2 + 0.05;
      const a2 = ((i + 1) / 9) * Math.PI * 2 - 0.05;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, R * 0.53, a1, a2);
      ctx.closePath();
      ctx.fill();
    }
    // Center white dot
    ctx.fillStyle = "#e3efd4";
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

const labelTextureCache = new Map<string, THREE.CanvasTexture>();

export function getCanLabelTexture(flavour: Flavour): THREE.CanvasTexture {
  if (labelTextureCache.has(flavour.id)) {
    return labelTextureCache.get(flavour.id)!;
  }

  const W = 2048;
  const H = 1328;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const rnd = mulberry32(flavour.id.length * 97 + 3);

  // Base background
  ctx.fillStyle = flavour.bg;
  ctx.fillRect(0, 0, W, H);

  // 3 px ink hairline at y 64 all the way round
  ctx.strokeStyle = flavour.ink;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 64);
  ctx.lineTo(W, 64);
  ctx.stroke();

  // 250 px accent band along bottom with a 10 px ink rule on top
  const bandY = H - 250;
  ctx.fillStyle = flavour.accent;
  ctx.fillRect(0, bandY, W, 250);

  ctx.fillStyle = flavour.ink;
  ctx.fillRect(0, bandY, W, 10);

  // ==========================================
  // FRONT (centre x 512)
  // ==========================================
  const frontX = 512;

  // mono 500 26px "TENDER COCONUT WATER" at 128
  ctx.fillStyle = flavour.ink;
  ctx.textAlign = "center";
  ctx.font = '500 26px "JetBrains Mono", monospace';
  ctx.fillText("TENDER COCONUT WATER", frontX, 128);

  // display 600 168px wordmark "BR-NARIO" at 318 (scaled down to fit 470 px)
  ctx.font = '600 168px "Inter Tight", sans-serif';
  const wmText = sipBrand.wordmark;
  const wmWidth = ctx.measureText(wmText).width;
  ctx.save();
  ctx.translate(frontX, 318);
  if (wmWidth > 470) {
    const scale = 470 / wmWidth;
    ctx.scale(scale, scale);
  }
  ctx.fillText(wmText, 0, 0);
  ctx.restore();

  // display 500 64px flavour name at 408
  ctx.font = '500 64px "Inter Tight", sans-serif';
  ctx.fillText(flavour.name, frontX, 408);

  // mono 22px "NOT FROM CONCENTRATE" at 452 (alpha .7)
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.font = '500 22px "JetBrains Mono", monospace';
  ctx.fillText("NOT FROM CONCENTRATE", frontX, 452);
  ctx.restore();

  // Illustration disc: accent at 16% alpha, r 215 at (512, 720), dashed ink ring r 238
  ctx.save();
  ctx.fillStyle = flavour.accent;
  ctx.globalAlpha = 0.16;
  ctx.beginPath();
  ctx.arc(frontX, 720, 215, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Dashed ink ring r 238
  ctx.save();
  ctx.strokeStyle = flavour.ink;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.arc(frontX, 720, 238, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Fruit drawn at (512, 730), R 175
  drawFruit(ctx, flavour.fruit, frontX, 730, 175);

  // Four registration crosses +-250 at y 520 and 960 (alpha .5)
  ctx.save();
  ctx.strokeStyle = flavour.ink;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 1.5;
  const crossArms = 8;
  for (const cx of [frontX - 250, frontX + 250]) {
    for (const cy of [520, 960]) {
      ctx.beginPath();
      ctx.moveTo(cx - crossArms, cy);
      ctx.lineTo(cx + crossArms, cy);
      ctx.moveTo(cx, cy - crossArms);
      ctx.lineTo(cx, cy + crossArms);
      ctx.stroke();
    }
  }
  ctx.restore();

  // Above the band: ink mono 22px "<kcal> KCAL · 500 MG POTASSIUM" at y 1030
  ctx.fillStyle = flavour.ink;
  ctx.font = '500 22px "JetBrains Mono", monospace';
  ctx.textAlign = "center";
  ctx.fillText(`${flavour.kcal} KCAL · 500 MG POTASSIUM`, frontX, 1030);

  // In the foot band, in f.bg:
  // display 600 58px "250 ML" at H-150
  // mono 22px "NO ADDED SUGAR · 100% RAW" at H-100
  // mono 18px "PACKED IN INDIA" at H-60
  ctx.fillStyle = flavour.bg;
  ctx.font = '600 58px "Inter Tight", sans-serif';
  ctx.fillText("250 ML", frontX, H - 150);

  ctx.font = '500 22px "JetBrains Mono", monospace';
  ctx.fillText("NO ADDED SUGAR · 100% RAW", frontX, H - 100);

  ctx.font = '500 18px "JetBrains Mono", monospace';
  ctx.fillText("PACKED IN INDIA", frontX, H - 60);

  // ==========================================
  // SIDES (at x 1024, 0 and 2048, rotated -90°, centred at H/2 - 120)
  // ==========================================
  const sidePositions = [0, 1024, 2048];
  for (const sx of sidePositions) {
    ctx.save();
    ctx.translate(sx, H / 2 - 120);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";

    ctx.fillStyle = flavour.ink;
    ctx.font = '600 92px "Inter Tight", sans-serif';
    ctx.fillText(sipBrand.wordmark, 0, 0);

    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.font = '500 20px "JetBrains Mono", monospace';
    ctx.fillText(`${flavour.short.toUpperCase()} · TENDER COCONUT WATER`, 0, 48);
    ctx.restore();

    ctx.restore();
  }

  // ==========================================
  // BACK (left 1306 -> right 1766)
  // ==========================================
  const backLeft = 1306;
  const backRight = 1766;
  const backWidth = backRight - backLeft;

  // display 600 44px "Nutrition"
  ctx.fillStyle = flavour.ink;
  ctx.textAlign = "left";
  ctx.font = '600 44px "Inter Tight", sans-serif';
  ctx.fillText("Nutrition", backLeft, 140);

  // mono 18px "TYPICAL VALUES PER 250 ML CAN"
  ctx.font = '500 18px "JetBrains Mono", monospace';
  ctx.fillText("TYPICAL VALUES PER 250 ML CAN", backLeft, 178);

  // 5 px rule
  ctx.fillRect(backLeft, 196, backWidth, 5);

  // 8 rows 46 px apart from y 250
  const rows = getNutrition(flavour);
  let curY = 250;
  for (const row of rows) {
    ctx.font = row.indent
      ? '400 22px "Manrope", sans-serif'
      : '600 24px "Manrope", sans-serif';
    ctx.textAlign = "left";
    ctx.fillStyle = flavour.ink;
    ctx.fillText(row.label, backLeft + (row.indent ? 16 : 0), curY);

    ctx.font = '500 22px "JetBrains Mono", monospace';
    ctx.textAlign = "right";
    ctx.fillText(row.value, backRight, curY);

    // faint rule
    ctx.save();
    ctx.strokeStyle = flavour.ink;
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(backLeft, curY + 12);
    ctx.lineTo(backRight, curY + 12);
    ctx.stroke();
    ctx.restore();

    curY += 46;
  }

  // "*Naturally occurring sugars only."
  ctx.font = '400 18px "Manrope", sans-serif';
  ctx.textAlign = "left";
  ctx.fillStyle = flavour.ink;
  ctx.fillText("*Naturally occurring sugars only.", backLeft, curY + 10);

  // Ingredients (display 600 26px)
  curY += 50;
  ctx.font = '600 26px "Inter Tight", sans-serif';
  ctx.fillText("Ingredients", backLeft, curY);

  // Ingredient lines (body 21px)
  curY += 30;
  ctx.font = '500 21px "Manrope", sans-serif';
  const ings = getIngredients(flavour);
  for (const line of ings) {
    ctx.fillText(line, backLeft, curY);
    curY += 26;
  }

  // Serve instructions
  curY += 16;
  ctx.font = '400 18px "Manrope", sans-serif';
  ctx.fillText("Serve chilled. Shake gently before opening.", backLeft, curY);
  curY += 24;
  ctx.fillText("Once opened, drink the same day.", backLeft, curY);

  // Seeded barcode 120 px tall from y 905 with "8 901234 567890" beneath
  const barY = 905;
  const barH = 100;
  let bx = backLeft;
  while (bx < backLeft + 320) {
    const bw = 2 + Math.floor(rnd() * 4);
    if (rnd() > 0.4) {
      ctx.fillRect(bx, barY, bw, barH);
    }
    bx += bw + 2;
  }
  ctx.font = '500 16px "JetBrains Mono", monospace';
  ctx.textAlign = "center";
  ctx.fillText("8 901234 567890", backLeft + 160, barY + barH + 24);

  // 46 px "ALU" recycling ring at the right
  ctx.save();
  ctx.strokeStyle = flavour.ink;
  ctx.lineWidth = 2.5;
  const aluX = backRight - 45;
  const aluY = barY + 50;
  ctx.beginPath();
  ctx.arc(aluX, aluY, 23, 0, Math.PI * 2);
  ctx.stroke();
  ctx.font = '600 16px "Inter Tight", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("ALU", aluX, aluY + 6);
  ctx.restore();

  // In the foot band on back:
  // "BEST BEFORE — SEE BASE · STORE COOL & DRY" and "SHIPS IN A FLUTEWORKS 3-PLY CARTON"
  ctx.fillStyle = flavour.bg;
  ctx.textAlign = "center";
  ctx.font = '500 20px "JetBrains Mono", monospace';
  ctx.fillText("BEST BEFORE — SEE BASE · STORE COOL & DRY", (backLeft + backRight) / 2, H - 130);
  ctx.font = '500 17px "JetBrains Mono", monospace';
  ctx.fillText("SHIPS IN A FLUTEWORKS 3-PLY CARTON", (backLeft + backRight) / 2, H - 75);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  labelTextureCache.set(flavour.id, texture);
  return texture;
}
