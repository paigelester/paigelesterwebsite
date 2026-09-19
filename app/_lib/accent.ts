/**
 * The accent colours a visitor can cycle through from the console. Rose, the
 * first, is the site's own and needs no data-accent; globals.scss styles the
 * rest from the $accents map.
 */
export const accents = ["rose", "teal", "amber", "lavender"] as const;

export type Accent = (typeof accents)[number];

/** The accent after the given one, wrapping round. Unknown values start over. */
export function nextAccent(current: string | undefined): Accent {
  const index = accents.indexOf(current as Accent);
  return accents[(index + 1) % accents.length];
}

/**
 * Switches <html> to the next accent. Not saved, so a reload brings back the
 * site's own.
 */
export function cycleAccent(): Accent {
  const root = document.documentElement;
  const accent = nextAccent(root.dataset.accent ?? accents[0]);
  if (accent === accents[0]) delete root.dataset.accent;
  else root.dataset.accent = accent;
  return accent;
}
