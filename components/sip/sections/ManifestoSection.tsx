"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { FluteEdge } from "@/components/sip/ui/FluteEdge";
import { useReducedMotion } from "@/lib/hooks";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const chipRef = useRef<HTMLSpanElement>(null);
  const fig1Ref = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);
  const fig2Ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion) return;

    // Scrub headline words opacity .14 -> 1 from top 78% to bottom 42%
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".manifesto-word");
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 78%",
            end: "bottom 42%",
            scrub: true,
          },
        }
      );
    }

    // Chip scrub scale .6 -> 1 and rotate -14° -> -4°
    if (chipRef.current) {
      gsap.fromTo(
        chipRef.current,
        { scale: 0.6, rotate: -14 },
        {
          scale: 1,
          rotate: -4,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 78%",
            end: "bottom 42%",
            scrub: true,
          },
        }
      );
    }

    // Drawings [data-draw] scrub strokeDashoffset 1 -> 0
    const drawPaths = section.querySelectorAll("[data-draw]");
    if (drawPaths.length > 0) {
      gsap.fromTo(
        drawPaths,
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );
    }

    // [data-fade] groups fade in
    const fadeGroups = section.querySelectorAll("[data-fade]");
    if (fadeGroups.length > 0) {
      gsap.fromTo(
        fadeGroups,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }

    // Parallaxes: Fig 01 (s = 0.25), sticker (s = -0.2), Fig 02 (s = 0.45)
    // y = 80*s -> -80*s across section
    if (fig1Ref.current) {
      const s = 0.25;
      gsap.fromTo(
        fig1Ref.current,
        { y: 80 * s },
        {
          y: -80 * s,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (stickerRef.current) {
      const s = -0.2;
      gsap.fromTo(
        stickerRef.current,
        { y: 80 * s },
        {
          y: -80 * s,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (fig2Ref.current) {
      const s = 0.45;
      gsap.fromTo(
        fig2Ref.current,
        { y: 80 * s },
        {
          y: -80 * s,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, [prefersReducedMotion]);

  const words = [
    "Pure",
    "coconut",
    "water.",
    "Naturally",
    "hydrating,",
    "refreshingly",
    "fresh,",
    "from",
    "nature's",
    "source.",
  ];

  return (
    <section
      ref={sectionRef}
      id="sip-manifesto"
      data-theme="dark"
      className="relative z-30 -mt-[100svh] bg-[var(--color-moss)] text-[var(--color-ivory)] pt-[16vh] md:pt-[22vh] pb-[12vh] container-x"
    >
      {/* FluteEdge on top */}
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] text-[var(--color-moss)]">
        <FluteEdge />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="eyebrow text-center text-[var(--color-ivory)]/70 mb-8">
          02 — What&apos;s inside
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display font-medium text-[clamp(2.4rem,6.6vw,7rem)] leading-[1.05] tracking-[-0.035em] text-center max-w-[17ch] mb-20 md:mb-28"
        >
          {words.map((w, idx) => {
            if (w === "fresh,") {
              return (
                <span
                  key={idx}
                  ref={chipRef}
                  className="manifesto-word inline-block px-4 py-1 mx-2 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] origin-center shadow-lg font-medium"
                >
                  fresh,
                </span>
              );
            }
            return (
              <span key={idx} className="manifesto-word inline-block mr-[0.3em]">
                {w}
              </span>
            );
          })}
        </h2>

        {/* 12-Column Grid (items end) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Fig. 01 (5 cols, parallax .25) */}
          <div ref={fig1Ref} className="md:col-span-5 flex flex-col gap-3">
            <svg
              viewBox="0 0 470 400"
              className="w-full h-auto stroke-current fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <clipPath id="innerWaterClip">
                  <path d="M160 116 C 210 116 234 158 234 214 C 234 268 204 302 160 302 C 116 302 86 268 86 214 C 86 158 110 116 160 116 Z" />
                </clipPath>
              </defs>

              <g transform="translate(10, 0)">
                {/* 4 Nested outlines */}
                <path
                  data-draw
                  pathLength="1"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                  d="M150 30 C 245 30 300 110 300 205 C 300 300 235 372 150 372 C 65 372 0 300 0 205 C 0 110 55 30 150 30 Z"
                />
                <path
                  data-draw
                  pathLength="1"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                  opacity="0.7"
                  d="M150 62 C 225 62 268 128 268 207 C 268 288 216 344 150 344 C 84 344 32 288 32 207 C 32 128 75 62 150 62 Z"
                />
                <path
                  data-draw
                  pathLength="1"
                  strokeWidth="3"
                  strokeDasharray="1"
                  d="M150 104 C 208 104 236 150 236 212 C 236 274 200 314 150 314 C 100 314 64 274 64 212 C 64 150 92 104 150 104 Z"
                />
                <path
                  data-draw
                  pathLength="1"
                  strokeWidth="1.5"
                  strokeDasharray="1"
                  opacity="0.7"
                  d="M150 116 C 200 116 224 158 224 214 C 224 268 194 302 150 302 C 106 302 76 268 76 214 C 76 158 100 116 150 116 Z"
                />

                {/* Nine water lines clipped to inner outline */}
                <g clipPath="url(#innerWaterClip)" opacity="0.45" strokeWidth="1">
                  {[140, 160, 180, 200, 220, 240, 260, 280, 295].map((wy, idx) => (
                    <line key={idx} x1="70" y1={wy} x2="250" y2={wy} strokeDasharray="3 3" />
                  ))}
                </g>

                {/* Dash-dot center axis */}
                <line
                  x1="150"
                  y1="15"
                  x2="150"
                  y2="385"
                  strokeWidth="1"
                  strokeDasharray="8 4 2 4"
                  opacity="0.4"
                />

                {/* Callout dots and leader lines */}
                <g data-fade className="transition-opacity duration-700">
                  {/* SKIN - 2 MM (214, 58) */}
                  <circle cx="214" cy="58" r="3" fill="currentColor" />
                  <path d="M214 58 L280 58 L320 58" strokeWidth="1" />
                  <text
                    x="330"
                    y="62"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    letterSpacing="1.5"
                  >
                    SKIN — 2 MM
                  </text>

                  {/* HUSK - 25 MM (196, 96) */}
                  <circle cx="196" cy="96" r="3" fill="currentColor" />
                  <path d="M196 96 L280 96 L320 96" strokeWidth="1" />
                  <text
                    x="330"
                    y="100"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    letterSpacing="1.5"
                  >
                    HUSK — 25 MM
                  </text>

                  {/* SHELL - 3 MM (176, 134) */}
                  <circle cx="176" cy="134" r="3" fill="currentColor" />
                  <path d="M176 134 L280 134 L320 134" strokeWidth="1" />
                  <text
                    x="330"
                    y="138"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    letterSpacing="1.5"
                  >
                    SHELL — 3 MM
                  </text>

                  {/* MEAT - 6 MM (164, 172) */}
                  <circle cx="164" cy="172" r="3" fill="currentColor" />
                  <path d="M164 172 L280 172 L320 172" strokeWidth="1" />
                  <text
                    x="330"
                    y="176"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    letterSpacing="1.5"
                  >
                    MEAT — 6 MM
                  </text>

                  {/* WATER - 250 ML (150, 270) */}
                  <circle cx="150" cy="270" r="3" fill="currentColor" />
                  <path d="M150 270 L280 270 L320 270" strokeWidth="1" />
                  <text
                    x="330"
                    y="274"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="11"
                    letterSpacing="1.5"
                  >
                    WATER — 250 ML
                  </text>

                  {/* Dimension line: Ø 180 MM */}
                  <line x1="0" y1="382" x2="300" y2="382" strokeWidth="1" />
                  <line x1="0" y1="376" x2="0" y2="388" strokeWidth="1" />
                  <line x1="300" y1="376" x2="300" y2="388" strokeWidth="1" />
                  <text
                    x="150"
                    y="396"
                    textAnchor="middle"
                    fill="currentColor"
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    letterSpacing="2"
                  >
                    Ø 180 MM
                  </text>
                </g>
              </g>
            </svg>
            <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ivory)]/70">
              Fig. 01 — Young coconut, section · 1 : 2.5
            </div>
          </div>

          {/* Rotating sticker (2 cols, parallax -.2) */}
          <div
            ref={stickerRef}
            className="md:col-span-3 flex flex-col items-center justify-center my-6 md:my-0"
          >
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Spinning circular text */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full animate-[spin_22s_linear_infinite]"
              >
                <path
                  id="sticker-text-path"
                  d="M 100 22 A 78 78 0 1 1 99.9 22"
                  fill="none"
                />
                <text
                  fill="var(--color-kraft)"
                  fontFamily="var(--font-mono)"
                  fontSize="15"
                  letterSpacing="4"
                  fontWeight="500"
                >
                  <textPath href="#sticker-text-path">
                    NO ADDED SUGAR · NOT FROM CONCENTRATE ·
                  </textPath>
                </text>
              </svg>

              {/* Central Kraft 100% Disc */}
              <div className="w-20 h-20 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] flex items-center justify-center font-display font-semibold text-xl shadow-md">
                100%
              </div>
            </div>
          </div>

          {/* Fig. 02 (4 cols from col 9, parallax .45) */}
          <div ref={fig2Ref} className="md:col-span-4 flex flex-col gap-3">
            <svg
              viewBox="0 0 440 300"
              className="w-full h-auto stroke-current fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outline */}
              <path
                data-draw
                pathLength="1"
                strokeWidth="1.8"
                strokeDasharray="1"
                d="M20 80 L20 60 L140 60 L140 20 L220 20 L220 60 L340 60 L340 20 L420 20 L420 60 L420 240 L420 280 L340 280 L340 240 L220 240 L220 280 L140 280 L140 240 L20 240 L20 220 L0 214 L0 86 L20 80 Z"
              />

              {/* Dashed score lines */}
              <g strokeDasharray="4 4" strokeWidth="1.2" opacity="0.6">
                <line x1="20" y1="80" x2="20" y2="220" />
                <line x1="140" y1="60" x2="140" y2="240" />
                <line x1="220" y1="60" x2="220" y2="240" />
                <line x1="340" y1="60" x2="340" y2="240" />
                <line x1="20" y1="60" x2="420" y2="60" />
                <line x1="20" y1="240" x2="420" y2="240" />
              </g>

              {/* Panel Labels */}
              <g
                data-fade
                fill="currentColor"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1.5"
                textAnchor="middle"
              >
                <text x="80" y="155">SIDE</text>
                <text x="180" y="155">FRONT</text>
                <text x="280" y="155">SIDE</text>
                <text x="380" y="155">BACK</text>
                <text x="10" y="155" fontSize="8">GLUE</text>

                {/* Legend */}
                <text x="220" y="295" fontSize="9" opacity="0.7">
                  — CUT   - - SCORE
                </text>
              </g>
            </svg>
            <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ivory)]/70">
              Fig. 02 — Fluteworks Packaging RSC blank · 6 × 250 ml
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
