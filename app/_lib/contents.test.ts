import { describe, expect, test } from "vitest";
import { activeSection } from "./contents";

describe("activeSection", () => {
  test("is Intro when no sections are on screen", () => {
    expect(activeSection([])).toBe("intro");
  });

  test("is the section on screen when there is one", () => {
    expect(activeSection([{ id: "skills", top: 120 }])).toBe("skills");
  });

  test("is the topmost of several sections on screen", () => {
    expect(
      activeSection([
        { id: "contact", top: 480 },
        { id: "work", top: -300 },
        { id: "skills", top: 90 }
      ])
    ).toBe("work");
  });
});
