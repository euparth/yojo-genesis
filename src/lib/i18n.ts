import type { Locale } from "./types";

export const locales: Locale[] = ["ja", "en"];
export const defaultLocale: Locale = "ja";

export function isLocale(value: string): value is Locale {
  return value === "ja" || value === "en";
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}
