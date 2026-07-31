/**
 * Go-live UI/UX + user-flow + bug QA against local production server.
 * Run: node scripts/qa-browser.mjs
 */
import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const BASE = process.env.QA_BASE || "http://127.0.0.1:3000";
const OUT = "/opt/cursor/artifacts/screenshots";
const results = [];

function pass(name, detail = "") {
  results.push({ ok: true, name, detail });
  console.log(`PASS  ${name}${detail ? " — " + detail : ""}`);
}
function fail(name, detail = "") {
  results.push({ ok: false, name, detail });
  console.error(`FAIL  ${name}${detail ? " — " + detail : ""}`);
}

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return file;
}

async function textOf(page, sel) {
  return page.$eval(sel, (el) => (el.textContent || "").trim());
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: "/usr/local/bin/google-chrome",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=390,844"],
    defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true },
  });

  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(15000);

    // ---------- HOME / redirect ----------
    {
      const res = await page.goto(BASE, { waitUntil: "networkidle2" });
      if (!res || res.status() >= 400) fail("Home status", String(res?.status()));
      else pass("Home loads", `status ${res.status()} → ${page.url()}`);
      if (!page.url().includes("/ja")) fail("Default locale redirect", page.url());
      else pass("Redirects to /ja");
      await shot(page, "01-home-ja-mobile");
    }

    // ---------- Header brand not truncated ----------
    {
      const brand = await textOf(page, "header a[aria-label='YOJO Genesis']");
      if (brand.includes("YOJO Genesis") && !brand.includes("—") && !brand.endsWith("Gen")) {
        pass("Brand not truncated", brand.replace(/\s+/g, " "));
      } else {
        fail("Brand truncated", brand);
      }
    }

    // ---------- Assessment CTA from header ----------
    {
      const cta = await page.$("header a[href='/ja/intake']");
      if (!cta) fail("Header assessment CTA missing");
      else {
        const box = await cta.boundingBox();
        if (!box || box.height < 36) fail("Header CTA too small", JSON.stringify(box));
        else pass("Header CTA size", `${Math.round(box.width)}x${Math.round(box.height)}`);
        await Promise.all([
          page.waitForNavigation({ waitUntil: "networkidle2" }),
          cta.click(),
        ]);
        if (page.url().includes("/ja/intake")) pass("Header CTA navigates to intake");
        else fail("Header CTA nav", page.url());
      }
    }

    await shot(page, "02-intake-ja-mobile");

    // ---------- Continue without selection shows hint ----------
    {
      // Should be on step 0. Click Continue without selecting.
      const buttons = await page.$$("button");
      let continueBtn = null;
      for (const b of buttons) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "次へ") {
          continueBtn = b;
          break;
        }
      }
      if (!continueBtn) fail("Continue button not found on step 0");
      else {
        await continueBtn.click();
        await page.waitForSelector('[role="alert"]', { timeout: 3000 });
        const alert = await textOf(page, '[role="alert"]');
        if (alert.includes("状況") || alert.includes("選んで")) {
          pass("Continue without selection shows hint", alert);
        } else {
          fail("Unexpected hint", alert);
        }
      }
      await shot(page, "03-intake-validation-hint");
    }

    // ---------- Select situation + continue ----------
    {
      const chips = await page.$$("button[aria-pressed]");
      if (chips.length < 3) fail("Situation chips missing", String(chips.length));
      else {
        await chips[0].click();
        const pressed = await page.evaluate(
          (el) => el.getAttribute("aria-pressed"),
          chips[0],
        );
        if (pressed === "true") pass("Situation chip toggles");
        else fail("Situation chip not pressed");
      }
      // Click 次へ
      const buttons = await page.$$("button");
      for (const b of buttons) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "次へ") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector("textarea", { timeout: 3000 });
      pass("Advances to Brief step");
      await shot(page, "04-intake-brief");
    }

    // ---------- Brief validation ----------
    {
      const buttons = await page.$$("button");
      for (const b of buttons) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "次へ") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector('[role="alert"]', { timeout: 3000 });
      const alert = await textOf(page, '[role="alert"]');
      if (alert.includes("20")) pass("Short brief shows hint", alert);
      else fail("Brief hint", alert);

      await page.type(
        "textarea",
        "第4ラインの外観検査をクラウド接続なしで自動化したい。二人体制の目視でピーク時に遅延。",
      );
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "次へ") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector('input[type="email"]', { timeout: 3000 });
      pass("Advances to Contact step");
      await shot(page, "05-intake-contact");
    }

    // ---------- Submit flow ----------
    {
      const inputs = await page.$$("input[type='text'], input:not([type]), input[type='email']");
      // name, company, email fields
      const allInputs = await page.$$("input");
      const textInputs = [];
      for (const inp of allInputs) {
        const type = await page.evaluate((el) => el.type, inp);
        if (type === "text" || type === "email") textInputs.push({ inp, type });
      }
      // Fill in order: name, company, email
      const nameInp = textInputs.find((i) => i.type === "text");
      const companyInp = textInputs.filter((i) => i.type === "text")[1];
      const emailInp = textInputs.find((i) => i.type === "email");
      if (!nameInp || !companyInp || !emailInp) {
        fail("Contact fields missing", JSON.stringify(textInputs.map((i) => i.type)));
      } else {
        await nameInp.inp.type("QA Tester");
        await companyInp.inp.type("YOJO Test Co");
        await emailInp.inp.type("qa@example.com");
        pass("Contact fields filled");
      }

      // Click submit without waiting for disabled - should work
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t && t.includes("送信")) {
          await b.click();
          break;
        }
      }
      await page.waitForFunction(
        () => document.body.innerText.includes("受け付けました"),
        { timeout: 8000 },
      );
      pass("Intake submit success");
      await shot(page, "06-intake-success");
    }

    // ---------- EN locale + home CTAs ----------
    {
      await page.goto(`${BASE}/en`, { waitUntil: "networkidle2" });
      await shot(page, "07-home-en-mobile");
      const heroCta = await page.$("a[href='/en/intake']");
      if (!heroCta) fail("EN hero/header intake link missing");
      else {
        await Promise.all([
          page.waitForNavigation({ waitUntil: "networkidle2" }),
          heroCta.click(),
        ]);
        if (page.url().includes("/en/intake")) pass("EN assessment link works");
        else fail("EN assessment", page.url());
      }
      await shot(page, "08-intake-en-mobile");

      // Brand check EN
      const brand = await textOf(page, "header a[aria-label='YOJO Genesis']");
      if (brand.includes("YOJO Genesis")) pass("EN brand full", brand.replace(/\s+/g, " "));
      else fail("EN brand", brand);

      // On intake, header assessment CTA should be hidden (avoid dead same-page click)
      const headerIntake = await page.$$("header a[href='/en/intake']");
      // Menu button may still list it when open; closed header should not show primary CTA
      // There might be 0 in the sticky bar (we hide when onIntake)
      if (headerIntake.length === 0) pass("Assessment CTA hidden on intake page");
      else {
        // Could still be in closed mobile menu DOM - check visibility
        const visible = await page.evaluate(() => {
          return [...document.querySelectorAll("header a[href='/en/intake']")].some(
            (a) => {
              const r = a.getBoundingClientRect();
              return r.width > 0 && r.height > 0;
            },
          );
        });
        if (!visible) pass("Assessment CTA not visible on intake");
        else fail("Assessment still visible on intake", String(headerIntake.length));
      }
    }

    // ---------- EN intake Continue hint ----------
    {
      await page.goto(`${BASE}/en/intake`, { waitUntil: "networkidle2" });
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "Continue") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector('[role="alert"]', { timeout: 3000 });
      const alert = await textOf(page, '[role="alert"]');
      if (/select/i.test(alert)) pass("EN validation hint", alert);
      else fail("EN hint", alert);
    }

    // ---------- Company page ----------
    {
      const res = await page.goto(`${BASE}/ja/company`, { waitUntil: "networkidle2" });
      if (!res || res.status() >= 400) fail("Company status", String(res?.status()));
      else pass("Company page loads");
      const hasTable = await page.$("table");
      if (hasTable) pass("Company facts table present");
      else fail("Company table missing");
      await shot(page, "09-company-ja-mobile");
    }

    // ---------- Section anchors ----------
    {
      await page.goto(`${BASE}/ja/#capabilities`, { waitUntil: "networkidle2" });
      await page.waitForSelector("#capabilities");
      const top = await page.$eval("#capabilities", (el) => el.getBoundingClientRect().top);
      // Should be near viewport (sticky header offset)
      if (top < 900) pass("Capabilities anchor scrolls", `top=${Math.round(top)}`);
      else fail("Capabilities not in view", `top=${top}`);
      await shot(page, "10-capabilities-anchor");
    }

    // ---------- Stub redirects ----------
    {
      for (const route of ["services", "cases", "security"]) {
        const res = await page.goto(`${BASE}/ja/${route}`, {
          waitUntil: "networkidle2",
        });
        const url = page.url();
        if (res && res.status() < 400 && url.includes("/ja")) {
          pass(`Stub /${route} redirects`, url.replace(BASE, ""));
        } else {
          fail(`Stub /${route}`, `${res?.status()} ${url}`);
        }
      }
    }

    // ---------- Desktop viewport ----------
    {
      await page.setViewport({ width: 1280, height: 800, isMobile: false, hasTouch: false });
      await page.goto(`${BASE}/ja`, { waitUntil: "networkidle2" });
      const desktopNav = await page.$$("header nav[aria-label='Primary'] a");
      if (desktopNav.length >= 4) pass("Desktop nav links", String(desktopNav.length));
      else fail("Desktop nav", String(desktopNav.length));
      await shot(page, "11-home-ja-desktop");

      await page.goto(`${BASE}/en/intake`, { waitUntil: "networkidle2" });
      await shot(page, "12-intake-en-desktop");

      // Full EN flow quick
      const chip = await page.$("button[aria-pressed]");
      await chip.click();
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "Continue") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector("textarea");
      await page.type(
        "textarea",
        "Automate visual inspection on Line 4 without cloud connectivity for peak delays.",
      );
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t === "Continue") {
          await b.click();
          break;
        }
      }
      await page.waitForSelector('input[type="email"]');
      const textInputs = [];
      for (const inp of await page.$$("input")) {
        const type = await page.evaluate((el) => el.type, inp);
        if (type === "text" || type === "email") textInputs.push({ inp, type });
      }
      await textInputs.filter((i) => i.type === "text")[0].inp.type("Alex QA");
      await textInputs.filter((i) => i.type === "text")[1].inp.type("Acme JP");
      await textInputs.find((i) => i.type === "email").inp.type("alex@acme.test");
      for (const b of await page.$$("button")) {
        const t = await page.evaluate((el) => el.textContent?.trim(), b);
        if (t && t.includes("Send")) {
          await b.click();
          break;
        }
      }
      await page.waitForFunction(
        () => document.body.innerText.includes("Received"),
        { timeout: 8000 },
      );
      pass("EN desktop intake E2E");
      await shot(page, "13-intake-en-success-desktop");
    }

    // ---------- API direct ----------
    {
      const res = await fetch(`${BASE}/api/intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: "en",
          situations: ["other"],
          brief: "API smoke test brief with enough characters here.",
          name: "API",
          company: "Test",
          email: "api@test.com",
          contact: "Email",
        }),
      });
      const json = await res.json();
      if (res.ok && json.ok) pass("API intake POST", json.id);
      else fail("API intake", JSON.stringify(json));

      const bad = await fetch(`${BASE}/api/intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "bad" }),
      });
      if (bad.status === 400) pass("API rejects invalid payload");
      else fail("API validation", String(bad.status));
    }

    // ---------- Mobile menu ----------
    {
      await page.setViewport({
        width: 390,
        height: 844,
        isMobile: true,
        hasTouch: true,
      });
      await page.goto(`${BASE}/ja`, { waitUntil: "networkidle2" });
      const menuBtn = await page.$('header button[aria-label="Open menu"]');
      if (!menuBtn) fail("Menu button missing");
      else {
        await menuBtn.click();
        await page.waitForSelector("#main-content"); // ensure still there
        const menuCta = await page.$('div[role="dialog"] a[href="/ja/intake"]');
        if (menuCta) {
          pass("Mobile menu has assessment CTA");
          await shot(page, "14-mobile-menu-open");
          await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            menuCta.click(),
          ]);
          if (page.url().includes("/intake")) pass("Mobile menu CTA navigates");
          else fail("Mobile menu nav", page.url());
        } else {
          fail("Mobile menu assessment CTA missing");
        }
      }
    }

    // ---------- Clickability: no overlay blocking hero CTA ----------
    {
      await page.goto(`${BASE}/ja`, { waitUntil: "networkidle2" });
      const blocked = await page.evaluate(() => {
        const link = document.querySelector('a[href="/ja/intake"]');
        if (!link) return "no-link";
        const r = link.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const top = document.elementFromPoint(cx, cy);
        if (!top) return "no-top";
        const ok = link === top || link.contains(top) || top.closest('a[href="/ja/intake"]');
        return ok ? null : top.tagName + "." + top.className;
      });
      if (!blocked) pass("Hero/header intake not covered by overlay");
      else fail("Intake CTA covered", blocked);
    }
  } finally {
    await browser.close();
  }

  const failed = results.filter((r) => !r.ok);
  const summary = {
    total: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    failures: failed,
  };
  fs.writeFileSync("/tmp/qa/results.json", JSON.stringify({ summary, results }, null, 2));
  console.log("\n==== SUMMARY ====");
  console.log(JSON.stringify(summary, null, 2));
  if (failed.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
