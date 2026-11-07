"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in seconds
  lines?: boolean; // wrap children in line-mask
}

export function Reveal({
  children,
  className,
  delay = 0,
  lines = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              el.classList.add("is-in");
            }, delay * 1000);
          } else {
            el.classList.add("is-in");
          }
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  if (lines) {
    return (
      <div
        ref={ref}
        data-reveal
        className={cn("line-mask", className)}
        style={{ transitionDelay: `${delay}s` }}
      >
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
