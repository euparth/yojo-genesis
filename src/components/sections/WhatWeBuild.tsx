import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeBuild({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="what-we-build"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="float-slower pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent-soft/60 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.whatWeBuild.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.whatWeBuild.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.whatWeBuild.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.whatWeBuild.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <article className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-pearl p-7">
                <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-line bg-bg px-2.5 py-1 text-[11px] tracking-wide text-ink-muted"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
