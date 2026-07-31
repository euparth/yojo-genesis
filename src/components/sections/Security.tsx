import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Enso } from "@/components/ui/Enso";

export function Security({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="security"
      className="relative scroll-mt-24 overflow-hidden bg-forest py-16 text-white md:py-24"
    >
      {/* forest depth gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(178,141,79,0.12), transparent 45%), radial-gradient(ellipse at 10% 90%, rgba(63,107,82,0.25), transparent 50%)",
        }}
      />
      <Enso
        className="float-slower pointer-events-none absolute -left-24 top-8 h-72 w-72 text-gold/10"
        strokeWidth={2.5}
        animated={false}
      />
      <div aria-hidden className="seigaiha-dark absolute inset-x-0 top-0 h-10 opacity-50" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionLabel>
                <span className="text-gold">{dict.security.eyebrow}</span>
              </SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                {dict.security.title}
              </h2>
              <p className="mt-4 text-white/75">{dict.security.body}</p>
            </Reveal>
            <ul className="mt-9 space-y-6">
              {dict.security.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 110}>
                  <li className="group flex gap-4">
                    <span
                      aria-hidden
                      className="pulse-dot mt-2 h-2 w-2 shrink-0 rounded-full bg-gold text-gold"
                    />
                    <div>
                      <p className="font-semibold">{point.title}</p>
                      <p className="mt-1 text-sm text-white/70">{point.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={200}>
            <div className="card-lift rounded-3xl border border-white/15 bg-surface-dark/80 p-7 backdrop-blur md:p-9">
              <p className="kanji-mark text-sm font-semibold tracking-[0.2em] text-gold">
                {dict.security.diagramTitle}
              </p>
              <ol className="mt-7 space-y-1">
                {dict.security.diagramSteps.map((step, i) => (
                  <li key={step} className="relative flex items-start gap-4 pb-6 last:pb-0">
                    {i < dict.security.diagramSteps.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[13px] top-8 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-gold/50 to-trust/30"
                      />
                    )}
                    <span className="kanji-mark flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-xs font-semibold text-gold">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-white/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
