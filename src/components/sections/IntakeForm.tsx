"use client";

import { useMemo, useState } from "react";
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
  const [step, setStep] = useState<Step>(0);
  const [situations, setSituations] = useState<SituationId[]>([]);
  const [brief, setBrief] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState<string>(dict.intake.contactOptions[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const canNext0 = situations.length > 0;
  const canNext1 = brief.trim().length >= 20;
  const canSubmit =
    name.trim().length > 1 &&
    company.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);

  function toggleSituation(id: SituationId) {
    setSituations((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  async function onSubmit() {
    if (!canSubmit) return;
    setStatus("loading");
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
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-line bg-pearl p-8 text-center">
          <SectionLabel>{dict.intake.eyebrow}</SectionLabel>
          <h1 className="text-2xl font-semibold text-ink">
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
    <Container className="py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionLabel>{dict.intake.eyebrow}</SectionLabel>
          <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {dict.intake.title}
          </h1>
          <p className="mt-4 text-ink-muted">{dict.intake.body}</p>
          <p className="mt-6 text-sm text-ink-muted">{dict.intake.guarantee}</p>
          <p className="mt-2 text-xs text-ink-muted">{dict.intake.secureNote}</p>
        </div>

        <div className="rounded-3xl border border-line bg-bg p-6 shadow-[0_20px_50px_-30px_rgba(22,40,31,0.25)] md:p-8">
          <div className="mb-6">
            <div className="mb-2 flex justify-between text-xs text-ink-muted">
              {dict.intake.steps.map((label, i) => (
                <span
                  key={label}
                  className={i === step ? "font-semibold text-trust" : ""}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-pearl">
              <div
                className="h-full rounded-full bg-trust transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {step === 0 && (
            <div>
              <p className="text-sm font-medium text-ink">
                {dict.intake.situationsLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dict.intake.situations.map((s) => {
                  const active = situations.includes(s.id as SituationId);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleSituation(s.id as SituationId)}
                      className={`rounded-full border px-3 py-2 text-left text-sm transition-colors ${
                        active
                          ? "border-trust bg-accent-soft text-trust"
                          : "border-line text-ink-muted hover:border-trust/50"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-end">
                <Button disabled={!canNext0} onClick={() => setStep(1)}>
                  {dict.intake.next}
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="block text-sm font-medium text-ink">
                {dict.intake.briefLabel}
                <textarea
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  rows={7}
                  placeholder={dict.intake.briefPlaceholder}
                  className="mt-2 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm text-ink outline-none focus:border-trust"
                />
              </label>
              <label className="mt-4 block text-sm font-medium text-ink">
                {dict.intake.fileLabel}
                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="mt-2 block w-full text-sm text-ink-muted"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? null)
                  }
                />
              </label>
              <p className="mt-2 text-xs text-ink-muted">{dict.intake.fileHint}</p>
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={() => setStep(0)}>
                  {dict.intake.back}
                </Button>
                <Button disabled={!canNext1} onClick={() => setStep(2)}>
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
                onChange={setName}
              />
              <Field
                label={dict.intake.companyLabel}
                value={company}
                onChange={setCompany}
              />
              <Field
                label={dict.intake.emailLabel}
                value={email}
                onChange={setEmail}
                type="email"
              />
              <label className="block text-sm font-medium text-ink">
                {dict.intake.contactLabel}
                <select
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm outline-none focus:border-trust"
                >
                  {dict.intake.contactOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              {status === "error" && (
                <p className="text-sm text-danger">{dict.intake.errorBody}</p>
              )}
              <div className="mt-8 flex justify-between">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  {dict.intake.back}
                </Button>
                <Button
                  disabled={!canSubmit || status === "loading"}
                  onClick={onSubmit}
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-line bg-pearl/40 px-4 py-3 text-sm outline-none focus:border-trust"
      />
    </label>
  );
}
