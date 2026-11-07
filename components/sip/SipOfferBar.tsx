"use client";

import React, { useState, useEffect } from "react";
import { SipMark } from "@/components/sip/ui/SipLogo";

export function SipOfferBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const closed = sessionStorage.getItem("sip-offer-closed");
    if (closed) return;

    setIsDismissed(false);

    const onIntroDone = () => {
      setTimeout(() => {
        setIsVisible(true);
      }, 1400);
    };

    if (window.__sipIntroDone) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1400);
    } else {
      window.addEventListener("sip:intro-done", onIntroDone, { once: true });
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("sip-offer-closed", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Promotional offer"
      className={`fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[620px] transition-all duration-700 ease-[var(--ease-expo)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-[var(--color-ink)] text-[var(--color-ivory)] rounded-full px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 border border-white/10 select-none">
        {/* Left: Moss disc with SipMark */}
        <div className="w-8 h-8 rounded-full bg-[var(--color-moss)] text-[var(--color-ivory)] flex items-center justify-center shrink-0">
          <SipMark className="w-4 h-4" />
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="font-mono text-xs text-[var(--color-kraft)] font-medium text-center flex-1">
            You&apos;re in — check your inbox for 15% off.
          </div>
        ) : (
          <>
            {/* Offer Copy */}
            <div className="flex-1 text-xs md:text-sm font-medium">
              <span className="hidden sm:inline">
                Sip Club — 15% off your first crate of six
              </span>
              <span className="sm:hidden">
                Sip Club — 15% off
              </span>
            </div>

            {/* Desktop: Email input + Join */}
            <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="bg-white/10 text-xs px-3 py-1.5 rounded-full outline-none placeholder:text-white/40 focus:ring-1 focus:ring-[var(--color-kraft)] w-36"
              />
              <button
                type="submit"
                className="font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)] hover:bg-[var(--color-ivory)] transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>

            {/* Phone: Link to #sip-newsletter */}
            <a
              href="#sip-newsletter"
              className="md:hidden font-mono text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-kraft)] text-[var(--color-ink)]"
            >
              Join
            </a>
          </>
        )}

        {/* Dismiss × button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss offer"
          className="w-7 h-7 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer shrink-0"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
