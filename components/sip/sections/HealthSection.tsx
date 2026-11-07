"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Counter } from "@/components/motion/Counter";
import { Still } from "@/components/sip/ui/Still";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

export function HealthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    // Headline in three masked lines rising on entry (stagger .09, 1.2s expo)
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current];
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        },
      }
    );

    // Polaroid cards parallax: y 90*s -> -90*s across section
    const polaroids = [
      { ref: card1Ref, s: 0.3 },
      { ref: card2Ref, s: 0.55 },
      { ref: card3Ref, s: 0.45 },
      { ref: card4Ref, s: 0.8 },
    ];

    polaroids.forEach(({ ref, s }) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { y: 90 * s },
        {
          y: -90 * s,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="sip-health"
      className="relative z-20 bg-[var(--color-ivory)] text-[var(--color-ink)] pt-[22vh] pb-[14vh] container-x"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="eyebrow text-center mb-6">04 — Why it matters</div>

        {/* Headline in three masked lines */}
        <h2
          ref={headlineRef}
          className="font-display font-medium text-[clamp(2.6rem,7.4vw,8rem)] leading-[0.94] tracking-[-0.04em] text-center max-w-[14ch] mb-20 md:mb-28 flex flex-col items-center"
        >
          <span className="line-mask">
            <span ref={line1Ref} className="block">
              You deserve
            </span>
          </span>
          <span className="line-mask">
            <span ref={line2Ref} className="block">
              the best for
            </span>
          </span>
          <span className="line-mask">
            <span ref={line3Ref} className="block text-[var(--color-kraft)]">
              your health.
            </span>
          </span>
        </h2>

        {/* Two-Column Grid: Copy & Stats Left, Collage Right */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="lede text-[var(--color-ink)] font-normal">
              Nothing added, nothing hidden. Coconut water naturally carries electrolytes like potassium — we keep it raw, cold and simple.
            </p>

            <p className="body-sm text-[var(--color-ink)]/75">
              Every can starts as one young green coconut, opened and pressed within a day of harvest. No concentrate, no preservatives, no added sugar — just what the coconut made.
            </p>

            <div>
              <Magnetic strength={0.22}>
                <Button href="#sip-flavours" variant="ink" size="lg">
                  Find your flavour
                </Button>
              </Magnetic>
            </div>

            {/* 2x2 Stats List with Counters */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--color-ink)]/10 mt-4">
              {/* Stat 1: 500 mg Potassium per can */}
              <div className="flex flex-col gap-1">
                <div className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]">
                  <Counter value={500} suffix=" mg" />
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                  Potassium per can
                </div>
              </div>

              {/* Stat 2: 0 g Added sugar */}
              <div className="flex flex-col gap-1">
                <div className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]">
                  <Counter value={0} suffix=" g" />
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                  Added sugar
                </div>
              </div>

              {/* Stat 3: 24 h Tree to can */}
              <div className="flex flex-col gap-1">
                <div className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]">
                  <Counter value={24} suffix=" h" />
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                  Tree to can
                </div>
              </div>

              {/* Stat 4: 6 Flavours, all real fruit */}
              <div className="flex flex-col gap-1">
                <div className="font-display font-semibold text-3xl md:text-4xl text-[var(--color-ink)]">
                  <Counter value={6} />
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                  Flavours, all real fruit
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Collage (aspect 1:1.05) of 4 polaroids (7 cols) */}
          <div className="lg:col-span-7 relative w-full aspect-[1/1.05] min-h-[460px]">
            {/* Card 1: coconut-half · Fig. 03 — 100% raw · #e4e9dc · left 0 top 3% w 44% · -5° */}
            <div
              ref={card1Ref}
              className="absolute left-0 top-[3%] w-[44%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-10"
              style={{
                backgroundColor: "#e4e9dc",
                transform: "rotate(-5deg)",
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-black/5 mb-3">
                <Still stillKey="coconut-half" alt="Fig. 03 — 100% raw young coconut cut" />
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center">
                Fig. 03 — 100% raw
              </div>
            </div>

            {/* Card 2: can-back-original · Fig. 04 — Nothing hidden · #e9e2d5 · right 4% top 0 w 38% · 4° */}
            <div
              ref={card2Ref}
              className="absolute right-[4%] top-0 w-[38%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-20"
              style={{
                backgroundColor: "#e9e2d5",
                transform: "rotate(4deg)",
              }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg bg-black/5 mb-3">
                <Still stillKey="can-back-original" alt="Fig. 04 — Nothing hidden back label" />
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center">
                Fig. 04 — Nothing hidden
              </div>
            </div>

            {/* Card 3: coconut-pair · Fig. 05 — Opened within a day · #efe4d2 · left 27% bottom 0 w 38% · 3° */}
            <div
              ref={card3Ref}
              className="absolute left-[27%] bottom-0 w-[38%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-30"
              style={{
                backgroundColor: "#efe4d2",
                transform: "rotate(3deg)",
              }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-black/5 mb-3">
                <Still stillKey="coconut-pair" alt="Fig. 05 — Opened within a day coconut pair" />
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center">
                Fig. 05 — Opened within a day
              </div>
            </div>

            {/* Card 4: can-lime · Fig. 06 — Lime & mint · #d9e6d0 · right 0 bottom 14% w 31% · -6° */}
            <div
              ref={card4Ref}
              className="absolute right-0 bottom-[14%] w-[31%] p-3 md:p-4 rounded-xl shadow-lg transition-transform duration-500 ease-[var(--ease-expo)] hover:rotate-0 hover:scale-105 z-20"
              style={{
                backgroundColor: "#d9e6d0",
                transform: "rotate(-6deg)",
              }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg bg-black/5 mb-3">
                <Still stillKey="can-lime" alt="Fig. 06 — Lime & mint 250 ml can" />
              </div>
              <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-ink)]/80 text-center">
                Fig. 06 — Lime & mint
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
