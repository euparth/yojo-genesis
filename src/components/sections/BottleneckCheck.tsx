"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/types";
import {
  collectGaps,
  getCheckContent,
  scoreToBand,
  type CheckPath,
} from "@/content/check";
import { localePath } from "@/lib/i18n";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container, SectionLabel } from "@/components/ui/Section";

type Phase = "choose" | "questions" | "gate" | "result";

export function BottleneckCheck({
  locale,
  initialPath,
}: {
  locale: Locale;
  initialPath?: CheckPath | null;
}) {
  const content = getCheckContent(locale);
  const [phase, setPhase] = useState<Phase>(initialPath ? "questions" : "choose");
  const [path, setPath] = useState<CheckPath | null>(initialPath ?? null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [qIndex, setQIndex] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [hint, setHint] = useState<string | null>(null);

  const pack = path ? content.pack[path] : null;

  const { total, gapIds, band } = useMemo(() => {
    if (!pack) return { total: 0, gapIds: [] as string[], band: "medium" as const };
    let t = 0;
    const gaps: string[] = [];
    for (const q of pack.questions) {
      const optId = answers[q.id];
      const opt = q.options.find((o) => o.id === optId);
      if (opt) {
        t += opt.score;
        gaps.push(...opt.gapIds);
      }
    }
    return { total: t, gapIds: gaps, band: scoreToBand(path!, t) };
  }, [answers, pack, path]);

  const unlockedGaps = pack ? collectGaps(pack, gapIds) : [];

  function choosePath(p: CheckPath) {
    setPath(p);
    setAnswers({});
    setQIndex(0);
    setPhase("questions");
    setHint(null);
  }

  function selectOption(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setHint(null);
  }

  function goNextQuestion() {
    if (!pack) return;
    const q = pack.questions[qIndex];
    if (!answers[q.id]) {
      setHint(locale === "ja" ? "選択肢を選んでください。" : "Please pick an option.");
      return;
    }
    if (qIndex < pack.questions.length - 1) {
      setQIndex((i) => i + 1);
      return;
    }
    setPhase("gate");
  }

  async function unlock() {
    if (!path || !pack) return;
    if (
      name.trim().length < 2 ||
      company.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setHint(
        locale === "ja"
          ? "お名前・会社名・有効なメールを入力してください。"
          : "Enter name, company, and a valid email.",
      );
      return;
    }
    setStatus("loading");
    setHint(null);
    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          path,
          score: total,
          band,
          answers,
          gapIds: unlockedGaps.map((g) => g.id),
          name,
          company,
          email,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setPhase("result");
      setStatus("idle");
    } catch {
      setStatus("error");
      setHint(
        locale === "ja"
          ? "送信に失敗しました。もう一度お試しください。"
          : "Something went wrong. Please try again.",
      );
    }
  }

  const planHref = localePath(
    locale,
    `/intake?from=check&path=${path ?? "a"}&score=${total}&band=${band}`,
  );

  const planLabel =
    path === "b"
      ? content.planCtaB
      : path === "c"
        ? content.planCtaC
        : content.planCtaA;

  return (
    <Container className="py-10 md:py-16">
      <div className="mx-auto max-w-2xl">
        <SectionLabel>{content.umbrella}</SectionLabel>
        <h1 className="text-[1.65rem] font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
          {path && pack ? pack.outcomeName : content.umbrella}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
          {content.intro}
        </p>

        {phase === "choose" && (
          <div className="mt-10">
            <p className="text-sm font-medium text-ink">{content.chooseLabel}</p>
            <div className="mt-4 grid gap-3">
              {(["a", "b", "c"] as CheckPath[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => choosePath(p)}
                  className="card-lift rounded-2xl border border-line bg-pearl p-5 text-left transition-colors hover:border-trust"
                >
                  <p className="kanji-mark text-xs font-semibold tracking-[0.25em] text-gold">
                    {p === "a" ? "01" : p === "b" ? "02" : "03"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-ink">
                    {content.paths[p].title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{content.paths[p].body}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "questions" && pack && (
          <div className="mt-10 rounded-3xl border border-line bg-bg p-5 shadow-[0_20px_50px_-30px_rgba(22,40,31,0.25)] sm:p-8">
            <p className="text-xs text-ink-muted">
              {qIndex + 1} / {pack.questions.length}
            </p>
            <div
              className="mt-3 h-1.5 overflow-hidden rounded-full bg-pearl"
              role="progressbar"
              aria-valuenow={qIndex + 1}
              aria-valuemin={1}
              aria-valuemax={pack.questions.length}
            >
              <div
                className="h-full rounded-full bg-trust transition-all"
                style={{
                  width: `${((qIndex + 1) / pack.questions.length) * 100}%`,
                }}
              />
            </div>
            <h2 className="mt-6 text-lg font-semibold text-ink md:text-xl">
              {pack.questions[qIndex].prompt}
            </h2>
            <div className="mt-5 grid gap-2.5">
              {pack.questions[qIndex].options.map((opt) => {
                const active = answers[pack.questions[qIndex].id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      selectOption(pack.questions[qIndex].id, opt.id)
                    }
                    className={`min-h-12 rounded-2xl border px-4 py-3 text-left text-sm transition-colors ${
                      active
                        ? "border-trust bg-accent-soft font-medium text-trust"
                        : "border-line text-ink-muted hover:border-trust/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {hint && (
              <p role="alert" className="mt-4 text-sm text-danger">
                {hint}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  if (qIndex === 0) {
                    setPhase("choose");
                    setPath(null);
                  } else setQIndex((i) => i - 1);
                }}
              >
                {content.back}
              </Button>
              <Button type="button" onClick={goNextQuestion}>
                {content.next}
              </Button>
            </div>
          </div>
        )}

        {phase === "gate" && pack && (
          <div className="mt-10 rounded-3xl border border-line bg-bg p-5 sm:p-8">
            <p className="text-sm text-ink-muted">{pack.scoreLabel}</p>
            <p className="mt-2 text-3xl font-semibold text-trust">
              {pack.bands[band]}
            </p>
            <p className="mt-3 text-sm text-ink-muted">{pack.bandHint[band]}</p>
            <h2 className="mt-8 text-lg font-semibold text-ink">
              {content.unlockTitle}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">{content.unlockBody}</p>
            <div className="mt-6 grid gap-4">
              <label className="block text-sm">
                <span className="font-medium text-ink">{content.nameLabel}</span>
                <input
                  className="mt-1.5 w-full rounded-xl border border-line bg-pearl px-3 py-2.5 text-ink"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-ink">{content.companyLabel}</span>
                <input
                  className="mt-1.5 w-full rounded-xl border border-line bg-pearl px-3 py-2.5 text-ink"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete="organization"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-ink">{content.emailLabel}</span>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-line bg-pearl px-3 py-2.5 text-ink"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
            </div>
            {hint && (
              <p role="alert" className="mt-4 text-sm text-danger">
                {hint}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  setPhase("questions");
                  setQIndex(pack.questions.length - 1);
                }}
              >
                {content.back}
              </Button>
              <Button
                type="button"
                onClick={unlock}
                disabled={status === "loading"}
              >
                {status === "loading" ? content.unlocking : content.unlockCta}
              </Button>
            </div>
          </div>
        )}

        {phase === "result" && pack && (
          <div className="mt-10">
            <p className="text-sm text-ink-muted">{pack.scoreLabel}</p>
            <p className="mt-2 text-3xl font-semibold text-trust">
              {pack.bands[band]}
            </p>
            <p className="mt-3 text-sm text-ink-muted">{pack.bandHint[band]}</p>
            <h2 className="mt-10 text-lg font-semibold text-ink">
              {content.yourGaps}
            </h2>
            <ol className="mt-5 grid gap-4">
              {unlockedGaps.map((gap, i) => (
                <li
                  key={gap.id}
                  className="rounded-2xl border border-line bg-pearl p-5"
                >
                  <p className="kanji-mark text-xs font-semibold tracking-[0.25em] text-gold">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-semibold text-ink">{gap.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{gap.body}</p>
                  <p className="mt-3 text-sm font-medium text-trust">
                    {content.fixFirstLabel}: {gap.fixFirst}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row">
              <ButtonLink href={planHref} className="w-full justify-center sm:w-auto">
                {planLabel} →
              </ButtonLink>
              <ButtonLink
                href={localePath(locale)}
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                {content.secondaryHome}
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
