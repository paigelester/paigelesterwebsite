// The single source of CV content. Plain data only: presentation lives in the
// components that render it.

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

/** A calendar month, written as year and month, e.g. "2021-03". */
export type YearMonth = `${number}-${Month}`;

/** The months a role ran for. A role without an end is ongoing. */
export type DateRange = {
  start: YearMonth;
  end?: YearMonth;
};

/** The short introductory summary at the top of the CV. */
export type PersonalStatement = {
  paragraphs: readonly string[];
};

/** One of Paige's past or current roles. */
export type Role = {
  title: string;
  organisation: string;
  dates: DateRange;
  description: string;
};

/** Paige's past and current roles, most recent first. */
export type WorkExperience = {
  roles: readonly Role[];
};

/** Paige's CV, composed of one type per CV Section. */
export type CV = {
  personalStatement: PersonalStatement;
  workExperience: WorkExperience;
};

// Placeholder content until launch.
export const cv: CV = {
  personalStatement: {
    paragraphs: [
      "Software developer who enjoys building clear, reliable and accessible products, from the first sketch through to production.",
      "Looking for a role on a friendly team where I can keep learning, share what I know and ship work that matters to the people who use it."
    ]
  },
  workExperience: {
    roles: [
      {
        title: "Senior Software Developer",
        organisation: "Example Studios",
        dates: { start: "2021-03" },
        description:
          "Lead development of customer-facing web applications, mentor developers and shape the team's testing practice."
      },
      {
        title: "Software Developer",
        organisation: "Placeholder Ltd",
        dates: { start: "2019-01", end: "2021-02" },
        description:
          "Built and maintained internal tools and public websites across the full stack."
      },
      {
        title: "Development Intern",
        organisation: "Sample Agency",
        dates: { start: "2018-07", end: "2018-07" },
        description:
          "Joined the web team for a summer month, fixing bugs and improving accessibility."
      }
    ]
  }
};
