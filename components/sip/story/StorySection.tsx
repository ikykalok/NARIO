"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { BEATS, STAGE_AT, getStageIndex } from "@/lib/sip/timeline";
import { sipStats, sipStages, sipBrand, sipPacker } from "@/data/sip";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { PackerMark } from "@/components/sip/ui/PackerLogo";
import { usePointer, useReducedMotion, useIsMobile } from "@/lib/hooks";

const DynamicStoryScene = dynamic(
  () => import("./StoryScene").then((m) => m.StoryScene),
  { ssr: false }
);

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const entranceRef = useRef(0);
  const pointerRef = usePointer();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Overlay elements refs
  const heroRealRef = useRef<HTMLDivElement>(null);
  const heroSourceRef = useRef<HTMLDivElement>(null);
  const heroSipRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const heroTopRightRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  const stampsRef = useRef<(HTMLDivElement | null)[]>([]);
  const readoutContainerRef = useRef<HTMLDivElement>(null);
  const readoutTextRef = useRef<HTMLSpanElement>(null);
  const readoutNumRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const canCopyContainerRef = useRef<HTMLDivElement>(null);
  const canTitleRef = useRef<HTMLHeadingElement>(null);
  const canCopyTextRef = useRef<HTMLParagraphElement>(null);
  const canBottomRightRef = useRef<HTMLDivElement>(null);

  const keepSippingRef = useRef<HTMLHeadingElement>(null);

  const packCopyContainerRef = useRef<HTMLDivElement>(null);
  const packTitle1Ref = useRef<HTMLSpanElement>(null);
  const packTitle2Ref = useRef<HTMLSpanElement>(null);
  const packTitle3Ref = useRef<HTMLSpanElement>(null);
  const packBodyRef = useRef<HTMLParagraphElement>(null);
  const packEyebrowRef = useRef<HTMLDivElement>(null);
  const packSpecsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentStageIdx, setCurrentStageIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ScrollTrigger to drive progressRef and timeline
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        progressRef.current = self.progress;

        const stage = getStageIndex(self.progress);
        if (stage !== currentStageIdx) {
          setCurrentStageIdx(stage);
        }
      },
    });

    // Intro entrance trigger
    const onIntroDone = () => {
      if (prefersReducedMotion) {
        entranceRef.current = 1;
        return;
      }

      gsap.to(entranceRef, {
        current: 1,
        duration: 1.8,
        ease: "power2.out",
      });

      // Hero lines rise from 115%
      const lines = [heroRealRef.current, heroSourceRef.current, heroSipRef.current];
      lines.forEach((line, i) => {
        if (line) {
          const span = line.querySelector("span");
          if (span) {
            gsap.fromTo(
              span,
              { yPercent: 115 },
              {
                yPercent: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.15 + i * 0.1,
              }
            );
          }
        }
      });

      // Fade-in items
      const fades = section.querySelectorAll('[data-in="fade"]');
      gsap.fromTo(
        fades,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          delay: 0.55,
          ease: "power2.out",
        }
      );
    };

    if (window.__sipIntroDone || prefersReducedMotion) {
      onIntroDone();
    } else {
      window.addEventListener("sip:intro-done", onIntroDone, { once: true });
    }

    // Main GSAP Scrub Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    // Scroll hint fade by .005
    if (scrollHintRef.current) {
      tl.to(scrollHintRef.current, { opacity: 0, duration: 0.005 }, 0.001);
    }

    // heroOut (.02 - .10):
    // "The real" xPercent -30 + fade, "source of" xPercent +30 + fade,
    // "every sip." yPercent 60 + fade, hero copy y -40 + fade
    if (heroRealRef.current) {
      tl.to(
        heroRealRef.current,
        { xPercent: -30, opacity: 0, duration: 0.08, ease: "none" },
        BEATS.heroOut.start
      );
    }
    if (heroSourceRef.current) {
      tl.to(
        heroSourceRef.current,
        { xPercent: 30, opacity: 0, duration: 0.08, ease: "none" },
        BEATS.heroOut.start
      );
    }
    if (heroSipRef.current) {
      tl.to(
        heroSipRef.current,
        { yPercent: 60, opacity: 0, duration: 0.08, ease: "none" },
        BEATS.heroOut.start
      );
    }
    if (heroCopyRef.current) {
      tl.to(
        heroCopyRef.current,
        { y: -40, opacity: 0, duration: 0.08 * 0.7, ease: "none" },
        BEATS.heroOut.start
      );
    }
    if (heroTopRightRef.current) {
      tl.to(
        heroTopRightRef.current,
        { opacity: 0, y: -20, duration: 0.08, ease: "none" },
        BEATS.heroOut.start
      );
    }

    // Stamps i = 0..3 enter at statsIn + .014*i
    const stampRotations = [-9, 7, 5, -6];
    stampsRef.current.forEach((el, i) => {
      if (!el) return;
      const enterStart = BEATS.statsIn.start + 0.014 * i;
      const enterDuration = 0.035;
      const baseRot = stampRotations[i];

      // Enter
      tl.fromTo(
        el,
        { opacity: 0, scale: 0.4, rotation: baseRot + (i % 2 === 0 ? -40 : 40), y: 40 },
        {
          opacity: 1,
          scale: 1,
          rotation: baseRot,
          y: 0,
          duration: enterDuration,
          ease: "back.out(1.6)",
        },
        enterStart
      );

      // Drift up until statsOut
      const driftDuration = BEATS.statsOut.start - (enterStart + enterDuration);
      if (driftDuration > 0) {
        tl.to(
          el,
          {
            y: -60 - 14 * i,
            duration: driftDuration,
            ease: "none",
          },
          enterStart + enterDuration
        );
      }

      // Exit
      tl.to(
        el,
        {
          scale: 0.7,
          y: -140,
          opacity: 0,
          duration: 0.025,
          ease: "power2.in",
        },
        BEATS.statsOut.start + 0.006 * i
      );
    });

    // Readout
    if (readoutContainerRef.current) {
      tl.fromTo(
        readoutContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.02 },
        STAGE_AT[0] - 0.01
      );
      tl.to(
        readoutContainerRef.current,
        { opacity: 0, duration: 0.02 },
        0.89
      );
    }

    if (progressBarRef.current) {
      tl.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.88 - (STAGE_AT[0] - 0.01), ease: "none" },
        STAGE_AT[0] - 0.01
      );
    }

    // canCopyIn (.47 - .52): "Coconut." rises from 110%, copy fades up
    if (canCopyContainerRef.current) {
      tl.fromTo(
        canCopyContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.02 },
        BEATS.canCopyIn.start
      );
    }
    if (canTitleRef.current) {
      const span = canTitleRef.current.querySelector("span");
      if (span) {
        tl.fromTo(
          span,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.05, ease: "power3.out" },
          BEATS.canCopyIn.start
        );
        // canCopyOut (.555 - .585): title exits -110%
        tl.to(
          span,
          { yPercent: -110, duration: 0.03, ease: "power3.in" },
          BEATS.canCopyOut.start
        );
      }
    }
    if (canCopyTextRef.current) {
      tl.fromTo(
        canCopyTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.04 },
        BEATS.canCopyIn.start + 0.01
      );
      tl.to(
        canCopyTextRef.current,
        { opacity: 0, y: -20, duration: 0.03 },
        BEATS.canCopyOut.start
      );
    }
    if (canBottomRightRef.current) {
      tl.fromTo(
        canBottomRightRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.04 },
        BEATS.canCopyIn.start + 0.015
      );
      tl.to(
        canBottomRightRef.current,
        { opacity: 0, y: -20, duration: 0.03 },
        BEATS.canCopyOut.start
      );
    }

    // keepIn (.55 - .61): "Keep sipping." yPercent 70 -> 0 and fades in
    if (keepSippingRef.current) {
      tl.fromTo(
        keepSippingRef.current,
        { yPercent: 70, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.06, ease: "power3.out" },
        BEATS.keepIn.start
      );
      // keepOut (.63 - .67): yPercent -90 and out
      tl.to(
        keepSippingRef.current,
        { yPercent: -90, opacity: 0, duration: 0.04, ease: "power3.in" },
        BEATS.keepOut.start
      );
    }

    // packCopyIn (.745 - .80): three title lines rise (stagger .008), copy fades up
    if (packCopyContainerRef.current) {
      tl.fromTo(
        packCopyContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.02 },
        BEATS.packCopyIn.start
      );
      // Fade out on cover
      tl.to(
        packCopyContainerRef.current,
        { opacity: 0, duration: 0.05 },
        BEATS.cover.start
      );
    }
    if (packEyebrowRef.current) {
      tl.fromTo(
        packEyebrowRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.03 },
        BEATS.packCopyIn.start
      );
    }
    const packSpans = [packTitle1Ref.current, packTitle2Ref.current, packTitle3Ref.current];
    packSpans.forEach((span, i) => {
      if (span) {
        tl.fromTo(
          span,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.04, ease: "power3.out" },
          BEATS.packCopyIn.start + i * 0.008
        );
      }
    });
    if (packBodyRef.current) {
      tl.fromTo(
        packBodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.04 },
        BEATS.packCopyIn.start + 0.02
      );
    }
    // Four spec lines slide in from x 20 during crateTurn (stagger .008)
    packSpecsRef.current.forEach((el, i) => {
      if (!el) return;
      tl.fromTo(
        el,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.03, ease: "power2.out" },
        BEATS.crateTurn.start + i * 0.008
      );
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [prefersReducedMotion, currentStageIdx]);

  // Stage roll-up animation on stage change
  useEffect(() => {
    if (!readoutTextRef.current || !readoutNumRef.current) return;
    gsap.fromTo(
      [readoutTextRef.current, readoutNumRef.current],
      { yPercent: 100 },
      { yPercent: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [currentStageIdx]);

  return (
    <section
      ref={sectionRef}
      id="sip-story"
      aria-label="BR-Nario — from coconut to carton"
      className="relative w-full h-[950svh] md:h-[1100vh]"
    >
      {/* Sticky 100svh stage */}
      <div
        ref={stageRef}
        className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden bg-[var(--color-ivory)] select-none grain"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 46%, #fbfaf6 0%, #f5f3ee 55%, #ece8df 100%)",
        }}
      >
        {/* ========================================================= */}
        {/* BACK LAYER (z-0) — Type the objects pass in front of     */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main <h1> */}
          <h1 className="sr-only">BR-Nario — The real source of every sip.</h1>

          {/* Line 1: "The real" (left gutter, 39% from top on desktop) */}
          <div
            ref={heroRealRef}
            aria-hidden="true"
            className="absolute left-[var(--gutter)] top-[26%] md:top-[39%] line-mask"
          >
            <span className="display-xl text-[var(--color-ink)]">The real</span>
          </div>

          {/* Line 2: "source of" (right gutter, same line) */}
          <div
            ref={heroSourceRef}
            aria-hidden="true"
            className="absolute right-[var(--gutter)] top-[35%] md:top-[39%] line-mask"
          >
            <span className="display-xl text-[var(--color-ink)]">source of</span>
          </div>

          {/* Line 3: "every sip." (kraft, left 47%, one line lower) */}
          <div
            ref={heroSipRef}
            aria-hidden="true"
            className="absolute left-[var(--gutter)] md:left-[47%] top-[44%] md:top-[51%] line-mask"
          >
            <span className="display-xl text-[var(--color-kraft)]">every sip.</span>
          </div>

          {/* "Keep sipping." — huge centred (kraft full stop) */}
          <h2
            ref={keepSippingRef}
            aria-hidden="true"
            className="absolute w-full text-center top-[16%] md:top-[12%] font-display font-medium text-[clamp(3.6rem,17vw,16rem)] leading-[0.88] tracking-[-0.04em] text-[var(--color-ink)] opacity-0 pointer-events-none"
          >
            Keep sipping<span className="text-[var(--color-kraft)]">.</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* SCENE LAYER (z-10) — The R3F Canvas Rig                  */}
        {/* ========================================================= */}
        <DynamicStoryScene
          progressRef={progressRef}
          entranceRef={entranceRef}
          pointerRef={pointerRef}
        />

        {/* ========================================================= */}
        {/* FRONT LAYER (z-20) — UI overlay, pointer-events none       */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-[var(--gutter)]">
          {/* Top Row */}
          <div className="w-full flex items-start justify-between">
            {/* Left placeholder for nav spacing */}
            <div className="w-8" />

            {/* Top-right copy (desktop) */}
            <div
              ref={heroTopRightRef}
              data-in="fade"
              className="hidden md:flex flex-col items-end gap-4 max-w-[32ch] text-right pointer-events-auto"
            >
              <p className="body-sm text-[var(--color-ink)]/80">
                Quench your thirst with pure tender coconut water — no concentrate, no added sugar, nothing hidden.
              </p>
              <Magnetic strength={0.25}>
                <Button href="#sip-flavours" variant="ghost" size="md">
                  Discover flavours
                </Button>
              </Magnetic>
            </div>
          </div>

          {/* HERO BOTTOM COPY & HINT */}
          <div className="w-full flex items-end justify-between">
            {/* Bottom-left eyebrow & lede */}
            <div
              ref={heroCopyRef}
              data-in="fade"
              className="flex flex-col gap-2 max-w-[34ch]"
            >
              <div className="flex items-center gap-3">
                <span className="eyebrow-ink">Tender coconut water · 250 ml</span>
                <span className="w-6 h-[1px] bg-[var(--color-ink)]/30" />
              </div>
              <p className="body-sm text-[var(--color-ink)]/70">
                For centuries, coconuts have carried their own perfectly balanced refreshment. We simply open them — and can what&apos;s inside within a day.
              </p>
            </div>

            {/* Bottom-right hint */}
            <div
              ref={scrollHintRef}
              data-in="fade"
              className="flex flex-col items-center gap-2 pointer-events-auto"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                Scroll to crack it open
              </span>
              <div className="w-[1.5px] h-[40px] bg-[var(--color-ink)]/15 overflow-hidden relative">
                <div className="w-full h-[16px] bg-[var(--color-ink)] sip-hint-bar" />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FOUR STAT STAMPS (SVG 200x200)                            */}
          {/* ========================================================= */}
          {sipStats.map((stat, i) => {
            const tones = ["moss", "kraft", "ivory", "ink"] as const;
            const tone = tones[i];
            const toneClass =
              tone === "kraft"
                ? "data-tone='kraft'"
                : tone === "ivory"
                ? "data-tone='ivory'"
                : tone === "ink"
                ? "data-tone='ink'"
                : "";

            // Positions:
            // moss left 4% top 17% / 19% 22%
            // kraft 58% 64% / 70% 60%
            // ivory 4% 62% / 13% 60%
            // ink 60% 14% / 68% 16%
            const posClasses = [
              "left-[4%] top-[17%] md:left-[19%] md:top-[22%]",
              "left-[58%] top-[64%] md:left-[70%] md:top-[60%]",
              "left-[4%] top-[62%] md:left-[13%] md:top-[60%]",
              "left-[60%] top-[14%] md:left-[68%] md:top-[16%]",
            ][i];

            return (
              <div
                key={stat.label}
                ref={(el) => {
                  stampsRef.current[i] = el;
                }}
                className={`absolute ${posClasses} sip-stamp opacity-0 pointer-events-none`}
                data-tone={tone}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full select-none">
                  {/* Outer disc */}
                  <circle cx="100" cy="100" r="96" className="sip-stamp-disc" />

                  {/* Dashed ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    opacity="0.45"
                  />

                  {/* Circular text path r 78 */}
                  <path
                    id={`stamp-path-${i}`}
                    d="M 100 22 A 78 78 0 1 1 99.9 22"
                    fill="none"
                  />
                  <text className="sip-stamp-ring">
                    <textPath
                      href={`#stamp-path-${i}`}
                      startOffset="0%"
                      spacing="auto"
                    >
                      {stat.label.toUpperCase()} · {sipBrand.wordmark} ·
                    </textPath>
                  </text>

                  {/* Value and unit in center */}
                  <text
                    x="100"
                    y="108"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="currentColor"
                    fontFamily="var(--font-display)"
                    fontWeight="600"
                    fontSize="42"
                  >
                    {stat.value}
                    <tspan fontSize="21" dy="-10">
                      {stat.unit}
                    </tspan>
                  </text>
                </svg>
              </div>
            );
          })}

          {/* ========================================================= */}
          {/* CAN COPY (Stage 03)                                       */}
          {/* ========================================================= */}
          <div
            ref={canCopyContainerRef}
            className="absolute inset-0 p-[var(--gutter)] flex flex-col justify-between pointer-events-none opacity-0"
          >
            {/* Top-left title */}
            <div className="flex flex-col gap-3 max-w-[42ch]">
              <h2
                ref={canTitleRef}
                className="line-mask font-display font-medium text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.9] text-[var(--color-ink)]"
              >
                <span>
                  Coconut<span className="text-[var(--color-kraft)]">.</span>
                </span>
              </h2>
              <p
                ref={canCopyTextRef}
                className="hidden md:block lede text-[var(--color-ink)]/80"
              >
                One green coconut, opened and pressed within a day of harvest. 100% raw, with 500 mg of potassium in every can.
              </p>
            </div>

            {/* Bottom-right CTA */}
            <div
              ref={canBottomRightRef}
              className="flex flex-col items-end gap-4 max-w-[34ch] self-end text-right pointer-events-auto"
            >
              <p className="body-sm text-[var(--color-ink)]/80">
                Six flavours, each one pressed with real fruit. Mango, lychee, pink guava — and three more worth meeting.
              </p>
              <Magnetic strength={0.25}>
                <Button href="#sip-flavours" variant="ink" size="md">
                  Explore flavours
                </Button>
              </Magnetic>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PACKED COPY (Stage 04)                                    */}
          {/* ========================================================= */}
          <div
            ref={packCopyContainerRef}
            className="absolute inset-0 p-[var(--gutter)] flex items-center justify-between pointer-events-none opacity-0"
          >
            {/* Left side copy */}
            <div className="flex flex-col gap-4 max-w-[42ch]">
              <div
                ref={packEyebrowRef}
                className="flex items-center gap-2 text-[var(--color-ink)]"
              >
                <PackerMark className="w-5 h-4" />
                <span className="eyebrow-ink">04 — Packed by Fluteworks</span>
              </div>

              <h2 className="font-display font-medium text-[clamp(2.4rem,4.4vw,4.6rem)] leading-[0.95] text-[var(--color-ink)] flex flex-col">
                <span className="line-mask">
                  <span ref={packTitle1Ref}>Sealed in a</span>
                </span>
                <span className="line-mask">
                  <span ref={packTitle2Ref}>carton built</span>
                </span>
                <span className="line-mask">
                  <span ref={packTitle3Ref} className="text-[var(--color-kraft)]">
                    to travel.
                  </span>
                </span>
              </h2>

              <p
                ref={packBodyRef}
                className="hidden md:block lede text-[var(--color-ink)]/80"
              >
                Six cans, one corrugated shipper — designed, printed and converted by Fluteworks Packaging, so every crate arrives the way it left.
              </p>
            </div>

            {/* Bottom-right spec list (mono .6rem) */}
            <div className="absolute right-[var(--gutter)] bottom-[var(--gutter)] flex flex-col gap-1 text-right">
              {[
                "RSC shipper · 6 × 250 ml",
                "3-ply · B-flute · kraft",
                "2-colour flexo print",
                "Made in India",
              ].map((spec, i) => (
                <div
                  key={spec}
                  ref={(el) => {
                    packSpecsRef.current[i] = el;
                  }}
                  className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-[var(--color-ink)]/70"
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* STAGE READOUT (Bottom-Left)                               */}
          {/* ========================================================= */}
          <div
            ref={readoutContainerRef}
            className="absolute left-[var(--gutter)] bottom-[var(--gutter)] w-[min(15rem,40vw)] flex flex-col gap-2 pointer-events-none opacity-0"
          >
            <div className="flex items-center justify-between font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[var(--color-ink)]">
              <div className="line-mask">
                <span ref={readoutTextRef}>{sipStages[currentStageIdx]}</span>
              </div>
              <div className="line-mask">
                <span ref={readoutNumRef}>0{currentStageIdx + 1} / 04</span>
              </div>
            </div>
            {/* Hairline progress bar */}
            <div className="w-full h-[1px] bg-[var(--color-ink)]/20 relative">
              <div
                ref={progressBarRef}
                className="absolute inset-0 bg-[var(--color-ink)] origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
