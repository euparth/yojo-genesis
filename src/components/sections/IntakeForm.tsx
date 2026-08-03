"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale, SituationId } from "@/lib/types";
import { localePath } from "@/lib/i18n";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";

type Step = 0 | 1 | 2;

export function IntakeForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const searchParams = useSearchParams();
  const fromCheck = searchParams.get("from") === "check";
  const checkPath = searchParams.get("path");
  const checkScore = searchParams.get("score");
  const checkBand = searchParams.get("band");

  const [step, setStep] = useState<Step>(0);
  const [situations, setSituations] = useState<SituationId[]>(() => {
    if (checkPath === "c") return ["founder-cto"];
    if (checkPath === "b") return ["visual-inspection"];
    if (checkPath === "a") return ["website-app"];
    return [];
  });
  const [brief, setBrief] = useState(() => {
    if (!fromCheck) return "";
    const bits = [
      checkPath ? `Diagnostic path: ${checkPath}` : null,
      checkScore ? `Score: ${checkScore}` : null,
      checkBand ? `Band: ${checkBand}` : null,
    ].filter(Boolean);
    return bits.length
      ? `${bits.join(" · ")}\n\n`
      : "";
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState<string>(dict.intake.contactOptions[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [hint, setHint] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const canNext0 = situations.length > 0;
  const canNext1 = brief.trim().length >= 20;
  const canSubmit =
    name.trim().length > 1 &&
    company.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);
  const briefLen = brief.trim().length;

  useEffect(() => {
    setHint(null);
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [step]);

  useEffect(() => {
    if (status === "success") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [status]);

  function toggleSituation(id: SituationId) {
    setHint(null);
    setSituations((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  function goNextFrom0() {
    if (!canNext0) {
      setHint(dict.intake.selectHint);
      return;
    }
    setStep(1);
  }

  function goNextFrom1() {
    if (!canNext1) {
      setHint(dict.intake.briefHint);
      return;
    }
    setStep(2);
  }

  async function onSubmit() {
    if (!canSubmit) {
      setHint(dict.intake.contactHint);
      return;
    }
    setStatus("loading");
    setHint(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          situations,
          brief,
          fileName,
          name,
          company,
          email,
          contact,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-xl scroll-mt-28 rounded-3xl border border-line bg-pearl p-8 text-center shadow-[0_20px_50px_-30px_rgba(22,40,31,0.25)]">
          <SectionLabel>{dict.intake.eyebrow}</SectionLabel>
          <h1 className="text-2xl font-semibold text-ink md:text-3xl">
            {dict.intake.successTitle}
          </h1>
          <p className="mt-4 text-ink-muted">{dict.intake.successBody}</p>
          <div className="mt-8">
            <ButtonLink href={localePath(locale)}>{dict.intake.homeLink}</ButtonLink>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-10 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
          <SectionLabel>{dict.intake.eyebrow}</SectionLabel>
          <h1 className="text-[1.65rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
            {dict.intake.title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {dict.intake.body}
          </p>
          {fromCheck && (
            <p className="mt-3 text-sm font-medium text-trust">
              {dict.intake.checkBridge}
            </p>
          )}
          <p className="mt-4 rounded-2xl border border-trust/20 bg-accent-soft/50 px-4 py-3 text-sm leading-relaxed text-ink">
            {dict.intake.plainPromise}
          </p>
          <p className="mt-5 text-sm text-ink-muted">{dict.intake.guarantee}</p>
          <p className="mt-2 text-xs text-ink-muted">{dict.intake.secureNote}</p>
        </div>

        <div
          ref={panelRef}
          className="min-w-0 rounded-3xl border border-line bg-bg p-5 shadow-[0_20px_50px_-30px_rgba(22,40,31,0.25)] sm:p-6 md:p-8"
        >
          <div className="mb-6">
            <div
              className="mb-3 flex justify-between gap-2 text-xs text-ink-muted"
              role="tablist"
              aria-label={dict.intake.eyebrow}
            >
              {dict.intake.steps.map((label, i) => {
                const reachable = i <= step;
                return (
                  <button
                    key={label}
                    type="button"
                    role="tab"
                    aria-selected={i === step}
                    disabled={!reachable}
                    onClick={() => reachable && setStep(i as Step)}
                    className={`min-h-9 flex-1 rounded-lg px-1 py-1.5 text-center transition-colors ${
                      i === step
                        ? "bg-accent-soft font-semibold text-trust"
                        : reachable
                          ? "hover:bg-pearl hover:text-ink"
                          : "opacity-50"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div
              className="h-1.5 overflow-hidden rounded-full bg-pearl"
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={3}
              aria-label={`Step ${step + 1} of 3`}
            >
              <div
                className="h-full rounded-full bg-trust transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {hint && (
            <p
              role="alert"
              className="mb-4 rounded-xl border border-sakura/40 bg-sakura/10 px-3 py-2.5 text-sm text-danger"
            >
              {hint}
            </p>
          )}

          {step === 0 && (
            <div>
              <p className="text-sm font-medium text-ink">
                {dict.intake.situationsLabel}
              </p>
              <div className="mt-4 grid gap-2.5">
                {dict.intake.situations.map((s) => {
                  const active = situations.includes(s.id as SituationId);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleSituation(s.id as SituationId)}
                      className={`min-h-12 w-full rounded-2xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trust ${
                        active
                          ? "border-trust bg-accent-soft font-medium text-trust shadow-[inset_0_0_0_1px_rgba(63,107,82,0.35)]"
                          : "border-line text-ink-muted hover:border-trust/50 hover:bg-pearl/60 active:bg-pearl"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                            active
                              ? "border-trust bg-trust text-white"
                              : "border-line bg-bg"
                          }`}
                        >
                          {active ? "✓" : ""}
                        </span>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={goNextFrom0}
                  className={!canNext0 ? "!pointer-events-auto !opacity-100" : ""}
                  aria-disabled={!canNext0}
                >
                  {dict.intake.next}
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="block text-sm font-medium text-ink">
                <span className="flex flex-wrap items-baseline justify-between gap-2">
                  <span>{dict.intake.briefLabel}</span>
                  <span className="text-xs font-normal text-ink-muted">
                    {dict.intake.briefHint}
                  </span>
                </span>
                <textarea
                  value={brief}
                  onChange={(e) => {
                    setBrief(e.target.value);
                    setHint(null);
                  }}
                  rows={7}
                  minLength={20}
                  placeholder={dict.intake.briefPlaceholder}
                  className="mt-2 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-trust focus:bg-bg"
                />
              </label>
              <p
                className={`mt-1.5 text-xs ${
                  briefLen >= 20 ? "text-trust" : "text-ink-muted"
                }`}
                aria-live="polite"
              >
                {dict.intake.briefCounter.replace("{n}", String(briefLen))}
              </p>
              <label className="mt-4 block text-sm font-medium text-ink">
                {dict.intake.fileLabel}
                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="mt-2 block w-full text-sm text-ink-muted file:mr-3 file:rounded-full file:border-0 file:bg-accent-soft file:px-4 file:py-2 file:text-sm file:font-medium file:text-trust"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? null)
                  }
                />
              </label>
              {fileName && (
                <p className="mt-2 text-xs text-trust">{fileName}</p>
              )}
              <p className="mt-2 text-xs text-ink-muted">{dict.intake.fileHint}</p>
              <div className="mt-8 flex flex-wrap justify-between gap-3">
                <Button variant="secondary" onClick={() => setStep(0)}>
                  {dict.intake.back}
                </Button>
                <Button
                  onClick={goNextFrom1}
                  className={!canNext1 ? "!pointer-events-auto !opacity-100" : ""}
                  aria-disabled={!canNext1}
                >
                  {dict.intake.next}
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Field
                label={dict.intake.nameLabel}
                value={name}
                onChange={(v) => {
                  setName(v);
                  setHint(null);
                }}
                autoComplete="name"
              />
              <Field
                label={dict.intake.companyLabel}
                value={company}
                onChange={(v) => {
                  setCompany(v);
                  setHint(null);
                }}
                autoComplete="organization"
              />
              <Field
                label={dict.intake.emailLabel}
                value={email}
                onChange={(v) => {
                  setEmail(v);
                  setHint(null);
                }}
                type="email"
                autoComplete="email"
              />
              <label className="block text-sm font-medium text-ink">
                {dict.intake.contactLabel}
                <select
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-2 min-h-11 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm outline-none focus:border-trust focus:bg-bg"
                >
                  {dict.intake.contactOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              {status === "error" && (
                <p role="alert" className="text-sm text-danger">
                  {dict.intake.errorBody}
                </p>
              )}
              <div className="mt-8 flex flex-wrap justify-between gap-3">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  {dict.intake.back}
                </Button>
                <Button
                  disabled={status === "loading"}
                  onClick={onSubmit}
                  className={
                    !canSubmit && status !== "loading"
                      ? "!pointer-events-auto !opacity-100"
                      : ""
                  }
                  aria-disabled={!canSubmit || status === "loading"}
                >
                  {status === "loading"
                    ? dict.intake.submitting
                    : `${dict.intake.submit} →`}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 min-h-11 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm outline-none transition-colors focus:border-trust focus:bg-bg"
      />
    </label>
  );
}
