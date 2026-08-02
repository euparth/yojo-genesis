import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-pearl py-16 md:py-24"
    >
      <div
        aria-hidden
        className="breathe pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-trust/10 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.howItWorks.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.howItWorks.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.howItWorks.body}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12">
            <span
              aria-hidden
              className="grow-line absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-trust via-gold to-trust-deep md:block"
            />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dict.howItWorks.steps.map((step, index) => (
                <li
                  key={step.number}
                  className="card-lift relative rounded-2xl border border-line bg-bg p-6 md:p-7"
                >
                  <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                  {index < dict.howItWorks.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute -right-3 top-1/2 hidden text-gold/60 lg:block"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
