import { mkdir, appendFile, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

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

    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    const filePath = path.join(dataDir, "check-submissions.json");

    let existing: unknown[] = [];
    try {
      const raw = await readFile(filePath, "utf8");
      existing = JSON.parse(raw) as unknown[];
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }
    existing.push(record);
    await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INTAKE_TO_EMAIL;

    if (resendKey && toEmail) {
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
        await appendFile(
          path.join(dataDir, "check-email-errors.log"),
          `${new Date().toISOString()} ${errText}\n`,
        );
      }
    }

    return NextResponse.json({ ok: true, id: record.id });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
