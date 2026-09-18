/** The sections the Contents side menu lists, in page order. */
export const contentsEntries = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
] as const;

export type ContentsEntryId = (typeof contentsEntries)[number]["id"];

/** A section on screen, and how far its top is from the top of the viewport. */
export type OnScreenEntry = {
  id: ContentsEntryId;
  top: number;
};

/**
 * The section whose Contents entry is highlighted: the topmost one on screen,
 * or Intro if none is.
 */
export function activeSection(
  onScreen: readonly OnScreenEntry[]
): ContentsEntryId {
  let topmost: OnScreenEntry | undefined;
  for (const section of onScreen) {
    if (!topmost || section.top < topmost.top) {
      topmost = section;
    }
  }
  return topmost?.id ?? "intro";
}
