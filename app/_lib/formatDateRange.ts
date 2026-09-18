import type { DateRange, Year, YearMonth } from "@/content/cv";

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

function formatDate(date: YearMonth | Year): string {
  const [year, month] = date.split("-");
  return month ? `${monthAbbreviations[Number(month) - 1]} ${year}` : year;
}

/**
 * A human-readable date range, e.g. "Mar 2021 – Present" for an ongoing role,
 * "Jan 2019 – Feb 2021" for a finished one, "Jun 2020" for a single month, or
 * "2012 – 2014" for a range given in years only.
 */
export function formatDateRange({ start, end }: DateRange): string {
  if (end === start) {
    return formatDate(start);
  }
  return `${formatDate(start)} – ${end ? formatDate(end) : "Present"}`;
}
