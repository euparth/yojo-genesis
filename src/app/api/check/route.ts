import { NextResponse } from "next/server";
import { appendJsonRecord, appendLogLine } from "@/lib/submissions";

type CheckBody = {
  locale?: string;
  path?: string;
  score?: number;
  band?: string;
  answers?: Record<string, string>;
  gapIds?: string[];
  name?: string;
  company?: string;
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckBody;
    const email = body.email?.trim() ?? "";
    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const checkPath = body.path ?? "";

    if (
      !email ||
      !name ||
      !company ||
      !["a", "b", "c"].includes(checkPath) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const record = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      locale: body.locale ?? "ja",
      path: checkPath,
      score: body.score ?? 0,
      band: body.band ?? "",
      answers: body.answers ?? {},
      gapIds: body.gapIds ?? [],
      name,
      company,
      email,
    };

    try {
      await appendJsonRecord("check-submissions.json", record);
    } catch (err) {
      await appendLogLine(
        "check-store-errors.log",
        `${new Date().toISOString()} ${String(err)}\n`,
      );
      // Still succeed — unlock UX must not block on storage.
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INTAKE_TO_EMAIL;

    if (resendKey && toEmail) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "YOJO Genesis Check <onboarding@resend.dev>",
            to: [toEmail],
            subject: `[YOJO Check ${checkPath.toUpperCase()}] ${company} — ${name}`,
            text: [
              `Path: ${checkPath}`,
              `Score: ${record.score} (${record.band})`,
              `Company: ${company}`,
              `Name: ${name}`,
              `Email: ${email}`,
              `Locale: ${record.locale}`,
              `Gaps: ${record.gapIds.join(", ")}`,
              "",
              "Answers:",
              JSON.stringify(record.answers, null, 2),
            ].join("\n"),
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          await appendLogLine(
            "check-email-errors.log",
            `${new Date().toISOString()} ${errText}\n`,
          );
        }
      } catch (err) {
        await appendLogLine(
          "check-email-errors.log",
          `${new Date().toISOString()} ${String(err)}\n`,
        );
      }
    }

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", detail: String(err) },
      { status: 500 },
    );
  }
}
