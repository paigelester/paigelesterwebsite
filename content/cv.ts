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

/** A calendar year on its own, e.g. "2012". */
export type Year = `${number}`;

/**
 * The months, or years, something ran for. A range without an end is ongoing.
 * Both ends are given to the same precision.
 */
export type DateRange =
  { start: YearMonth; end?: YearMonth } | { start: Year; end?: Year };

/** The short introductory summary at the top of the CV. */
export type Intro = {
  /** When Paige started working in software. */
  careerStart: YearMonth;
  /** Each "{years}" is shown as the whole years since `careerStart`. */
  paragraphs: readonly string[];
};

/** One of Paige's past or current roles. */
export type Role = {
  title: string;
  organisation: string;
  dates: DateRange;
  /** What Paige did and achieved in the role, one bullet point each. */
  highlights: readonly string[];
};

/** Paige's past and current roles, most recent first. */
export type Work = {
  roles: readonly Role[];
};

/** A named group of related skills, e.g. "Leadership". */
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
  /** Left out when the CV names only the school. */
  name?: string;
  institution: string;
  dates: DateRange;
};

/** Paige's qualifications, most recent first. */
export type Education = {
  qualifications: readonly Qualification[];
};

/**
 * A way to reach Paige elsewhere: an outbound link to one of her profiles,
 * e.g. LinkedIn, or her email address.
 */
export type Link = {
  label: string;
  url: `https://${string}` | `mailto:${string}`;
};

/** Paige's profiles elsewhere and her email address. */
export type Links = {
  profiles: readonly Link[];
};

/** Paige's CV, composed of one type per CV Section. */
export type CV = {
  intro: Intro;
  work: Work;
  skills: Skills;
  education: Education;
  links: Links;
};

// Education is placeholder content until launch.
export const cv: CV = {
  intro: {
    careerStart: "2014-08",
    paragraphs: [
      "Engineering Manager with {years} years in software, spanning regulated FinTech and scientific instruments. I have line-managed a team of five to seven, having come to management through the code as a Senior and then Principal Engineer. That background keeps me close enough to the technical detail to make architectural calls and guide people through real work. My focus is on developing engineers and resolving the problems that slow delivery down, even when they sit outside my own team."
    ]
  },
  work: {
    roles: [
      {
        title: "Engineering Manager",
        organisation: "Waters Corporation",
        dates: { start: "2024-11" },
        highlights: [
          "Line manager to four developers and a tester, rising to five developers and two testers with contractors, on the team I previously worked in as Senior and Principal Engineer",
          "Progressed two engineers from mid-level to senior through structured mentoring, handing over technical analysis and stepping back to let them reach their own conclusions",
          "Driving a cross-department pilot, without line authority, to remove a documentation and translation bottleneck adding three to six weeks to the end of every release",
          "Won buy-in from that department by supplying the technical capability they lacked rather than imposing process, moving them toward docs-as-code, continuous translation and AI style-guide-driven pre-review in place of sequential manual gates",
          "Managed delivery of three Waters Connect applications against three separate release schedules with a single team, where most teams in the business carry one; shipped 8 releases",
          "Partnered with the Product Owner on a multi-week customer feedback programme for a major release, which rebuilt confidence among users who had long felt unheard and was described at customer conferences as the biggest improvement to the application in years"
        ]
      },
      {
        title: "Principal Software Engineer",
        organisation: "Waters Corporation",
        dates: { start: "2024-03", end: "2024-11" },
        highlights: [
          "Promoted to Principal on the same team and applications, with a remit extending across departments",
          "Led the first release of the team's third application from scratch",
          "Drove genuine adoption of the UX department's shared UI component library, which was mandated across Waters Connect but barely used in practice, and worked directly with that team to improve the integration path",
          "Extended the shared-package programme begun as Senior Engineer into the wider estate",
          "Mentored less experienced developers through pairing and mob programming, widening the group of engineers confident to work across all three applications"
        ]
      },
      {
        title: "Senior Software Engineer",
        organisation: "Waters Corporation",
        dates: { start: "2023-01", end: "2024-03" },
        highlights: [
          "One of four developers in a seven-person team owning three Waters Connect applications in .NET and Angular, where most teams in the business own one and some share a single application between several teams",
          "Absorbed the team's growth from two applications to three with no additional headcount by replacing cloned code with shared packages, the first genuine code sharing across the Waters Connect estate",
          "Diagnosed the underlying maintenance problem of code copied between applications and teams, which left quality varying with the age of each copy and engineers routing around areas they could not follow",
          "Drove adoption of the shared packages beyond the immediate team to at least four others",
          "Rebuilt the processing workflows behind the platform’s algorithms and set the clean-code and maintenance standards the team works to",
          "Cut the cost of context switching between applications and made release readiness more predictable; shipped two releases"
        ]
      },
      {
        title: "Senior Developer",
        organisation: "Caspian",
        dates: { start: "2022-01", end: "2023-01" },
        highlights: [
          "Squad lead of an agile development team containing Developers, DevOps, Testers and Data Scientists",
          "Architecting software for Tier 1 banks in AML investigations in AWS using Docker, Kubernetes, AWS Lambda, s3 buckets, SNS/SQS",
          "Setting CI Bitbucket pipelines to ensure code quality with automated testing and SonarCloud and checking for potential vulnerabilities with Snyk",
          "Developed microservice communication with message broker RabbitMQ using MassTransit in .NET and pika in Python",
          "Setting up automated testing pipelines using Selenium, Cucumber, Wdio and Jira with Xray"
        ]
      },
      {
        title: "Developer",
        organisation: "Caspian",
        dates: { start: "2016-12", end: "2022-01" },
        highlights: [
          "Machine Learning engineering translating Data Science research and experimentation into unit tested production quality software in Python including packages such as SkLearn, Tensorflow and Spacy",
          "Developed a classifier training pipeline using Luigi supporting SkLearn and Tensorflow models including stages for labelling data, hold out, consensus, preprocessing, training, predicting and model performance reporting",
          "Developed customer facing tutorials for bank interface translated into multiple languages and compatible with bidirectionality",
          "Developed client facing demos to secure new business using React and Typescript in GCP’s App Engine"
        ]
      },
      {
        title: "Simulation Developer",
        organisation: "Caspian",
        dates: { start: "2014-12", end: "2016-12" },
        highlights: [
          "Mentored junior simulation developers",
          "Developed simulations for training bank staff in AML investigations",
          "Developed simulations for Health and Social Care"
        ]
      },
      {
        title: "Quality Assurance Analyst",
        organisation: "Caspian",
        dates: { start: "2014-08", end: "2014-12" },
        highlights: [
          "Manual testing simulations",
          "Bug reporting in Jira",
          "Simulation developer training"
        ]
      }
    ]
  },
  skills: {
    groups: [
      {
        name: "Languages & frameworks",
        skills: [
          "C#/.NET/.NET Core",
          "Angular",
          "TypeScript/JavaScript",
          "React",
          "Python",
          "SQL/NoSQL",
          "HTML5/CSS3"
        ]
      },
      {
        name: "Cloud & delivery",
        skills: [
          "AWS/Lambda/S3/SNS/SQS",
          "Docker/Kubernetes",
          "CI pipelines",
          "Automated testing (Selenium, Cucumber, Wdio)",
          "SonarCloud",
          "Snyk"
        ]
      },
      {
        name: "Tooling",
        skills: ["GitHub", "Bitbucket", "Jira", "Confluence", "Docs-as-code"]
      },
      {
        name: "Leadership",
        skills: [
          "Line management",
          "Mentoring and progression",
          "Scrum",
          "Cross-team delivery",
          "Release management"
        ]
      }
    ]
  },
  education: {
    qualifications: [
      {
        institution: "St Joseph’s Catholic Academy",
        dates: { start: "2012", end: "2014" }
      },
      {
        institution: "Hebburn Comprehensive School",
        dates: { start: "2007", end: "2012" }
      }
    ]
  },
  links: {
    profiles: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/paige-lester-267b979a"
      },
      { label: "GitHub", url: "https://github.com/paigelester" },
      // The address itself, so it can still be read on a printed CV.
      { label: "paigelester7@gmail.com", url: "mailto:paigelester7@gmail.com" }
    ]
  }
};
