import type { DateRange, YearMonth } from "@/content/cv";

const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
] as const;

function formatYearMonth(yearMonth: YearMonth): string {
  const [year, month] = yearMonth.split("-");
  return `${monthAbbreviations[Number(month) - 1]} ${year}`;
}

/**
 * A human-readable date range, e.g. "Mar 2021 – Present" for an ongoing role,
 * "Jan 2019 – Feb 2021" for a finished one, or "Jun 2020" for a single month.
 */
export function formatDateRange({ start, end }: DateRange): string {
  if (end === start) {
    return formatYearMonth(start);
  }
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}
