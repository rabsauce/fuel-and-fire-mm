import { chromium, devices } from "playwright";

const url = process.env.URL || "http://localhost:3000";

const checks = [
  devices["iPhone 13"],
  devices["Pixel 7"],
];

async function assertNoHorizontalOverflow(page) {
  const res = await page.evaluate(() => {
    const doc = document.documentElement;
    const sw = doc.scrollWidth;
    const iw = window.innerWidth;
    return { scrollWidth: sw, innerWidth: iw, ok: sw <= iw + 1 };
  });
  if (!res.ok) {
    throw new Error(
      `Horizontal overflow detected: scrollWidth=${res.scrollWidth} > innerWidth=${res.innerWidth}`,
    );
  }
}

async function assertMeta(page) {
  const title = await page.title();
  const desc = await page.locator('meta[name="description"]').getAttribute("content");
  if (!title || title.length < 10) throw new Error("Missing/short <title>");
  if (!desc || desc.length < 40) throw new Error("Missing/short meta description");
}

async function assertMobileMenu(page) {
  const openBtn = page.getByRole("button", { name: "Open menu" });
  await openBtn.click();
  const dialog = page.getByRole("dialog", { name: "Mobile menu" });
  await dialog.waitFor({ state: "visible", timeout: 3000 });

  // Tap Contact link and verify we navigated to the section
  await dialog.getByRole("link", { name: "Contact" }).click();
  await page.waitForFunction(() => window.location.hash === "#contact", null, { timeout: 3000 });
  await page.waitForTimeout(350);

  const inView = await page.evaluate(() => {
    const el = document.getElementById("contact");
    if (!el) return { ok: false, reason: "Missing #contact section" };
    const r = el.getBoundingClientRect();
    // Top should be near the top of the viewport (accounting for fixed header)
    const ok = r.top >= 0 && r.top <= 200;
    return { ok, top: r.top, height: r.height };
  });
  if (!inView.ok) {
    throw new Error(`Anchor navigation didn't land #contact near top (top=${inView.top})`);
  }
}

async function main() {
  const browser = await chromium.launch();

  for (const device of checks) {
    const context = await browser.newContext(device);
    const page = await context.newPage();

    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    await page.goto(url, { waitUntil: "networkidle" });

    await assertMeta(page);
    await assertNoHorizontalOverflow(page);
    await assertMobileMenu(page);

    console.log(`[OK] ${device.name}`);
    if (consoleErrors.length) {
      console.log(`  Console errors:`, consoleErrors);
    }

    await context.close();
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

