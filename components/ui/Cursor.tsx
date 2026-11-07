"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;

    // Check fine pointer
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    document.body.classList.add("cursor-none-desktop");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let currentMode = "";
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Check nearest [data-cursor]
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      const mode = target ? target.getAttribute("data-cursor") || "" : "";
      if (mode !== currentMode) {
        currentMode = mode;
        if (mode === "view") setLabel("View");
        else if (mode === "drag") setLabel("Drag");
        else if (mode === "3d" || mode === "rotate") setLabel("Rotate");
        else setLabel("");
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* 6px ivory dot that follows exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] rounded-full bg-[var(--color-ivory)] pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 select-none mix-blend-difference"
      />

      {/* Ring: 32px, ivory border, mix-blend difference */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 -ml-[16px] -mt-[16px] rounded-full flex items-center justify-center transition-all duration-300 ease-[var(--ease-expo)] select-none ${
          label
            ? "w-[80px] h-[80px] -ml-[40px] -mt-[40px] bg-[var(--color-ivory)] text-[var(--color-ink)] !mix-blend-normal shadow-lg"
            : ""
        }`}
        style={
          label
            ? {}
            : {
                width: "32px",
                height: "32px",
                border: "1.5px solid var(--color-ivory)",
                mixBlendMode: "difference",
              }
        }
      >
        {label && (
          <span className="font-mono text-[10px] tracking-[0.14em] font-semibold uppercase text-[var(--color-ink)]">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
