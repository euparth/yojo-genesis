import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { Container } from "@/components/ui/Section";
import { Enso } from "@/components/ui/Enso";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-pearl">
      <div aria-hidden className="seigaiha absolute inset-x-0 top-0 h-10 opacity-50" />
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Enso
                className="h-7 w-7 text-trust"
                strokeWidth={9}
                animated={false}
              />
              <p className="font-serif text-sm font-semibold text-ink">
                YOJO Genesis
              </p>
            </div>
            <p className="mt-3 max-w-md text-sm text-ink-muted">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              {dict.footer.appi}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link
              href={localePath(locale, "/company")}
              className="link-sweep text-ink-muted hover:text-trust"
            >
              {dict.footer.company}
            </Link>
            <Link
              href={localePath(locale, "/intake")}
              className="link-sweep text-ink-muted hover:text-trust"
            >
              {dict.footer.intake}
            </Link>
            <Link
              href={localePath(locale, "/#security")}
              className="link-sweep text-ink-muted hover:text-trust"
            >
              {dict.footer.security}
            </Link>
            <Link
              href={localePath(locale, "/#cases")}
              className="link-sweep text-ink-muted hover:text-trust"
            >
              {dict.footer.cases}
            </Link>
            <a
              href="https://devpilot.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep text-ink-muted hover:text-trust"
            >
              {dict.footer.delivery}: DevPilot
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.rights}</p>
          <p className="kanji-mark tracking-[0.2em] text-trust/60">
            自然 × 技術 — Edge AI · Fixed-outcome
          </p>
        </div>
      </Container>
    </footer>
  );
}
