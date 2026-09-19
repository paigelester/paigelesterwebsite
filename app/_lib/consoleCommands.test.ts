import { expect, test, vi } from "vitest";
import { createConsoleCommands, type ConsoleEffects } from "./consoleCommands";

function setUp(overrides: Partial<ConsoleEffects> = {}) {
  const log = vi.fn<ConsoleEffects["log"]>();
  const effects = {
    log,
    open: vi.fn(),
    switchTheme: vi.fn(),
    cycleAccent: vi.fn(() => "teal" as const),
    ...overrides
  };
  const logged = () => log.mock.calls.map(([text]) => text).join("\n");
  return { commands: createConsoleCommands(effects), effects, logged };
}

test("help logs every command, one per line", () => {
  const { commands, logged } = setUp();

  commands.help();

  const lines = logged().split("\n");
  expect(lines).toHaveLength(Object.keys(commands).length);
  for (const name of Object.keys(commands)) {
    expect(logged()).toContain(`paige.${name}()`);
  }
});

test("email returns the address", () => {
  const { commands } = setUp();

  expect(commands.email()).toBe("paigelester7@gmail.com");
});

test("cv opens the PDF", () => {
  const { commands, effects } = setUp();

  commands.cv();

  expect(effects.open).toHaveBeenCalledWith("/cv.pdf");
});

test("theme switches the theme", () => {
  const { commands, effects } = setUp();

  expect(commands.theme()).toBe("Switched the theme.");
  expect(effects.switchTheme).toHaveBeenCalledOnce();
});

test("accent moves to the next accent and names it", () => {
  const { commands, effects } = setUp();

  expect(commands.accent()).toContain("Accent: teal.");
  expect(effects.cycleAccent).toHaveBeenCalledOnce();
});
