import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Unit tests only; end-to-end specs belong to Playwright.
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", "legacy/**", "out/**", ".next/**"]
  }
});
