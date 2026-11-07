"use client";

import React, { useState, useEffect, useRef } from "react";
import { sipBrand } from "@/data/sip";
import { SipMark } from "@/components/sip/ui/SipLogo";
import { labelFontsReady } from "@/lib/sip/textures";
import { useReducedMotion } from "@/lib/hooks";

export function onIntroDone(fn: () => void) {
  if (typeof window === "undefined") return;
  if (window.__sipIntroDone) {
    fn();
  } else {
    window.addEventListener("sip:intro-done", fn, { once: true });
  }
}

export function SipIntro() {
  const [shownPercent, setShownPercent] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const veilRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prefersReducedMotion) {
      window.__sipIntroDone = true;
      window.dispatchEvent(new CustomEvent("sip:intro-done"));
      setIsUnmounted(true);
      return;
    }

    // Stop Lenis & scroll to top
    if (window.__lenis) {
      window.__lenis.stop();
    }
    window.scrollTo(0, 0);

    const startTime = performance.now();
    let target = 12;
    let current = 0;
    let fontsReady = false;
    let sceneReady = false;
    let hasTriggeredLift = false;
    let rafId: number;

    // Check fonts ready
    labelFontsReady().then(() => {
      fontsReady = true;
    });

    const onSceneReady = () => {
      sceneReady = true;
    };
    window.addEventListener("sip:scene-ready", onSceneReady, { once: true });

    const animate = (now: number) => {
      const elapsed = now - startTime;

      if (sceneReady || elapsed >= 4500) {
        target = 100;
      } else {
        let base = 20 + elapsed / 60;
        if (fontsReady) {
          base = Math.max(55, base);
        }
        target = Math.min(92, base);
      }

      // Ease toward target by 12% per frame
      current += (target - current) * 0.12;
      setShownPercent(Math.floor(current));

      if (current >= 99.2 && elapsed >= 900 && !hasTriggeredLift) {
        hasTriggeredLift = true;
        setShownPercent(100);
        setIsLifting(true);

        // At 380ms restart Lenis and fire "sip:intro-done"
        setTimeout(() => {
          window.__sipIntroDone = true;
          if (window.__lenis) {
            window.__lenis.start();
          }
          window.dispatchEvent(new CustomEvent("sip:intro-done"));
        }, 380);

        // Unmount at 1.1s
        setTimeout(() => {
          setIsUnmounted(true);
        }, 1100);

        return;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("sip:scene-ready", onSceneReady);
    };
  }, [prefersReducedMotion]);

  if (isUnmounted) return null;

  const countStr = shownPercent.toString().padStart(3, "0");

  return (
    <aside
      ref={veilRef}
      aria-hidden="true"
      className={`fixed inset-0 z-[90] bg-[var(--color-ink)] text-[var(--color-ivory)] flex items-center justify-center select-none transition-all duration-[850ms] ${
        isLifting ? "[clip-path:inset(0_0_100%_0)] pointer-events-none" : "[clip-path:inset(0_0_0_0)]"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <div
        ref={contentRef}
        className={`flex flex-col items-center gap-6 transition-all duration-700 ease-[var(--ease-expo)] ${
          isLifting ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Animated SipMark 64px */}
        <div className="w-16 h-16">
          <SipMark animated className="w-full h-full text-[var(--color-ivory)]" />
        </div>

        {/* Wordmark */}
        <div className="font-display font-semibold text-2xl md:text-3xl tracking-[0.18em]">
          {sipBrand.wordmark}
        </div>

        {/* Counter */}
        <div className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-ivory)]/70">
          {countStr} — opening the coconut
        </div>
      </div>
    </aside>
  );
}
