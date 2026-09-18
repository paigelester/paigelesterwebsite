import { describe, expect, test } from "vitest";
import { checkOverrides, justifiedOverrides } from "./overridesGuard.ts";

describe("checkOverrides", () => {
  test("passes a manifest with no overrides block", () => {
    expect(checkOverrides({}, [])).toEqual({ passed: true });
  });

  test("passes an empty overrides block", () => {
    expect(checkOverrides({ overrides: {} }, [])).toEqual({ passed: true });
  });

  test("fails an unjustified override, naming the package", () => {
    const result = checkOverrides({ overrides: { postcss: "8.5.6" } }, []);

    expect(result.passed).toBe(false);
    expect(!result.passed && result.reason).toContain('"postcss"');
  });

  test("passes an override that an ADR justifies", () => {
    expect(
      checkOverrides({ overrides: { postcss: "8.5.6" } }, ["postcss"])
    ).toEqual({ passed: true });
  });

  test("names only the unjustified packages when some are justified", () => {
    const result = checkOverrides(
      { overrides: { postcss: "8.5.6", semver: "7.7.2" } },
      ["postcss"]
    );

    expect(!result.passed && result.reason).toContain('"semver"');
    expect(!result.passed && result.reason).not.toContain('"postcss"');
  });

  test("reads the package name from a versioned or scoped key", () => {
    expect(
      checkOverrides(
        {
          overrides: {
            "@babel/traverse@<7.23.2": "7.23.2",
            "semver@6": "6.3.1"
          }
        },
        ["@babel/traverse", "semver"]
      )
    ).toEqual({ passed: true });
  });

  test("checks overrides nested under a parent package", () => {
    const result = checkOverrides(
      { overrides: { next: { postcss: "8.5.6" } } },
      []
    );

    expect(!result.passed && result.reason).toContain('"postcss"');
    expect(!result.passed && result.reason).not.toContain('"next"');
  });

  test('treats a "." entry as overriding the parent package itself', () => {
    const result = checkOverrides(
      { overrides: { next: { ".": "16.3.5", postcss: "8.5.6" } } },
      ["postcss"]
    );

    expect(!result.passed && result.reason).toContain('"next"');
  });
});

describe("justifiedOverrides", () => {
  test("reads the backticked packages on an Overrides line", () => {
    const adr = [
      "# Pin postcss for a security fix",
      "",
      "Overrides: `postcss`, `@babel/traverse`",
      "",
      "Next.js bundles an old postcss..."
    ].join("\n");

    expect(justifiedOverrides(adr)).toEqual(["postcss", "@babel/traverse"]);
  });

  test("ignores packages mentioned elsewhere in the ADR", () => {
    expect(
      justifiedOverrides(
        "Next.js supports Sass once the `sass` package is installed."
      )
    ).toEqual([]);
  });
});
