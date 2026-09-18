/**
 * The mockup's console messages: each a %c text and its style. Copied word
 * for word, colours included, as console styles cannot read the theme's CSS
 * variables.
 */
const consoleMessages = [
  [
    "%cPaige Lester — Engineering Manager",
    "font:600 16px system-ui;color:#e79bbb"
  ],
  [
    "%cYou inspected the page. That is the sort of thing I like in a team.\nHiring? paigelester7@gmail.com",
    "font:13px ui-monospace;color:#9aa"
  ]
] as const;

let logged = false;

/**
 * Logs the note for visitors who open the console. Only the first call logs,
 * so React's development-only Strict Mode remount doesn't repeat it.
 */
export function logConsoleNoteOnce(): void {
  if (logged) return;
  logged = true;
  for (const [text, style] of consoleMessages) console.log(text, style);
}
