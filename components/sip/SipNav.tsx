"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { sipBrand, sipNav, flavours, sipPacker } from "@/data/sip";
import { SipLogo } from "@/components/sip/ui/SipLogo";
import { PackerMark } from "@/components/sip/ui/PackerLogo";
import { ScrollTrigger } from "@/lib/gsap";
import { pad } from "@/lib/utils";

export function addToCrate(n = 1) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("sip:crate", { detail: { count: n } }));
  }
}

export function SipNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [crateCount, setCrateCount] = useState(0);
  const [isBumping, setIsBumping] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Track scroll > 40
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for crate events
  useEffect(() => {
    const onCrateAdd = () => {
      setCrateCount((prev) => prev + 1);
      setIsBumping(true);
      setTimeout(() => {
        setIsBumping(false);
      }, 450);
    };

    window.addEventListener("sip:crate", onCrateAdd);
    return () => window.removeEventListener("sip:crate", onCrateAdd);
  }, []);

  // Detect dark sections via ScrollTrigger
  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    const triggers: ScrollTrigger[] = [];

    darkSections.forEach((section) => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 44px",
        end: "bottom 44px",
        onEnter: () => setIsDark(true),
        onLeave: () => setIsDark(false),
        onEnterBack: () => setIsDark(true),
        onLeaveBack: () => setIsDark(false),
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  // Handle menu open / close Lenis stop & keyboard Escape
  useEffect(() => {
    if (isMenuOpen) {
      if (window.__lenis) window.__lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (window.__lenis) window.__lenis.start();
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const textColor = isMenuOpen || isDark ? "text-[var(--color-ivory)]" : "text-[var(--color-ink)]";

  return (
    <>
      {/* Fixed Nav Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[var(--gutter)] transition-all duration-500 ease-[var(--ease-expo)] select-none ${
          isScrolled ? "h-[64px] backdrop-blur-md bg-transparent" : "h-[88px]"
        } ${textColor}`}
      >
        {/* Left: Logo */}
        <SipLogo compact={isScrolled} />

        {/* Right: Crate Counter Pill & Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Crate Counter Pill */}
          <Link
            href="#sip-flavours"
            data-cursor="cta"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 transition-all duration-300 hover:border-current ${
              isBumping ? "scale-110" : "scale-100"
            }`}
            aria-label={`View crate: ${crateCount} cans added`}
          >
            {/* Box Icon */}
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 fill-none stroke-current stroke-[1.6]"
              aria-hidden="true"
            >
              <path d="M3 5l7-3 7 3v10l-7 3-7-3V5z" />
              <path d="M10 2v16M3 5l7 4 7-4" />
            </svg>
            <span className="font-mono text-xs font-semibold tracking-wider">
              {pad(crateCount)}
            </span>
          </Link>

          {/* Menu / Close Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cursor="cta"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-current/20 transition-all duration-300 hover:border-current cursor-pointer"
          >
            <span className="font-mono text-xs font-medium tracking-[0.12em] uppercase">
              {isMenuOpen ? "Close" : "Menu"}
            </span>

            {/* Two-line burger that crosses */}
            <div className="relative w-4 h-3 flex flex-col justify-center gap-[5px]">
              <span
                className={`block w-full h-[1.5px] bg-current transition-all duration-500 ease-[var(--ease-expo)] ${
                  isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-current transition-all duration-500 ease-[var(--ease-expo)] ${
                  isMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Overlay (z-45, ink, clip-path reveal from top over 700ms expo) */}
      <div
        ref={menuRef}
        data-lenis-prevent
        className={`fixed inset-0 z-45 bg-[var(--color-ink)] text-[var(--color-ivory)] px-[var(--gutter)] pt-[100px] pb-12 flex flex-col justify-between overflow-y-auto transition-all duration-700 ease-[var(--ease-expo)] ${
          isMenuOpen
            ? "[clip-path:inset(0_0_0_0)] pointer-events-auto"
            : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
          {/* Left Column: Four Main Nav Links */}
          <nav className="lg:col-span-8 flex flex-col gap-4 md:gap-6">
            {sipNav.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-baseline gap-4 md:gap-8 font-display font-medium text-[clamp(2.6rem,8vw,6.5rem)] leading-none text-[var(--color-ivory)] hover:text-[var(--color-kraft)] transition-colors duration-300"
              >
                <span className="font-mono text-xs md:text-sm tracking-[0.18em] text-[var(--color-grey)] group-hover:text-[var(--color-kraft)] transition-colors">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Column: Flavours List & Packer Block */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12 pt-6 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-12">
            {/* Flavours list with accent dots */}
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-[var(--color-grey)]">Flavours</span>
              <div className="flex flex-col gap-2.5">
                {flavours.map((flavour) => (
                  <Link
                    key={flavour.id}
                    href="#sip-flavours"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-sm md:text-base font-medium hover:text-[var(--color-kraft)] transition-colors"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: flavour.accent }}
                    />
                    <span>{flavour.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cartons by Fluteworks Packaging block */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <span className="eyebrow text-[var(--color-grey)]">Cartons by</span>
              <div className="flex items-center gap-3">
                <PackerMark className="w-7 h-6 text-[var(--color-kraft)]" />
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-sm tracking-wide">
                    {sipPacker.name}
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] text-[var(--color-grey)]">
                    {sipPacker.tagline}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
