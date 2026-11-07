"use client";

import React from "react";
import { sipPacker } from "@/data/sip";
import { cn } from "@/lib/utils";

export function PackerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      className={cn("w-7 h-6 stroke-current fill-none shrink-0", className)}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 5H37M3 27H37" />
      <path d="M3 16C5.55 1.33 8.95 1.33 11.5 16S17.45 30.67 20 16S25.95 1.33 28.5 16S34.45 30.67 37 16" />
    </svg>
  );
}

interface PackerLogoProps {
  className?: string;
  showTagline?: boolean;
}

export function PackerLogo({ className, showTagline = false }: PackerLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none text-current", className)}>
      <PackerMark className="w-6 h-5" />
      <div className="flex flex-col">
        <span className="font-display font-semibold text-[0.95rem] tracking-[0.08em] uppercase">
          {sipPacker.name}
        </span>
        {showTagline && (
          <span className="font-mono text-[0.65rem] tracking-[0.14em] opacity-70">
            {sipPacker.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
