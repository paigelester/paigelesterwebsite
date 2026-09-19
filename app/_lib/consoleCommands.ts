import { cycleAccent, type Accent } from "./accent";
import { dotSpottedEvent, spottedDot } from "./dot";
import { switchTheme } from "./theme";

/** What the commands do outside themselves, passed in so tests can fake it. */
export type ConsoleEffects = {
  log: (text: string, style: string) => void;
  open: (url: string) => void;
  switchTheme: () => void;
  cycleAccent: () => Accent;
  spotDot: () => void;
};

export type ConsoleCommands = Record<
  "help" | "email" | "cv" | "theme" | "accent" | "dot" | "stack",
  () => string
>;

declare global {
  interface Window {
    paige?: ConsoleCommands;
  }
}

const email = "paigelester7@gmail.com";
// Matches the console note's body text.
const style = "font:13px ui-monospace;color:#9aa";

const descriptions: Record<keyof ConsoleCommands, string> = {
  help: "list these commands",
  email: "show my email address",
  cv: "open my CV as a PDF",
  theme: "switch between dark and light",
  accent: "try the next accent colour",
  dot: "say hello to Dot, up in the header",
  stack: "what this site is built with"
};

/**
 * The commands visitors can run from the console as paige.<command>(). Each
 * returns what it did, which the console prints in place of "undefined". The
 * console shows a returned string on one line, so help logs its menu instead.
 */
export function createConsoleCommands(
  effects: ConsoleEffects
): ConsoleCommands {
  return {
    help() {
      const width = Math.max(
        ...Object.keys(descriptions).map((name) => `paige.${name}()`.length)
      );
      effects.log(
        `%c${Object.entries(descriptions)
          .map(([name, text]) => `${`paige.${name}()`.padEnd(width)}  ${text}`)
          .join("\n")}`,
        style
      );
      return "Pick one and run it.";
    },
    email() {
      return email;
    },
    cv() {
      effects.open("/cv.pdf");
      return "Opening my CV.";
    },
    theme() {
      effects.switchTheme();
      return "Switched the theme.";
    },
    accent() {
      return `Accent: ${effects.cycleAccent()}. Run it again for the next one.`;
    },
    dot() {
      effects.spotDot();
      return `${spottedDot.face} ${spottedDot.advice}`;
    },
    stack() {
      return "Next.js as a static export, React, TypeScript and Sass, tested with Vitest. Playwright prints the PDF.";
    }
  };
}

/** Puts the commands on window.paige, for visitors to run from the console. */
export function installConsoleCommands(): void {
  window.paige = createConsoleCommands({
    log: (text, style) => console.log(text, style),
    open: (url) => window.open(url, "_blank"),
    switchTheme,
    cycleAccent,
    spotDot: () => window.dispatchEvent(new Event(dotSpottedEvent))
  });
}
