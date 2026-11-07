"use client";

import React, { useEffect, useRef, useState } from "react";
import { requestStill } from "@/lib/sip/stills";
import { cn } from "@/lib/utils";

interface StillProps {
  stillKey: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function Still({ stillKey, alt, className, priority = false }: StillProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [inView, setInView] = useState(priority);

  useEffect(() => {
    if (priority) {
      setInView(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "600px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!inView) return;
    let isMounted = true;

    requestStill(stillKey)
      .then((url) => {
        if (isMounted) setSrc(url);
      })
      .catch((err) => {
        console.error("Failed to load still:", stillKey, err);
      });

    return () => {
      isMounted = false;
    };
  }, [inView, stillKey]);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center w-full h-full", className)}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="sip-still-in w-full h-full object-contain pointer-events-none select-none"
          loading="lazy"
        />
      ) : (
        <span role="img" aria-label={alt} className="sr-only">
          {alt}
        </span>
      )}
    </div>
  );
}
