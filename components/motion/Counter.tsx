"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

interface CounterProps {
  value: number | string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function Counter({
  value,
  className,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const target = typeof value === "number" ? value : parseFloat(value) || 0;
  const isInteger = Number.isInteger(target);
  const [displayValue, setDisplayValue] = useState<string>(
    target.toLocaleString("en-IN")
  );
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      setDisplayValue(
        isInteger
          ? target.toLocaleString("en-IN")
          : target.toLocaleString("en-IN", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      );
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: target,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
              const current = counterObj.val;
              const formatted = isInteger
                ? Math.round(current).toLocaleString("en-IN")
                : current.toLocaleString("en-IN", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  });
              setDisplayValue(formatted);
            },
          });
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.85,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isInteger, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
