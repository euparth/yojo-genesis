import { mkdir, appendFile, readFile, writeFile } from "fs/promises";
import path from "path";

/** Local: ./data — Vercel serverless: /tmp (ephemeral but writable). */
export function submissionsDir() {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join("/tmp", "yojo-genesis-data");
  }
  return path.join(process.cwd(), "data");
}

export async function appendJsonRecord(
  fileName: string,
  record: Record<string, unknown>,
): Promise<void> {
  const dataDir = submissionsDir();
  await mkdir(dataDir, { recursive: true });
  const filePath = path.join(dataDir, fileName);

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
}

export async function appendLogLine(
  fileName: string,
  line: string,
): Promise<void> {
  try {
    const dataDir = submissionsDir();
    await mkdir(dataDir, { recursive: true });
    await appendFile(path.join(dataDir, fileName), line);
  } catch {
    // best-effort logging
  }
}
