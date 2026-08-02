"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
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
  const menuId = useId();
  const onIntake = rest === "/intake" || rest.startsWith("/intake/");

  const links = [
    { href: localePath(locale, "/#how-it-works"), label: dict.nav.howItWorks },
    { href: localePath(locale, "/#what-we-build"), label: dict.nav.whatWeBuild },
    { href: localePath(locale, "/#capabilities"), label: dict.nav.capabilities },
    { href: localePath(locale, "/#cases"), label: dict.nav.cases },
    { href: localePath(locale, "/company"), label: dict.nav.company },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/95 supports-[backdrop-filter]:bg-bg/85 supports-[backdrop-filter]:backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-trust focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-2 section-pad py-2.5 sm:gap-3 sm:py-3">
        <Link
          href={localePath(locale)}
          className="group flex min-w-0 shrink items-center gap-2"
          aria-label="YOJO Genesis"
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
          <span className="whitespace-nowrap font-serif text-[13px] font-semibold tracking-tight text-ink sm:text-[15px]">
            YOJO Genesis
          </span>
        </Link>

        <nav
          className="ml-6 hidden items-center gap-7 text-sm text-ink-muted lg:flex"
          aria-label="Primary"
        >
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

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href={localePath(otherLocale, rest)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-line px-3 text-xs font-medium tracking-wide text-ink-muted transition-colors hover:border-trust hover:text-trust"
            hrefLang={otherLocale}
            aria-label={
              locale === "ja" ? "Switch to English" : "日本語に切り替え"
            }
            title={locale === "ja" ? "English" : "日本語"}
          >
            {otherLocale === "en" ? "EN" : "日本語"}
          </Link>
          {!onIntake && (
            <ButtonLink
              href={localePath(locale, "/intake")}
              className="!px-3.5 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm"
            >
              <span className="sm:hidden">{dict.nav.intakeShort}</span>
              <span className="hidden sm:inline">{dict.nav.intake}</span>
            </ButtonLink>
          )}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-trust lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-0 block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-0.5 w-4 bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-0.5 w-4 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          className="border-t border-line bg-bg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 section-pad py-3 text-base">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-ink transition-colors hover:bg-pearl active:bg-accent-soft"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <ButtonLink
                href={localePath(locale, "/intake")}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {dict.nav.intake}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
