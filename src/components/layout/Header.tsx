"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";
import { Enso } from "@/components/ui/Enso";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(ja|en)/, "") || "/";
  const otherLocale: Locale = locale === "ja" ? "en" : "ja";

  const links = [
    { href: localePath(locale, "/#capabilities"), label: dict.nav.capabilities },
    { href: localePath(locale, "/#cases"), label: dict.nav.cases },
    { href: localePath(locale, "/#security"), label: dict.nav.security },
    { href: localePath(locale, "/company"), label: dict.nav.company },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/95 supports-[backdrop-filter]:bg-bg/85 supports-[backdrop-filter]:backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-trust focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-2 section-pad py-3 sm:gap-4">
        <Link
          href={localePath(locale)}
          className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <Enso
              className="absolute inset-0 h-full w-full text-trust transition-transform duration-700 group-hover:rotate-[360deg]"
              strokeWidth={9}
              animated={false}
            />
            <span className="kanji-mark text-[11px] font-semibold text-trust-deep">
              養
            </span>
          </span>
          <span className="truncate font-serif text-sm font-semibold tracking-tight text-ink sm:text-[15px]">
            YOJO Genesis
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-muted lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-sweep transition-colors hover:text-trust"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={localePath(otherLocale, rest)}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-trust hover:text-trust"
            hrefLang={otherLocale}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <ButtonLink
            href={localePath(locale, "/intake")}
            className="hidden sm:inline-flex text-xs sm:text-sm"
          >
            {dict.nav.intake}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 section-pad py-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href={localePath(locale, "/intake")}>
              {dict.nav.intake}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
