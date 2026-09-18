/**
 * Prints the built CV page to out/cv.pdf, so the download is always the page
 * itself. Runs after `next build` as part of `npm run build`.
 *
 * Usage: npm run build (or npm run build:pdf after a build)
 *
 * The static export is served to the browser by intercepting requests for a
 * made-up origin and answering them from out/, so no web server is started.
 */

import { access } from "node:fs/promises";
import { join, relative, resolve, sep } from "node:path";
import { chromium } from "playwright";

const outDirectory = resolve(import.meta.dirname, "..", "out");
const pdfPath = join(outDirectory, "cv.pdf");
const siteOrigin = "http://cv.local";

/** The file in out/ that answers a request path, or null if it would leave out/. */
function exportedFile(pathname: string): string | null {
  const path = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
  const file = resolve(outDirectory, `.${decodeURIComponent(path)}`);
  const inside = relative(outDirectory, file);
  return inside.startsWith(`..${sep}`) || inside === ".." ? null : file;
}

async function exists(file: string): Promise<boolean> {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();

  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    const file = url.origin === siteOrigin ? exportedFile(url.pathname) : null;
    // The page must print from the export alone; anything else fails the print.
    if (file === null || !(await exists(file))) {
      await route.abort();
      return;
    }
    await route.fulfill({ path: file });
  });

  const failed: string[] = [];
  page.on("requestfailed", (request) => failed.push(request.url()));

  await page.goto(`${siteOrigin}/`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  if (failed.length > 0) {
    throw new Error(`The CV page failed to load:\n${failed.join("\n")}`);
  }

  // Page size and margins come from the @page rule in the print styles.
  await page.pdf({ path: pdfPath, preferCSSPageSize: true });
  console.log(`Printed the CV page to ${relative(process.cwd(), pdfPath)}`);
} finally {
  await browser.close();
}
