/**
 * The mockup's console messages: each a %c text and its style. Copied word
 * for word, colours included, as console styles cannot read the theme's CSS
 * variables. The last points visitors to the console commands.
 */
const consoleMessages = [
  ["%cThe Paige Lester Inspector", "font:600 16px system-ui;color:#e79bbb"],
  [
    "%cYou inspected the page. Curiosity looks good on you.\nSay hello: paigelester7@gmail.com",
    "font:13px ui-monospace;color:#9aa"
  ],
  [
    "%cThere's more to find. Type paige.help() to see what you can do here.",
    "font:13px ui-monospace;color:#e79bbb"
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
