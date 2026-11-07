import * as THREE from "three";
import { sipBrand, sipPacker } from "@/data/sip";
import { mulberry32 } from "./textures";

export interface CartonTextures {
  front: THREE.CanvasTexture;
  back: THREE.CanvasTexture;
  side: THREE.CanvasTexture;
}

let cachedCartonTextures: CartonTextures | null = null;

export function getCartonTextures(crateW: number, crateH: number, crateD: number): CartonTextures {
  if (cachedCartonTextures) return cachedCartonTextures;

  const pxPerUnit = 560;

  const frontW = Math.round(crateW * pxPerUnit);
  const frontH = Math.round(crateH * pxPerUnit);

  const sideW = Math.round(crateD * pxPerUnit);
  const sideH = Math.round(crateH * pxPerUnit);

  const INK = "#1d1a16";
  const IVORY = "#f5f3ee";
  const MOSS = "#2f4a3c";

  function makeKraftBase(canvas: HTMLCanvasElement, seed: number) {
    const ctx = canvas.getContext("2d")!;
    const w = canvas.width;
    const h = canvas.height;
    const imgData = ctx.createImageData(w, h);
    const data = imgData.data;
    const rnd = mulberry32(seed);

    for (let i = 0; i < data.length; i += 4) {
      const d = (rnd() - 0.5) * 14;
      data[i] = Math.min(255, Math.max(0, 214 + d));
      data[i + 1] = Math.min(255, Math.max(0, 180 + d));
      data[i + 2] = Math.min(255, Math.max(0, 132 + d));
      data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);

    ctx.strokeStyle = "rgba(130, 95, 55, 0.12)";
    const fibres = Math.round((w * h) / 1000);
    for (let i = 0; i < fibres; i++) {
      const x = rnd() * w;
      const y = rnd() * h;
      const len = 3 + rnd() * 10;
      const ang = rnd() * Math.PI * 2;
      ctx.lineWidth = 0.5 + rnd() * 0.8;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    }
  }

  // Draw SipMark on canvas
  function drawSipMarkCanvas(ctx: CanvasRenderingContext2D, cx: number, cy: number, scale: number) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.translate(-16, -18);
    // Draw top half
    const topPath = new Path2D(
      "M3 20 L7 16.5 L11 20.5 L15 16 L19 20.5 L23 16.5 L27 20.5 L29 18.5 A14 14 0 0 0 3 20 Z"
    );
    ctx.fill(topPath);
    // Draw bottom half
    const btmPath = new Path2D(
      "M3 23 L7 19.5 L11 23.5 L15 19 L19 23.5 L23 19.5 L27 23.5 L29 21.5 A14 14 0 0 1 3 23 Z"
    );
    ctx.fill(btmPath);
    ctx.restore();
  }

  // Draw PackerMark on canvas
  function drawPackerMarkCanvas(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    scale: number
  ) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.translate(-20, -16);
    ctx.lineWidth = 3.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    // liners
    ctx.moveTo(3, 5);
    ctx.lineTo(37, 5);
    ctx.moveTo(3, 27);
    ctx.lineTo(37, 27);
    // flute
    ctx.moveTo(3, 16);
    ctx.bezierCurveTo(5.55, 1.33, 8.95, 1.33, 11.5, 16);
    ctx.bezierCurveTo(14.05, 30.67, 17.45, 30.67, 20, 16);
    ctx.bezierCurveTo(22.55, 1.33, 25.95, 1.33, 28.5, 16);
    ctx.bezierCurveTo(31.05, 30.67, 34.45, 30.67, 37, 16);
    ctx.stroke();
    ctx.restore();
  }

  // Corner registration ticks
  function drawCornerTicks(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    margin = 24,
    size = 18
  ) {
    ctx.save();
    ctx.lineWidth = 1.5;
    const corners = [
      [margin, margin],
      [w - margin, margin],
      [margin, h - margin],
      [w - margin, h - margin],
    ];
    for (const [cx, cy] of corners) {
      ctx.beginPath();
      ctx.moveTo(cx - size, cy);
      ctx.lineTo(cx + size, cy);
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx, cy + size);
      ctx.stroke();
    }
    ctx.restore();
  }

  // ==========================================
  // FRONT CANVAS
  // ==========================================
  const frontCanvas = document.createElement("canvas");
  frontCanvas.width = frontW;
  frontCanvas.height = frontH;
  makeKraftBase(frontCanvas, 101);
  const fctx = frontCanvas.getContext("2d")!;

  // Ivory rounded panel: margin 8% of width, r 18
  const fMargin = frontW * 0.08;
  const pW = frontW - 2 * fMargin;
  const pH = frontH - 2 * fMargin;
  const pX = fMargin;
  const pY = fMargin;
  const r = 18;

  fctx.save();
  fctx.beginPath();
  fctx.roundRect(pX, pY, pW, pH, r);
  fctx.fillStyle = IVORY;
  fctx.fill();
  fctx.clip();

  // Moss band: 15% of height at its foot
  const bandH = pH * 0.15;
  const bandY = pY + pH - bandH;
  fctx.fillStyle = MOSS;
  fctx.fillRect(pX, bandY, pW, bandH);

  // In the band: ivory mono 22px "PACKED IN A FLUTEWORKS CARTON · MADE IN INDIA"
  fctx.fillStyle = IVORY;
  fctx.font = '500 22px "JetBrains Mono", monospace';
  fctx.textAlign = "center";
  fctx.fillText("PACKED IN A FLUTEWORKS CARTON · MADE IN INDIA", pX + pW / 2, bandY + bandH * 0.62);

  // SipMark at scale 4.2 near top
  fctx.fillStyle = MOSS;
  drawSipMarkCanvas(fctx, pX + pW / 2, pY + pH * 0.18, 4.2);

  // Wordmark "BR-NARIO" (display 600, up to 150 px, fitted to panel)
  fctx.fillStyle = INK;
  fctx.textAlign = "center";
  let wmFontSize = Math.min(150, pW * 0.22);
  fctx.font = `600 ${wmFontSize}px "Inter Tight", sans-serif`;
  let measuredW = fctx.measureText(sipBrand.wordmark).width;
  if (measuredW > pW * 0.85) {
    wmFontSize *= (pW * 0.85) / measuredW;
    fctx.font = `600 ${wmFontSize}px "Inter Tight", sans-serif`;
  }
  fctx.fillText(sipBrand.wordmark, pX + pW / 2, pY + pH * 0.44);

  // mono 24px "TENDER COCONUT WATER · NOT FROM CONCENTRATE"
  fctx.font = '500 24px "JetBrains Mono", monospace';
  fctx.fillText("TENDER COCONUT WATER · NOT FROM CONCENTRATE", pX + pW / 2, pY + pH * 0.54);

  // display 500 50px "6 × 250 ml cans"
  fctx.font = '500 50px "Inter Tight", sans-serif';
  fctx.fillText("6 × 250 ml cans", pX + pW / 2, pY + pH * 0.68);

  fctx.restore();

  // Corner registration ticks
  fctx.strokeStyle = INK;
  drawCornerTicks(fctx, frontW, frontH, 20, 16);

  // ==========================================
  // SIDES CANVAS
  // ==========================================
  const sideCanvas = document.createElement("canvas");
  sideCanvas.width = sideW;
  sideCanvas.height = sideH;
  makeKraftBase(sideCanvas, 202);
  const sctx = sideCanvas.getContext("2d")!;

  // Full-bleed moss with faint kraft texture showing through (8%)
  sctx.save();
  sctx.fillStyle = MOSS;
  sctx.globalAlpha = 0.92;
  sctx.fillRect(0, 0, sideW, sideH);
  sctx.restore();

  // Ivory rules top and bottom
  sctx.fillStyle = IVORY;
  sctx.fillRect(24, 24, sideW - 48, 4);
  sctx.fillRect(24, sideH - 28, sideW - 48, 4);

  // Two "this way up" arrows
  sctx.strokeStyle = IVORY;
  sctx.lineWidth = 3;
  function drawArrow(x: number, y: number) {
    sctx.beginPath();
    sctx.moveTo(x, y + 36);
    sctx.lineTo(x, y);
    sctx.lineTo(x - 12, y + 14);
    sctx.moveTo(x, y);
    sctx.lineTo(x + 12, y + 14);
    sctx.stroke();
  }
  drawArrow(55, 50);
  drawArrow(95, 50);

  // Recycling mark
  sctx.save();
  sctx.translate(sideW - 140, 68);
  sctx.strokeStyle = IVORY;
  sctx.lineWidth = 2.5;
  sctx.beginPath();
  sctx.arc(0, 0, 18, 0, Math.PI * 2);
  sctx.stroke();
  sctx.font = '600 13px "Inter Tight", sans-serif';
  sctx.fillStyle = IVORY;
  sctx.textAlign = "center";
  sctx.fillText("PAP", 0, 4);
  sctx.restore();

  // PackerMark at scale 3.4 top right
  sctx.strokeStyle = IVORY;
  drawPackerMarkCanvas(sctx, sideW - 60, 68, 3.4);

  // Vertical wordmark "FLUTEWORKS" (display 700, up to 190 px, fitted)
  sctx.save();
  sctx.translate(sideW / 2 + 10, sideH / 2);
  sctx.rotate(-Math.PI / 2);
  sctx.fillStyle = IVORY;
  sctx.textAlign = "center";
  let fwFontSize = Math.min(190, sideH * 0.22);
  sctx.font = `700 ${fwFontSize}px "Inter Tight", sans-serif`;
  let fwW = sctx.measureText(sipPacker.wordmark).width;
  if (fwW > sideH * 0.72) {
    fwFontSize *= (sideH * 0.72) / fwW;
    sctx.font = `700 ${fwFontSize}px "Inter Tight", sans-serif`;
  }
  sctx.fillText(sipPacker.wordmark, 0, 0);
  sctx.restore();

  // Vertical mono line "3-PLY · B-FLUTE · RSC · THIS WAY UP"
  sctx.save();
  sctx.translate(sideW / 2 - 80, sideH / 2);
  sctx.rotate(-Math.PI / 2);
  sctx.font = '500 20px "JetBrains Mono", monospace';
  sctx.fillStyle = IVORY;
  sctx.textAlign = "center";
  sctx.fillText("3-PLY · B-FLUTE · RSC · THIS WAY UP", 0, 0);
  sctx.restore();

  // ==========================================
  // BACK CANVAS
  // ==========================================
  const backCanvas = document.createElement("canvas");
  backCanvas.width = frontW;
  backCanvas.height = frontH;
  makeKraftBase(backCanvas, 303);
  const bctx = backCanvas.getContext("2d")!;

  // Kraft, ink at 88%
  bctx.save();
  bctx.fillStyle = INK;
  bctx.strokeStyle = INK;
  bctx.globalAlpha = 0.88;

  // PackerMark near top
  drawPackerMarkCanvas(bctx, frontW / 2, 100, 3.6);

  // "FLUTEWORKS PACKAGING" (display 600 54px)
  bctx.font = '600 54px "Inter Tight", sans-serif';
  bctx.textAlign = "center";
  bctx.fillText(sipPacker.name.toUpperCase(), frontW / 2, 180);

  // Mono lines
  bctx.font = '500 24px "JetBrains Mono", monospace';
  bctx.fillText("CORRUGATED BOXES & MONO CARTONS", frontW / 2, 235);
  bctx.fillText("CONTENTS: 6 × 250 ML · BR-NARIO", frontW / 2, 290);
  bctx.fillText("BOARD: 3-PLY CORRUGATED · B-FLUTE", frontW / 2, 345);
  bctx.fillText("MADE IN INDIA", frontW / 2, 400);

  // Seeded barcode with "8 901234 600025"
  const bcW = 340;
  const bcH = 100;
  const bcX = (frontW - bcW) / 2;
  const bcY = 470;
  const brnd = mulberry32(888);
  let curBx = bcX;
  while (curBx < bcX + bcW) {
    const bw = 2 + Math.floor(brnd() * 4);
    if (brnd() > 0.4) {
      bctx.fillRect(curBx, bcY, bw, bcH);
    }
    curBx += bw + 2;
  }
  bctx.font = '500 20px "JetBrains Mono", monospace';
  bctx.fillText("8 901234 600025", frontW / 2, bcY + bcH + 28);

  // "KEEP DRY · HANDLE WITH CARE · STACK MAX 6" above a moss rule
  bctx.font = '500 22px "JetBrains Mono", monospace';
  bctx.fillText("KEEP DRY · HANDLE WITH CARE · STACK MAX 6", frontW / 2, frontH - 95);

  bctx.fillStyle = MOSS;
  bctx.fillRect(frontW * 0.1, frontH - 70, frontW * 0.8, 6);

  drawCornerTicks(bctx, frontW, frontH, 20, 16);
  bctx.restore();

  // Create textures
  const frontTex = new THREE.CanvasTexture(frontCanvas);
  frontTex.colorSpace = THREE.SRGBColorSpace;
  frontTex.anisotropy = 8;

  const backTex = new THREE.CanvasTexture(backCanvas);
  backTex.colorSpace = THREE.SRGBColorSpace;
  backTex.anisotropy = 8;

  const sideTex = new THREE.CanvasTexture(sideCanvas);
  sideTex.colorSpace = THREE.SRGBColorSpace;
  sideTex.anisotropy = 8;

  cachedCartonTextures = { front: frontTex, back: backTex, side: sideTex };
  return cachedCartonTextures;
}
