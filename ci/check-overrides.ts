/**
 * Fails when package.json has an `overrides` entry that no ADR justifies.
 *
 * Usage: npm run check:overrides
 *
 * To justify an override, add a line to an ADR in docs/adr/ that starts with
 * `Overrides:` and names each overridden package in backticks:
 *
 *     Overrides: `postcss`
 *
 * See ci/overridesGuard.ts for how nested and versioned override keys are read.
 */

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { checkOverrides, justifiedOverrides } from "./overridesGuard.ts";

const root = join(import.meta.dirname, "..");
const adrDirectory = join(root, "docs", "adr");

const manifest = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const adrFiles = (await readdir(adrDirectory)).filter((file) =>
  file.endsWith(".md")
);
const adrs = await Promise.all(
  adrFiles.map((file) => readFile(join(adrDirectory, file), "utf8"))
);

const result = checkOverrides(manifest, adrs.flatMap(justifiedOverrides));

if (result.passed) {
  console.log("Every package.json override is justified by an ADR.");
} else {
  console.error(result.reason);
  process.exitCode = 1;
}
