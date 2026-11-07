"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "ink" | "ivory" | "ghost" | "ghost-light";
  size?: "md" | "lg";
  className?: string;
  arrow?: boolean;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "data-cursor"?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "ink",
  size = "md",
  className,
  arrow = true,
  external = false,
  type = "button",
  disabled = false,
  "data-cursor": dataCursor = "cta",
}: ButtonProps) {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em] font-sans transition-all duration-500 ease-[var(--ease-expo)] select-none",
    size === "md" && "px-6 py-3 text-[0.85rem]",
    size === "lg" && "px-8 py-4 text-[0.95rem]",
    variant === "ink" &&
      "bg-[var(--color-ink)] text-[var(--color-ivory)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)]",
    variant === "ivory" &&
      "bg-[var(--color-ivory)] text-[var(--color-ink)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)]",
    variant === "ghost" &&
      "border border-[color-mix(in_srgb,var(--color-ink)_20%,transparent)] text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[color-mix(in_srgb,var(--color-ink)_5%,transparent)]",
    variant === "ghost-light" &&
      "border border-[color-mix(in_srgb,var(--color-ivory)_25%,transparent)] text-[var(--color-ivory)] hover:border-[var(--color-ivory)] hover:bg-[color-mix(in_srgb,var(--color-ivory)_10%,transparent)]",
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          className="w-[14px] h-[14px] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          data-cursor={dataCursor}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={baseClasses}
        data-cursor={dataCursor}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
      data-cursor={dataCursor}
    >
      {content}
    </button>
  );
}
