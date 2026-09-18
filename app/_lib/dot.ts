/** What Dot shows: a face, and a line of advice beside it. */
export type DotState = {
  face: string;
  advice: string;
};

/** Dot's faces: the mockup's, then some more. */
const faces = [
  "[•_•]",
  "[•ᴗ•]",
  "[o_o]",
  "[ಠ_ಠ]",
  "[^_^]",
  "[-_-]",
  "[•ᴗ•]",
  "[o_O]",
  "[¬_¬]",
  "[>_<]",
  "[@_@]",
  "[x_x]",
  "[T_T]",
  "[-‿-]",
  "[◕‿◕]",
  "[≖_≖]",
  "[°_°]"
];

/** Dot's greeting, shown only before the first click. */
const greeting = "hi, I'm Dot — click me for an opinion";

/**
 * Dot's advice, in the order clicks reveal it: the mockup's lines, then
 * lines about writing software.
 */
const advice = [
  "Code review is mentoring with a paper trail.",
  "The bottleneck is almost never the typing.",
  "A shared package beats a shared intention.",
  "If only one person can fix it, that is the bug.",
  "Estimates are a conversation, not a contract.",
  "Promote people before they ask. It is cheaper.",
  "Three release trains, one team. Ask me how.",
  "The best process is the one nobody routes around.",
  "Hand over the analysis. Keep your conclusions to yourself.",
  "Copy-paste is a loan at a terrible interest rate.",
  "You can be close to the code and still be the manager.",
  "The best code is no code at all.",
  "One of my most productive days was throwing away 1,000 lines of code.",
  "Deleted code is debugged code.",
  "Small pull requests get real reviews.",
  "If it's hard to test, it's hard to use.",
  "Clever code is a cost your teammates pay later.",
  "Read the error message. All of it.",
  "A flaky test has stopped telling you anything.",
  "Every TODO is a promise nobody signed.",
  "Naming things is design work. Take your time."
];

/**
 * What Dot shows after the given number of clicks. Each click moves to the
 * next face and line, and both lists wrap around; the greeting never returns.
 */
export function dotAfter(clicks: number): DotState {
  return {
    face: faces[clicks % faces.length],
    advice: clicks === 0 ? greeting : advice[(clicks - 1) % advice.length]
  };
}
