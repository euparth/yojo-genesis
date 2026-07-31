import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stepKanji = ["診", "証", "拡"];

export function Engagement({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="engagement"
      className="relative overflow-hidden border-y border-line bg-pearl py-16 md:py-24"
    >
      <div
        aria-hidden
        className="breathe pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-trust/10 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.engagement.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.engagement.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.engagement.body}</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-12">
            {/* connecting path */}
            <span
              aria-hidden
              className="grow-line absolute left-0 right-0 top-0 hidden h-px bg-gradient-to-r from-trust via-gold to-trust-deep md:block"
            />
            <div className="grid gap-6 md:grid-cols-3 md:pt-10">
              {dict.engagement.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="card-lift group relative rounded-2xl border border-line bg-bg p-7"
                >
                  <span
                    aria-hidden
                    className="kanji-mark absolute right-5 top-5 text-4xl text-trust/10 transition-colors duration-500 group-hover:text-trust/25"
                  >
                    {stepKanji[index]}
                  </span>
                  <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
