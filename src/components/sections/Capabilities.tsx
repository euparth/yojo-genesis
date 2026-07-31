"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import type { CapabilityId } from "@/lib/types";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const kanjiFor: Record<CapabilityId, string> = {
  vision: "観",
  edge: "際",
  nlp: "言",
  modernization: "新",
};

export function Capabilities({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<CapabilityId | null>(null);

  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 overflow-hidden bg-pearl py-16 md:py-24"
    >
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent-soft/80 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.capabilities.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.capabilities.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.capabilities.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {dict.capabilities.items.map((item, index) => {
            const id = item.id as CapabilityId;
            const isOpen = open === id;
            return (
              <Reveal key={item.id} delay={(index % 2) * 140}>
                <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-line bg-bg p-7 md:p-9">
                  {/* kanji watermark */}
                  <span
                    aria-hidden
                    className="kanji-mark absolute -bottom-8 -right-4 text-[9rem] text-trust/[0.06] transition-all duration-700 group-hover:-translate-y-3 group-hover:text-trust/[0.12]"
                  >
                    {kanjiFor[id]}
                  </span>

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                        {item.number}
                      </p>
                      <p className="text-xs text-ink-muted">{item.sectors}</p>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                    <button
                      type="button"
                      className="link-sweep mt-6 inline-flex min-h-10 items-center text-sm font-medium text-trust"
                      onClick={() => setOpen(isOpen ? null : id)}
                      aria-expanded={isOpen}
                    >
                      {dict.capabilities.expandLabel}
                      {isOpen ? " −" : " +"}
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 rounded-xl bg-accent-soft/60 p-4 text-sm text-ink-muted">
                          {dict.capabilities.expandBodies[id]}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
