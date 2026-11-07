"use client";

import React, { useRef, useState, useEffect } from "react";
import { reviews } from "@/data/sip";
import { Still } from "@/components/sip/ui/Still";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { pad } from "@/lib/utils";

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    // Headline rising from 110%
    if (headlineRef.current) {
      const span = headlineRef.current.querySelector("span");
      if (span) {
        gsap.fromTo(
          span,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }

    // Two floating tinted cards at top right: drifting and rotating with scroll
    if (floatCard1Ref.current) {
      gsap.fromTo(
        floatCard1Ref.current,
        { y: -30, rotate: -4 },
        {
          y: 40,
          rotate: 6,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (floatCard2Ref.current) {
      gsap.fromTo(
        floatCard2Ref.current,
        { y: 30, rotate: 5 },
        {
          y: -40,
          rotate: -7,
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

  // Update carousel counter on scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const cardWidth = carousel.querySelector(".review-card")?.clientWidth || 420;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setCurrentIndex(Math.max(0, Math.min(reviews.length - 1, index)));
  };

  const scrollToCard = (idx: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(`.review-card-${idx}`) as HTMLElement;
    if (card) {
      carousel.scrollTo({
        left: card.offsetLeft - 24,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="sip-reviews"
      className="relative z-20 bg-[var(--color-ivory)] text-[var(--color-ink)] pt-[8vh] pb-[16vh] overflow-hidden"
    >
      <div className="container-x max-w-7xl mx-auto relative">
        {/* Floating tinted cards top right (desktop) */}
        <div className="hidden lg:block absolute right-4 -top-8 pointer-events-none z-10 w-[300px] h-[220px]">
          {/* Card 1: mango can on #f4e4c4 */}
          <div
            ref={floatCard1Ref}
            className="absolute right-0 top-0 w-32 aspect-[3/4] p-3 rounded-2xl shadow-xl flex items-center justify-center"
            style={{ backgroundColor: "#f4e4c4" }}
          >
            <Still stillKey="can-mango" alt="Mango 250 ml can" />
          </div>

          {/* Card 2: guava can on #f1d6d0 */}
          <div
            ref={floatCard2Ref}
            className="absolute right-24 top-16 w-32 aspect-[3/4] p-3 rounded-2xl shadow-xl flex items-center justify-center"
            style={{ backgroundColor: "#f1d6d0" }}
          >
            <Still stillKey="can-guava" alt="Pink guava 250 ml can" />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="eyebrow mb-4">05 — From the crate</div>

        {/* Header row: Headline left, controls right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2
            ref={headlineRef}
            className="line-mask font-display font-medium text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.035em]"
          >
            <span className="block">
              Sippers say<span className="text-[var(--color-kraft)] font-semibold">!</span>
            </span>
          </h2>

          {/* Controls: "01 / 05" counter + Round Prev / Next buttons */}
          <div className="flex items-center gap-6 self-start sm:self-auto">
            <span className="font-mono text-sm tracking-[0.16em] uppercase text-[var(--color-grey)]">
              {pad(currentIndex + 1)} / {pad(reviews.length)}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToCard(currentIndex - 1)}
                disabled={currentIndex === 0}
                aria-label="Previous review"
                className="w-12 h-12 rounded-full border border-[var(--color-ink)]/20 flex items-center justify-center text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)] disabled:opacity-30 disabled:pointer-events-none"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-none stroke-current stroke-[1.8]"
                >
                  <path d="M10 3L5 8l5 5" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollToCard(currentIndex + 1)}
                disabled={currentIndex === reviews.length - 1}
                aria-label="Next review"
                className="w-12 h-12 rounded-full border border-[var(--color-ink)]/20 flex items-center justify-center text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)] disabled:opacity-30 disabled:pointer-events-none"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-none stroke-current stroke-[1.8]"
                >
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Snap Carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        data-cursor="drag"
        tabIndex={0}
        aria-label="Reviews carousel"
        className="sip-no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory px-[var(--gutter)] py-4 cursor-grab active:cursor-grabbing focus:outline-none"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`review-card review-card-${i} shrink-0 snap-start w-[min(86vw,420px)] bg-[var(--color-paper)] p-8 rounded-2xl flex flex-col justify-between gap-8 select-none shadow-sm transition-transform duration-300 hover:-translate-y-1`}
          >
            {/* Top row: 5 Kraft Stars + Index */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[var(--color-kraft)]">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg
                    key={si}
                    viewBox="0 0 20 20"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.2 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.2 5.9-.8z" />
                  </svg>
                ))}
              </div>

              <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
                {pad(i + 1)}
              </span>
            </div>

            {/* Quote in display 1.45/1.6rem */}
            <blockquote className="font-display font-medium text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[1.3] tracking-[-0.02em] text-[var(--color-ink)]">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            {/* Author row with moss initial disc */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-ink)]/10">
              <div className="w-10 h-10 rounded-full bg-[var(--color-moss)] text-[var(--color-ivory)] flex items-center justify-center font-display font-semibold text-sm">
                {review.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm leading-tight text-[var(--color-ink)]">
                  {review.author}
                </span>
                <span className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-[var(--color-grey)]">
                  {review.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
