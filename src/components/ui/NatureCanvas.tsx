"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  sway: number;
  phase: number;
  kind: "leaf" | "node";
};

/**
 * Tech-meets-nature ambient field: drifting leaves + data nodes.
 * Disabled on mobile / coarse pointers to avoid iOS Safari blank-layer bugs.
 */
export function NatureCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf = 0;
    let ro: ResizeObserver | null = null;

    try {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isNarrow = window.matchMedia("(max-width: 767px)").matches;
      if (reduced || isCoarse || isNarrow) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const g = ctx;

      let width = 0;
      let height = 0;
      const mouse = { x: -9999, y: -9999 };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const MOSS = "63, 107, 82";
      const GOLD = "178, 141, 79";
      const particles: Particle[] = [];

      function resize() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function seed() {
        particles.length = 0;
        const count = Math.min(40, Math.floor((width * height) / 30000));
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.2 + 0.06,
            r: 1.2 + Math.random() * 2.6,
            sway: 0.3 + Math.random() * 0.7,
            phase: Math.random() * Math.PI * 2,
            kind: Math.random() < 0.4 ? "node" : "leaf",
          });
        }
      }

      function step(t: number) {
        g.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 110) {
              const alpha = (1 - dist / 110) * 0.14;
              g.strokeStyle = `rgba(${MOSS}, ${alpha})`;
              g.lineWidth = 0.7;
              g.beginPath();
              g.moveTo(a.x, a.y);
              g.lineTo(b.x, b.y);
              g.stroke();
            }
          }
        }

        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120 && dist > 0.01) {
            const force = ((120 - dist) / 120) * 0.35;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }

          p.x += p.vx + Math.sin(t / 1800 + p.phase) * 0.12 * p.sway;
          p.y += p.vy;

          if (p.y > height + 10) p.y = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.x < -10) p.x = width + 10;

          if (p.kind === "leaf") {
            g.save();
            g.translate(p.x, p.y);
            g.rotate(Math.sin(t / 1400 + p.phase) * 0.8);
            g.fillStyle = `rgba(${MOSS}, 0.35)`;
            g.beginPath();
            g.ellipse(0, 0, p.r * 2.1, p.r * 0.95, 0, 0, Math.PI * 2);
            g.fill();
            g.restore();
          } else {
            g.fillStyle = `rgba(${GOLD}, 0.5)`;
            g.beginPath();
            g.arc(p.x, p.y, p.r * 0.8, 0, Math.PI * 2);
            g.fill();
          }
        }

        raf = requestAnimationFrame(step);
      }

      function onMove(e: PointerEvent) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }

      function onLeave() {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      resize();
      seed();
      raf = requestAnimationFrame(step);

      ro = new ResizeObserver(() => {
        resize();
        seed();
      });
      ro.observe(canvas);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);

      return () => {
        cancelAnimationFrame(raf);
        ro?.disconnect();
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
      };
    } catch {
      return undefined;
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    />
  );
}
