import { describe, expect, test } from "vitest";
import { formatDateRange } from "./formatDateRange";

describe("formatDateRange", () => {
  test("shows an ongoing role as running to the present", () => {
    expect(formatDateRange({ start: "2021-03" })).toBe("Mar 2021 – Present");
  });

  test("shows a finished role from its first month to its last", () => {
    expect(formatDateRange({ start: "2019-01", end: "2021-02" })).toBe(
      "Jan 2019 – Feb 2021"
    );
  });

  test("shows a role that started and ended in the same month once", () => {
    expect(formatDateRange({ start: "2020-06", end: "2020-06" })).toBe(
      "Jun 2020"
    );
  });

  test("names every month of the year", () => {
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ] as const;

    expect(
      months.map((month) =>
        formatDateRange({ start: `2020-${month}`, end: `2020-${month}` })
      )
    ).toEqual([
      "Jan 2020",
      "Feb 2020",
      "Mar 2020",
      "Apr 2020",
      "May 2020",
      "Jun 2020",
      "Jul 2020",
      "Aug 2020",
      "Sep 2020",
      "Oct 2020",
      "Nov 2020",
      "Dec 2020"
    ]);
  });
});
