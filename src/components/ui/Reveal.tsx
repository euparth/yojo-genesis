"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Scroll reveal that NEVER leaves content invisible.
 * Default is visible (SSR + first paint). Animation is progressive enhancement.
 * iOS Safari IntersectionObserver is unreliable — failsafe forces visibility.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Start visible so mobile Safari never shows a blank page
  const [visible, setVisible] = useState(true);
  const [enhance, setEnhance] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const alreadyInView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (alreadyInView) {
      setVisible(true);
      setEnhance(true);
      return;
    }

    // Below the fold: briefly arm animation, then observe
    setVisible(false);
    setEnhance(true);

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "120px 0px 120px 0px" },
    );
    io.observe(el);

    // Hard failsafe — never leave blank content on flaky mobile browsers
    const t1 = window.setTimeout(show, 600);
    const t2 = window.setTimeout(show, 2000);

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: enhance && visible ? `${delay}ms` : "0ms" }}
      className={`reveal ${enhance ? "reveal-enhance" : ""} ${
        visible ? "reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
