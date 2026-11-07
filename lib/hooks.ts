"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouch;
}

/**
 * useQualityTier → 0/1/2:
 * tier 0 if mobile or ≤4 cores or ≤4 GB deviceMemory;
 * tier 2 if ≥8 cores, ≥8 GB and DPR <= 2;
 * else 1.
 */
export function useQualityTier(): 0 | 1 | 2 {
  const [tier, setTier] = useState<0 | 1 | 2>(1);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMobile) {
      setTier(0);
      return;
    }

    const nav = navigator as Navigator & {
      hardwareConcurrency?: number;
      deviceMemory?: number;
    };

    const cores = nav.hardwareConcurrency || 4;
    const memory = nav.deviceMemory || 4;
    const dpr = window.devicePixelRatio || 1;

    if (cores <= 4 || memory <= 4) {
      setTier(0);
    } else if (cores >= 8 && memory >= 8 && dpr <= 2) {
      setTier(2);
    } else {
      setTier(1);
    }
  }, [isMobile]);

  return tier;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return [ref, inView];
}

/**
 * usePointer: returns a ref containing normalized pointer coordinates (-1 to 1, y up).
 */
export function usePointer(): React.RefObject<{ x: number; y: number }> {
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1; // y up
      pointerRef.current.x = x;
      pointerRef.current.y = y;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return pointerRef;
}

export function useLatest<T>(value: T): React.RefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref;
}

export function useEvent<T extends (...args: any[]) => any>(handler: T): T {
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });
  return useCallback(((...args: any[]) => handlerRef.current(...args)) as T, []);
}
