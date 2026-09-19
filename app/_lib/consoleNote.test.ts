import { afterEach, expect, test, vi } from "vitest";
import { logConsoleNoteOnce } from "./consoleNote";

afterEach(() => {
  vi.restoreAllMocks();
});

test("logs the two styled messages the first time, and nothing after", () => {
  const log = vi.spyOn(console, "log").mockImplementation(() => {});

  logConsoleNoteOnce();
  logConsoleNoteOnce();

  expect(log.mock.calls).toEqual([
    [
      "%cPaige Lester — Engineering Manager",
      "font:600 16px system-ui;color:#e79bbb"
    ],
    [
      "%cYou inspected the page. That is the sort of thing I like in a team.\nSay hello: paigelester7@gmail.com",
      "font:13px ui-monospace;color:#9aa"
    ]
  ]);
});
