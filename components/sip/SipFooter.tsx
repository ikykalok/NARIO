"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sipBrand, sipNav, flavours, sipPacker } from "@/data/sip";
import { FluteEdge } from "@/components/sip/ui/FluteEdge";
import { SipMark } from "@/components/sip/ui/SipLogo";
import { PackerMark } from "@/components/sip/ui/PackerLogo";

export function SipFooter() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsJoined(true);
  };

  const year = new Date().getFullYear();

  return (
    <footer
      id="sip-footer"
      data-theme="dark"
      className="relative z-20 bg-[var(--color-ink)] text-[var(--color-ivory)] pt-20 md:pt-28 pb-12 overflow-hidden"
    >
      {/* FluteEdge on top */}
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] text-[var(--color-ink)]">
        <FluteEdge />
      </div>

      <div className="container-x max-w-7xl mx-auto flex flex-col gap-20">
        {/* Top Section: Newsletter Banner */}
        <div id="sip-newsletter" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="eyebrow text-[var(--color-grey)]">Sip Club</div>
            <h3 className="display-sm max-w-[24ch]">
              15% off your first crate, and first sips of new flavours.
            </h3>
          </div>

          <div className="lg:col-span-5 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="relative flex items-center border-b border-white/30 focus-within:border-[var(--color-kraft)] pb-2">
                <input
                  type="email"
                  value={email}
                  disabled={isJoined}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent text-base md:text-lg outline-none placeholder:text-white/30 text-[var(--color-ivory)] font-sans"
                />
                <button
                  type="submit"
                  disabled={isJoined}
                  className="font-mono text-sm tracking-[0.14em] uppercase text-[var(--color-kraft)] hover:text-white transition-colors cursor-pointer pl-4 shrink-0 font-medium disabled:opacity-50"
                >
                  {isJoined ? "Joined ✓" : "Join"}
                </button>
              </div>

              {isJoined && (
                <span className="font-mono text-xs text-[var(--color-kraft)] mt-1">
                  You&apos;re on the list.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Links Grid: Explore, Flavours, Cartons by */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-sm">
          {/* Explore (nav) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="eyebrow text-[var(--color-grey)]">Explore</span>
            <div className="flex flex-col gap-2.5">
              {sipNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[var(--color-kraft)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Flavours (six names) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="eyebrow text-[var(--color-grey)]">Flavours</span>
            <div className="grid grid-cols-2 gap-2.5">
              {flavours.map((f) => (
                <Link
                  key={f.id}
                  href="#sip-flavours"
                  className="hover:text-[var(--color-kraft)] transition-colors"
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Cartons by Fluteworks */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="eyebrow text-[var(--color-grey)]">Cartons by</span>
            <div className="flex items-center gap-3">
              <PackerMark className="w-8 h-7 text-[var(--color-kraft)]" />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-base">
                  {sipPacker.name}
                </span>
                <span className="font-mono text-xs tracking-wider text-[var(--color-grey)]">
                  {sipPacker.tagline}
                </span>
              </div>
            </div>
            <p className="body-sm text-[var(--color-grey)] text-xs max-w-[34ch] mt-2">
              {sipPacker.positioning}
            </p>
          </div>
        </div>

        {/* Giant Ghost Wordmark with SipMark at end */}
        <div className="relative w-full flex items-center justify-between select-none pointer-events-none opacity-6 my-4">
          <span className="font-display font-bold text-[14.5vw] leading-none tracking-[-0.04em] text-[var(--color-ivory)]">
            {sipBrand.wordmark}
          </span>
          <div className="w-[12vw] h-[12vw] shrink-0 text-[var(--color-ivory)]">
            <SipMark className="w-full h-full" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-grey)]">
          <div>
            © {year} {sipBrand.name}. {sipBrand.product}.
          </div>
          <div>Packed in a {sipPacker.name} carton</div>
        </div>
      </div>
    </footer>
  );
}
