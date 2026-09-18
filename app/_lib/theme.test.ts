import { describe, expect, test } from "vitest";
import { decideTheme } from "./theme";

describe("decideTheme", () => {
  test("is dark when nothing is saved", () => {
    expect(decideTheme(null)).toBe("dark");
  });

  test("is dark when dark is saved", () => {
    expect(decideTheme("dark")).toBe("dark");
  });

  test("is light when light is saved", () => {
    expect(decideTheme("light")).toBe("light");
  });

  test("is dark when the saved value is not a theme", () => {
    expect(decideTheme("Light")).toBe("dark");
  });
});
