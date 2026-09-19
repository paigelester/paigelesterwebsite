import { describe, expect, test } from "vitest";
import { fillYears, yearsSince } from "./yearsSince";

describe("yearsSince", () => {
  test("counts only whole years", () => {
    expect(yearsSince("2014-08", new Date(2026, 8, 19))).toBe(12);
  });

  test("does not count a year until its anniversary month", () => {
    expect(yearsSince("2014-08", new Date(2027, 6, 31))).toBe(12);
  });

  test("counts the year from the first day of the anniversary month", () => {
    expect(yearsSince("2014-08", new Date(2027, 7, 1))).toBe(13);
  });
});

describe("fillYears", () => {
  test("replaces the placeholder with the number of whole years", () => {
    expect(
      fillYears("{years} years in software", "2014-08", new Date(2026, 8, 19))
    ).toBe("12 years in software");
  });

  test("leaves text without the placeholder unchanged", () => {
    expect(fillYears("No count here", "2014-08", new Date(2026, 8, 19))).toBe(
      "No count here"
    );
  });
});
