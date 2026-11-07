"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

declare global {
  interface Window {
    __lenis?: Lenis;
    __sipIntroDone?: boolean;
  }
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.95,
    });

    window.__lenis = lenis;
    document.documentElement.classList.add("lenis");

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Intercept clicks on a[href^="#"]
    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element as HTMLElement, { offset: 0, duration: 1.6 });
      }
    };

    document.addEventListener("click", handleHashClick);

    // Refresh ScrollTrigger after 300ms and on fonts ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    // Width-only resize observer (ignore height or changes < 2px, debounce 250ms)
    let lastWidth = window.innerWidth;
    let resizeTimer: NodeJS.Timeout | null = null;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (Math.abs(currentWidth - lastWidth) >= 2) {
        lastWidth = currentWidth;
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      if (resizeTimer) clearTimeout(resizeTimer);
      document.removeEventListener("click", handleHashClick);
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
      delete window.__lenis;
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
