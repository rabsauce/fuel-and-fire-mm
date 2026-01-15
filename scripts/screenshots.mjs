import { chromium } from "playwright";

const url = process.env.URL || "http://localhost:3000";
const outDir = "playwright-output";

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "desktop", width: 1440, height: 900 },
];

const sections = [
  { id: "top", name: "top" },
  { id: "makes", name: "makes" },
  { id: "services", name: "services" },
  { id: "about", name: "about" },
  { id: "contact", name: "contact" },
  { id: "faq", name: "faq" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Warmup
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("networkidle");

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");
    await sleep(200);

    await page.locator("body").scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(150);
    await page.screenshot({ path: `${outDir}/home-${vp.name}.png`, fullPage: true });

    // Targeted section screenshots (more readable than full-page for review)
    for (const s of sections) {
      const section = page.locator(`#${s.id}`);
      // If section isn't present for some reason, skip instead of failing.
      if ((await section.count()) === 0) continue;
      await section.scrollIntoViewIfNeeded();
      await sleep(200);
      await page.screenshot({ path: `${outDir}/home-${vp.name}-${s.name}.png`, fullPage: false });
    }
  }

  await browser.close();
  console.log(`Saved screenshots to ./${outDir}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

