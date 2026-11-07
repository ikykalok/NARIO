"use client";

import React from "react";
import Link from "next/link";
import { sipBrand } from "@/data/sip";
import { cn } from "@/lib/utils";

export function SipMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="1 4.5 30 33"
      className={cn("w-6 h-6 fill-current shrink-0", animated && "sip-mark-animated", className)}
      aria-hidden="true"
    >
      <path
        className="sip-mark-top transition-transform duration-500 ease-[var(--ease-expo)]"
        d="M3 20 L7 16.5 L11 20.5 L15 16 L19 20.5 L23 16.5 L27 20.5 L29 18.5 A14 14 0 0 0 3 20 Z"
      />
      <path
        className="sip-mark-bottom transition-transform duration-500 ease-[var(--ease-expo)]"
        d="M3 23 L7 19.5 L11 23.5 L15 19 L19 23.5 L23 19.5 L27 23.5 L29 21.5 A14 14 0 0 1 3 23 Z"
      />
    </svg>
  );
}

interface SipLogoProps {
  compact?: boolean;
  className?: string;
  animated?: boolean;
}

export function SipLogo({ compact = false, className, animated = false }: SipLogoProps) {
  return (
    <Link
      href="#sip-story"
      className={cn("inline-flex items-center gap-3 select-none group text-current", className)}
      aria-label={`${sipBrand.name} — ${sipBrand.product}`}
    >
      <SipMark animated={animated} className="w-7 h-7" />
      <div className="flex flex-col">
        <span className="font-display font-semibold text-[1.15rem] leading-none tracking-[0.14em]">
          {sipBrand.wordmark}
        </span>
        {!compact && (
          <span className="font-mono text-[0.5rem] tracking-[0.18em] uppercase opacity-70 mt-1">
            {sipBrand.product}
          </span>
        )}
      </div>
    </Link>
  );
}
