// The single source of CV content. Plain data only: presentation lives in the
// components that render it.

/** The short introductory summary at the top of the CV. */
export type PersonalStatement = {
  paragraphs: readonly string[];
};

/** Paige's CV, composed of one type per CV Section. */
export type CV = {
  personalStatement: PersonalStatement;
};

// Placeholder content until launch.
export const cv: CV = {
  personalStatement: {
    paragraphs: [
      "Software developer who enjoys building clear, reliable and accessible products, from the first sketch through to production.",
      "Looking for a role on a friendly team where I can keep learning, share what I know and ship work that matters to the people who use it."
    ]
  }
};
