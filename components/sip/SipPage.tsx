"use client";

import React from "react";
import { SipIntro } from "@/components/sip/SipIntro";
import { SipNav } from "@/components/sip/SipNav";
import { StorySection } from "@/components/sip/story/StorySection";
import { ManifestoSection } from "@/components/sip/sections/ManifestoSection";
import { FlavoursSection } from "@/components/sip/sections/FlavoursSection";
import { HealthSection } from "@/components/sip/sections/HealthSection";
import { ReviewsSection } from "@/components/sip/sections/ReviewsSection";
import { SipFooter } from "@/components/sip/SipFooter";
import { SipOfferBar } from "@/components/sip/SipOfferBar";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import "@/components/sip/sip.css";

export function SipPage() {
  return (
    <>
      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-ink)] focus:text-[var(--color-ivory)] focus:rounded-full font-mono text-xs"
      >
        Skip to content
      </a>

      {/* Intro Overlay */}
      <SipIntro />

      {/* SmoothScroll wraps site */}
      <SmoothScroll>
        {/* Navigation */}
        <SipNav />

        {/* Main Content */}
        <main id="main">
          <StorySection />
          <ManifestoSection />
          <FlavoursSection />
          <HealthSection />
          <ReviewsSection />
        </main>

        {/* Footer */}
        <SipFooter />

        {/* Offer Bar */}
        <SipOfferBar />
      </SmoothScroll>

      {/* Custom Cursor */}
      <Cursor />
    </>
  );
}
