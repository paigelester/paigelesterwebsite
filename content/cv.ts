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

/** The months something ran for. A range without an end is ongoing. */
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

/** A named group of related skills, e.g. "Languages". */
export type SkillGroup = {
  name: string;
  skills: readonly string[];
};

/** Paige's abilities and technologies, grouped by kind. */
export type Skills = {
  groups: readonly SkillGroup[];
};

/** A qualification Paige gained and where it was gained. */
export type Qualification = {
  name: string;
  institution: string;
  dates: DateRange;
};

/** Paige's qualifications, most recent first. */
export type Education = {
  qualifications: readonly Qualification[];
};

/** An outbound link to one of Paige's profiles elsewhere, e.g. LinkedIn. */
export type Link = {
  label: string;
  url: `https://${string}`;
};

/** Paige's profiles elsewhere. */
export type Links = {
  profiles: readonly Link[];
};

/** Paige's CV, composed of one type per CV Section. */
export type CV = {
  personalStatement: PersonalStatement;
  workExperience: WorkExperience;
  skills: Skills;
  education: Education;
  links: Links;
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
  },
  skills: {
    groups: [
      {
        name: "Languages",
        skills: ["TypeScript", "JavaScript", "HTML", "CSS", "C#"]
      },
      {
        name: "Frameworks",
        skills: ["React", "Next.js", "Node.js", "Unity"]
      },
      {
        name: "Tooling",
        skills: [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Jira",
          "Visual Studio Code"
        ]
      }
    ]
  },
  education: {
    qualifications: [
      {
        name: "BSc (Hons) Computer Science",
        institution: "Example University",
        dates: { start: "2015-09", end: "2018-06" }
      },
      {
        name: "A Levels: Mathematics, Computing, Physics",
        institution: "Sample Sixth Form College",
        dates: { start: "2013-09", end: "2015-06" }
      }
    ]
  },
  links: {
    profiles: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/example" },
      { label: "GitHub", url: "https://github.com/example" }
    ]
  }
};
