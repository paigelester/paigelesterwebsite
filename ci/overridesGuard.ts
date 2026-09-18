/**
 * An npm `overrides` block in package.json forces a version of a dependency
 * the dependency tree didn't ask for. Each overridden package must be named
 * by an ADR, so that every override has a recorded reason and is revisited
 * rather than left to accumulate.
 *
 * An ADR justifies an override with a line that starts with `Overrides:`,
 * followed by the overridden package names in backticks:
 *
 *     Overrides: `postcss`, `@babel/traverse`
 */

export type Manifest = { overrides?: unknown };

export type CheckResult = { passed: true } | { passed: false; reason: string };

const justificationLine = /^Overrides:(.*)$/gm;
const backticked = /`([^`]+)`/g;

/** The package names an ADR justifies overriding, from its `Overrides:` lines. */
export function justifiedOverrides(adr: string): string[] {
  return [...adr.matchAll(justificationLine)].flatMap(([, names]) =>
    [...names.matchAll(backticked)].map(([, name]) => packageName(name.trim()))
  );
}

/**
 * Passes when the manifest has no overrides, or when every overridden
 * package is among the justified ones.
 */
export function checkOverrides(
  manifest: Manifest,
  justified: Iterable<string>
): CheckResult {
  const allowed = new Set(justified);
  const unjustified = [...new Set(overriddenPackages(manifest.overrides))]
    .filter((name) => !allowed.has(name))
    .sort();

  if (unjustified.length === 0) {
    return { passed: true };
  }
  return {
    passed: false,
    reason:
      `package.json overrides ${unjustified.map((name) => `"${name}"`).join(", ")} ` +
      "without an ADR that justifies it. Record why in docs/adr/ with a line " +
      "such as: Overrides: `" +
      unjustified[0] +
      "`"
  };
}

/**
 * The packages an overrides block pins. A string value pins its key; an
 * object value scopes further overrides to its key's dependency tree, and
 * its "." entry pins the key itself.
 */
function overriddenPackages(overrides: unknown): string[] {
  if (typeof overrides !== "object" || overrides === null) {
    return [];
  }
  return Object.entries(overrides).flatMap(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      const scoped = Object.fromEntries(
        Object.entries(value).filter(([scopedKey]) => scopedKey !== ".")
      );
      const self = "." in value ? [packageName(key)] : [];
      return [...self, ...overriddenPackages(scoped)];
    }
    return [packageName(key)];
  });
}

/** Drops a version range from an override key, e.g. "@scope/pkg@^1" to "@scope/pkg". */
function packageName(key: string): string {
  const versionAt = key.indexOf("@", 1);
  return versionAt === -1 ? key : key.slice(0, versionAt);
}
