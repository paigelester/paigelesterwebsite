import { afterEach, expect, test, vi } from "vitest";
import { logConsoleNoteOnce } from "./consoleNote";

afterEach(() => {
  vi.restoreAllMocks();
});

test("logs the three styled messages the first time, and nothing after", () => {
  const log = vi.spyOn(console, "log").mockImplementation(() => {});

  logConsoleNoteOnce();
  logConsoleNoteOnce();

  expect(log.mock.calls).toEqual([
    ["%cThe Paige Lester Inspector", "font:600 16px system-ui;color:#e79bbb"],
    [
      "%cYou inspected the page. Curiosity looks good on you.\nSay hello: paigelester7@gmail.com",
      "font:13px ui-monospace;color:#9aa"
    ],
    [
      "%cThere's more to find. Type paige.help() to see what you can do here.",
      "font:13px ui-monospace;color:#e79bbb"
    ]
  ]);
});
