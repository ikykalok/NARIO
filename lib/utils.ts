import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function clamp(v: number, a = 0, b = 1): number {
  return Math.max(a, Math.min(b, v));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function seg(p: number, a: number, b: number): number {
  if (b === a) return 0;
  return clamp((p - a) / (b - a), 0, 1);
}

/** Quadratic ease in-out */
export function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/** Cubic ease out: 1 - (1 - t)^3 */
export function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Quintic ease in-out */
export function easeInOutQuint(t: number): number {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}

export function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
