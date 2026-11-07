"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { flavours, Flavour, getIngredients } from "@/data/sip";
import { FluteEdge } from "@/components/sip/ui/FluteEdge";
import { Still } from "@/components/sip/ui/Still";
import { requestStill } from "@/lib/sip/stills";
import { turntableManager, OVERSCAN } from "@/lib/sip/turntable";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { pad } from "@/lib/utils";

// Dispatch crate add event
export function dispatchAddToCrate(flavour: Flavour) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("sip:crate", { detail: { flavour } }));
  }
}

// Deterministic 14 droplets
const DROPLETS = Array.from({ length: 14 }).map((_, i) => {
  const angle = (i / 14) * Math.PI * 2 + (i % 3) * 0.2;
  const radius = 70 + ((i * 37) % 60);
  const size = 5 + (i % 4) * 2.3;
  const isWhite = i % 3 === 0;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    size,
    isWhite,
    delay: 0.12 + i * 0.012,
  };
});

function FlavourCard({
  flavour,
  index,
}: {
  flavour: Flavour;
  index: number;
}) {
  const [isBack, setIsBack] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isTurningLive, setIsTurningLive] = useState(false);
  const [shadowScale, setShadowScale] = useState(1);
  const [burstActive, setBurstActive] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Preload back still on hover or focus
  const handleMouseEnter = () => {
    requestStill(`can-back-${flavour.id}`);
  };

  const handleTurn = () => {
    if (prefersReducedMotion) {
      setIsBack((prev) => !prev);
      return;
    }

    if (turntableManager.getIsTurning()) return;

    const host = hostRef.current;
    if (!host) return;

    const targetBack = !isBack;
    setIsBack(targetBack);
    setIsTurningLive(true);
    setBurstActive(true);

    turntableManager.turn(host, flavour, targetBack, {
      onLift: () => setShadowScale(0.62),
      onDrop: () => setShadowScale(1),
      onComplete: () => {
        setIsTurningLive(false);
        setBurstActive(false);
      },
    });
  };

  const handleAdd = () => {
    dispatchAddToCrate(flavour);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1400);
  };

  const stillKey = isBack ? `can-back-${flavour.id}` : `can-${flavour.id}`;

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      className="flavour-card group relative flex flex-col justify-between rounded-[1.25rem] p-6 md:p-8 select-none transition-transform duration-500 hover:-translate-y-1 shadow-xl overflow-hidden"
      style={{ backgroundColor: flavour.tint, color: flavour.ink }}
    >
      {/* Background Radial Color Wash */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-[var(--ease-expo)]"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${flavour.accent} 0%, transparent 70%)`,
          opacity: isBack ? 0.25 : 0.08,
        }}
      />

      {/* Top Row: Index & Front/Back Switch */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase opacity-70">
          {pad(index + 1)} / 06
        </span>

        {/* Front ◯— Back switch */}
        <button
          type="button"
          onClick={handleTurn}
          aria-label={`Toggle front and back view of ${flavour.name} can`}
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span
            className={`font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-opacity ${
              !isBack ? "font-semibold opacity-100" : "opacity-40"
            }`}
          >
            Front
          </span>
          <div className="relative w-9 h-5 rounded-full bg-black/10 p-[2px] transition-colors">
            <div
              className="w-4 h-4 rounded-full transition-transform duration-700 ease-[var(--ease-expo)]"
              style={{
                backgroundColor: flavour.accent,
                transform: isBack ? "translateX(16px)" : "translateX(0)",
              }}
            />
          </div>
          <span
            className={`font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-opacity ${
              isBack ? "font-semibold opacity-100" : "opacity-40"
            }`}
          >
            Back
          </span>
        </button>
      </div>

      {/* Stage: 3:4 aspect, 78% wide button */}
      <div className="relative z-10 w-full flex flex-col items-center my-6">
        <button
          type="button"
          onClick={handleTurn}
          data-cursor="3d"
          className="relative w-[78%] aspect-[3/4] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-[1.03] group-hover:-translate-y-2 focus:outline-none"
          aria-label={`Tap to turn ${flavour.name} can`}
        >
          {/* Burst Rings & Droplets */}
          {burstActive && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
              {/* Ring A (accent) */}
              <div
                className="absolute w-36 h-36 rounded-full border-2 animate-ping"
                style={{
                  borderColor: flavour.accent,
                  opacity: 0.92,
                  animationDuration: "0.85s",
                }}
              />
              {/* Ring B (ink) */}
              <div
                className="absolute w-44 h-44 rounded-full border animate-ping"
                style={{
                  borderColor: flavour.ink,
                  opacity: 0.7,
                  animationDuration: "1.1s",
                }}
              />
              {/* Droplets */}
              {DROPLETS.map((drop, i) => (
                <div
                  key={i}
                  className="absolute rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${drop.size}px`,
                    height: `${drop.size}px`,
                    backgroundColor: drop.isWhite ? "#ffffff" : flavour.accent,
                    transform: `translate(${drop.x}px, ${drop.y}px)`,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
          )}

          {/* Contact Shadow under can */}
          <div
            className="absolute -bottom-2 w-[55%] h-4 rounded-full bg-black/20 blur-[6px] transition-transform duration-500"
            style={{
              transform: `scaleX(${shadowScale})`,
              opacity: shadowScale < 1 ? 0.45 : 0.8,
            }}
          />

          {/* Turntable Host Div (1.4x overscan) */}
          <div
            ref={hostRef}
            className="absolute inset-[-20%] pointer-events-none z-10"
          />

          {/* Fallback / Resting Studio Still */}
          <div
            className={`w-full h-full relative z-0 transition-opacity duration-300 ${
              isTurningLive ? "opacity-0" : "opacity-100"
            }`}
          >
            <Still
              stillKey={stillKey}
              alt={`${flavour.name} 250 ml can ${isBack ? "back nutrition facts" : "front label"}`}
            />
          </div>
        </button>

        {/* Tap to turn label */}
        <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase opacity-75 mt-2 block md:opacity-0 md:group-hover:opacity-80 transition-opacity">
          {isBack ? "Tap for the front ↺" : "Tap to turn ↻"}
        </div>
      </div>

      {/* Info Panel: Front vs Back Cross-fade */}
      <div className="relative z-10 min-h-[140px] flex flex-col justify-between">
        {!isBack ? (
          /* Front Info */
          <div className="flex flex-col gap-2 transition-opacity duration-500">
            <h3 className="display-sm leading-none font-medium">{flavour.name}</h3>
            <p className="body-sm opacity-80 max-w-[28ch]">{flavour.notes}</p>
          </div>
        ) : (
          /* Back Info */
          <div className="flex flex-col gap-2 transition-opacity duration-500 text-[0.8rem]">
            <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase font-semibold">
              Back of the can · per 250 ml
            </div>
            {/* 2x2 facts list */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 my-1 font-mono text-[0.75rem]">
              <div>Energy {flavour.kcal} kcal</div>
              <div>Added sugar 0 g</div>
              <div>Potassium 500 mg</div>
              <div>Sodium 62 mg</div>
            </div>
            <div className="font-sans text-[0.75rem] opacity-75 line-clamp-2">
              {getIngredients(flavour).join(" ")}
            </div>
          </div>
        )}

        {/* Footer Row: Dot + Specs and Add to crate button */}
        <div className="flex items-center justify-between pt-4 border-t border-black/10 mt-3">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: flavour.accent }}
            />
            <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase opacity-75">
              250 ml · 0 g added sugar
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            data-cursor="cta"
            className="font-medium text-[0.85rem] tracking-[0.02em] px-4 py-1.5 rounded-full bg-[var(--color-ink)] text-[var(--color-ivory)] hover:bg-[var(--color-kraft)] hover:text-[var(--color-ink)] transition-colors duration-300"
          >
            {isAdded ? (
              <span className="text-[var(--color-moss)] font-bold">Added ✓</span>
            ) : (
              "Add to crate +"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function FlavoursSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Warm turntable when section within 200px
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(() => {
              turntableManager.warm(flavours[0]);
            });
          } else {
            turntableManager.warm(flavours[0]);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);

    if (prefersReducedMotion) return;

    // Headline: the two words slide in from ∓12% with a fade scrubbed from top 85% to top 35%
    if (word1Ref.current && word2Ref.current) {
      gsap.fromTo(
        word1Ref.current,
        { xPercent: -12, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        word2Ref.current,
        { xPercent: 12, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
    }

    // Cards batch in (y 70 -> 0, 1.1s expo, stagger .08) at top 90%
    const cards = section.querySelectorAll(".flavour-card");
    gsap.fromTo(
      cards,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
        },
      }
    );

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="sip-flavours"
      data-theme="dark"
      className="relative z-30 bg-[var(--color-moss)] text-[var(--color-ivory)] pt-[6vh] pb-[14vh] container-x"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="eyebrow text-center text-[var(--color-ivory)]/70 mb-6">
          03 — The range
        </div>

        {/* Headline with rotating kraft sun glyph */}
        <h2
          ref={headlineRef}
          className="font-display font-medium text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.95] tracking-[-0.035em] text-center flex items-center justify-center flex-wrap gap-4 md:gap-8 mb-4"
        >
          <span ref={word1Ref} className="inline-block">
            Explore all
          </span>

          {/* Kraft sun glyph (16 rays alternating 44/54 around solid and dashed circle) rotating 360° per 18s */}
          <span className="inline-block w-[clamp(44px,7vw,88px)] h-[clamp(44px,7vw,88px)] text-[var(--color-kraft)] animate-[spin_18s_linear_infinite]">
            <svg viewBox="0 0 120 120" className="w-full h-full fill-current">
              <circle cx="60" cy="60" r="18" fill="currentColor" />
              <circle
                cx="60"
                cy="60"
                r="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {Array.from({ length: 16 }).map((_, i) => {
                const ang = (i / 16) * Math.PI * 2;
                const rOuter = i % 2 === 0 ? 54 : 44;
                const rInner = 32;
                const x1 = 60 + Math.cos(ang) * rInner;
                const y1 = 60 + Math.sin(ang) * rInner;
                const x2 = 60 + Math.cos(ang) * rOuter;
                const y2 = 60 + Math.sin(ang) * rOuter;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </span>

          <span ref={word2Ref} className="inline-block text-[var(--color-kraft)]">
            flavours
          </span>
        </h2>

        {/* Mono hint */}
        <div className="font-mono text-[0.75rem] tracking-[0.16em] uppercase text-[var(--color-ivory)]/70 mb-14 md:mb-20">
          Tap any can to turn it around
        </div>

        {/* Grid 1 / 2 (sm) / 3 (lg) columns */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {flavours.map((flavour, idx) => (
            <FlavourCard key={flavour.id} flavour={flavour} index={idx} />
          ))}
        </div>
      </div>

      {/* FluteEdge hanging below, rotated 180 */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[98%] text-[var(--color-moss)]">
        <FluteEdge flip />
      </div>
    </section>
  );
}
