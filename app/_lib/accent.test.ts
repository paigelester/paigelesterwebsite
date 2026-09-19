import { expect, test } from "vitest";
import { nextAccent } from "./accent";

test("goes through the accents in order", () => {
  expect(nextAccent("rose")).toBe("teal");
  expect(nextAccent("teal")).toBe("amber");
  expect(nextAccent("amber")).toBe("lavender");
});

test("wraps round to rose after the last accent", () => {
  expect(nextAccent("lavender")).toBe("rose");
});

test("starts over at rose from an unknown accent", () => {
  expect(nextAccent(undefined)).toBe("rose");
  expect(nextAccent("crimson")).toBe("rose");
});
