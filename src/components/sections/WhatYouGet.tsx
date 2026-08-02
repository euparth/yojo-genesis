import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhatYouGet({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="what-you-get"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-pearl py-16 md:py-24"
    >
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.whatYouGet.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.whatYouGet.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.whatYouGet.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.whatYouGet.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="card-lift h-full rounded-2xl border border-line bg-bg p-6">
                <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
