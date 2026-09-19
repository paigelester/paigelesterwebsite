import type { YearMonth } from "@/content/cv";

/**
 * The whole years from the start of a month to today, e.g. 12 from Aug 2014
 * to Sep 2026. A year counts from the first day of its anniversary month.
 */
export function yearsSince(start: YearMonth, today: Date): number {
  const [year, month] = start.split("-").map(Number);
  const months =
    (today.getFullYear() - year) * 12 + (today.getMonth() + 1 - month);
  return Math.floor(months / 12);
}

/** The text with each "{years}" replaced by the whole years since the start. */
export function fillYears(text: string, start: YearMonth, today: Date): string {
  return text.replaceAll("{years}", String(yearsSince(start, today)));
}
