import { describe, expect, test } from "vitest";
import { dotAfter } from "./dot";

describe("dotAfter", () => {
  test("greets with the first face before any clicks", () => {
    expect(dotAfter(0)).toEqual({
      face: "[•_•]",
      advice: "hi, I'm Dot — click me for an opinion"
    });
  });

  test.each([
    [1, "[•ᴗ•]", "Code review is mentoring with a paper trail."],
    [2, "[o_o]", "The bottleneck is almost never the typing."],
    [3, "[ಠ_ಠ]", "A shared package beats a shared intention."],
    [4, "[^_^]", "If only one person can fix it, that is the bug."],
    [5, "[-_-]", "Estimates are a conversation, not a contract."],
    [6, "[•ᴗ•]", "Promote people before they ask. It is cheaper."],
    [7, "[o_O]", "Three release trains, one team. Ask me how."],
    [8, "[¬_¬]", "The best process is the one nobody routes around."],
    [9, "[>_<]", "Hand over the analysis. Keep your conclusions to yourself."],
    [10, "[@_@]", "Copy-paste is a loan at a terrible interest rate."],
    [11, "[x_x]", "You can be close to the code and still be the manager."],
    [12, "[T_T]", "The best code is no code at all."],
    [
      13,
      "[-‿-]",
      "One of my most productive days was throwing away 1,000 lines of code."
    ],
    [14, "[◕‿◕]", "Deleted code is debugged code."],
    [15, "[≖_≖]", "Small pull requests get real reviews."],
    [16, "[°_°]", "If it's hard to test, it's hard to use."],
    [17, "[•_•]", "Clever code is a cost your teammates pay later."],
    [18, "[•ᴗ•]", "Read the error message. All of it."],
    [19, "[o_o]", "A flaky test has stopped telling you anything."],
    [20, "[ಠ_ಠ]", "Every TODO is a promise nobody signed."],
    [21, "[^_^]", "Naming things is design work. Take your time."]
  ])("after %i clicks shows %s and the next advice", (clicks, face, advice) => {
    expect(dotAfter(clicks)).toEqual({ face, advice });
  });

  test("wraps back to the first advice, not the greeting, after the last", () => {
    expect(dotAfter(22)).toEqual({
      face: "[-_-]",
      advice: "Code review is mentoring with a paper trail."
    });
  });

  test("never repeats the greeting once clicked", () => {
    for (let clicks = 1; clicks <= 200; clicks++) {
      expect(dotAfter(clicks).advice).not.toBe(dotAfter(0).advice);
    }
  });
});
