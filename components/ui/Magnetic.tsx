"use client";

import React, { useRef, useEffect } from "react";
import { useReducedMotion } from "@/lib/hooks";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // default 0.22
  className?: string;
}

export function Magnetic({ children, strength = 0.22, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    // Mouse pointers only
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;
    let isHovered = false;

    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      if (el) {
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      if (
        isHovered ||
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        rafId = requestAnimationFrame(animate);
      } else {
        currentX = targetX;
        currentY = targetY;
        if (el) {
          el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) * strength;
      targetY = (e.clientY - centerY) * strength;

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleMouseEnter = () => {
      isHovered = true;
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength, prefersReducedMotion]);

  return (
    <div ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
