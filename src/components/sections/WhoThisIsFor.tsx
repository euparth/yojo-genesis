import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionLabel } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const kanji = ["店", "改", "創"];

export function WhoThisIsFor({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="who-for"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-accent-soft/70 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{dict.whoFor.eyebrow}</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
              {dict.whoFor.title}
            </h2>
            <p className="mt-4 text-ink-muted">{dict.whoFor.body}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.whoFor.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-line bg-pearl p-7">
                <span
                  aria-hidden
                  className="kanji-mark absolute -bottom-6 -right-2 text-[7rem] text-trust/[0.06] transition-all duration-700 group-hover:text-trust/[0.12]"
                >
                  {kanji[index]}
                </span>
                <p className="kanji-mark text-sm font-semibold tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
                <h3 className="relative mt-4 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
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
