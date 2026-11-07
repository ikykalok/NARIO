export interface Beat {
  start: number;
  end: number;
}

export const BEATS: Record<string, Beat> = {
  heroOut: { start: 0.02, end: 0.1 },
  statsIn: { start: 0.075, end: 0.14 },
  statsOut: { start: 0.19, end: 0.23 },
  close: { start: 0.21, end: 0.29 },
  turnSide: { start: 0.3, end: 0.35 },
  crack: { start: 0.35, end: 0.39 },
  emerge: { start: 0.39, end: 0.47 },
  fly: { start: 0.45, end: 0.53 },
  canGrow: { start: 0.4, end: 0.5 },
  canUpright: { start: 0.46, end: 0.52 },
  canCopyIn: { start: 0.47, end: 0.52 },
  canCopyOut: { start: 0.555, end: 0.585 },
  turn: { start: 0.54, end: 0.61 },
  keepIn: { start: 0.55, end: 0.61 },
  keepOut: { start: 0.63, end: 0.67 },
  crateRise: { start: 0.61, end: 0.68 },
  canLift: { start: 0.61, end: 0.67 },
  drop: { start: 0.67, end: 0.745 },
  seal: { start: 0.745, end: 0.8 },
  packCopyIn: { start: 0.745, end: 0.8 },
  crateTurn: { start: 0.79, end: 0.88 },
  cover: { start: 0.9, end: 1.0 },
};

export const COVER_START = 0.9;

export const STAGE_AT = [0.22, 0.33, 0.47, 0.64];

export function getStageIndex(p: number): number {
  if (p < STAGE_AT[0]) return 0;
  if (p < STAGE_AT[1]) return 1;
  if (p < STAGE_AT[2]) return 2;
  return 3;
}
