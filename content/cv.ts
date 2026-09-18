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
  /** What Paige did and achieved in the role, one bullet point each. */
  highlights: readonly string[];
};

/** Paige's past and current roles, most recent first. */
export type WorkExperience = {
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

// Education and Links are placeholder content until launch.
export const cv: CV = {
  personalStatement: {
    paragraphs: [
      "Engineering Manager with 12 years in software, spanning regulated FinTech and scientific instrument software. I line-manage a team of five delivering three .NET and Angular applications against three separate release schedules, having come to management through the code — Senior and then Principal Engineer on the same team. That is where I intend to stay: close enough to the technical detail to make architectural calls and to mentor engineers through real work rather than from a distance. In the past year I have progressed two engineers from mid-level to senior, shipped eight releases, and taken on the structural problems that slow delivery down, including those owned by other departments. I am looking for an engineering management role with that same balance of people leadership and technical involvement — the domain matters less to me than a well-defined problem."
    ]
  },
  workExperience: {
    roles: [
      {
        title: "Engineering Manager",
        organisation: "Waters Corporation",
        dates: { start: "2024-11" },
        highlights: [
          "Line manager to five — four developers and the team's tech lead — on the team I previously worked in as Senior and Principal Engineer",
          "Progressed two engineers from mid-level to senior through structured mentoring, handing over technical analysis and stepping back to let them reach their own conclusions",
          "Driving a cross-department pilot, without line authority, to remove a documentation and translation bottleneck adding three to six weeks to the end of every release",
          "Won buy-in from that department by supplying the technical capability they lacked rather than imposing process: moving them toward docs-as-code, continuous translation and AI style-guide-driven pre-review in place of sequential manual gates",
          "Managed delivery of three Waters Connect applications against three separate release schedules with a single team, where most teams in the business carry one; shipped 8 releases",
          "Partnered with the Product Owner to run a multi-week customer feedback programme on a major release, rebuilding confidence among users who had long felt unheard — described at customer conferences as the biggest improvement to the application in years"
        ]
      },
      {
        title: "Principal Software Engineer",
        organisation: "Waters Corporation",
        dates: { start: "2024-03", end: "2024-11" },
        highlights: [
          "Promoted to Principal on the same team and applications, with a remit extending across departments",
          "Led the first release of the team's third application from scratch",
          "Drove genuine adoption of the UX department's shared UI component library — mandated across Waters Connect but barely used in practice — and worked directly with that team to improve the integration path",
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
          "Diagnosed the underlying maintenance problem: code copied between applications and teams, leaving quality that varied with the age of each copy, and engineers routing around areas they could not follow",
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
          "Machine Learning engineering translating Data Science research and experimentation into unit tested production quality software in Python including packages such as: SkLearn, Tensorflow and Spacy",
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
