export type Theme = "dark" | "light";

/** The local storage key that holds the visitor's theme choice. */
export const themeStorageKey = "pl-cv-theme";

/**
 * The theme to show, given the choice saved in local storage, if any.
 *
 * The root layout's inline script runs this function's source before first
 * paint, so it must not refer to anything outside itself.
 */
export function decideTheme(saved: string | null): Theme {
  return saved === "light" ? "light" : "dark";
}

/**
 * Sets data-theme on <html> from the saved choice. Local storage can be
 * unavailable, such as when blocked, and then the default theme stays.
 */
export function applySavedTheme(): void {
  try {
    document.documentElement.dataset.theme = decideTheme(
      localStorage.getItem(themeStorageKey)
    );
  } catch {}
}

/** The theme the theme toggle switches to from the given one. */
export function otherTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

/**
 * Switches <html> to the other theme and saves the choice. The theme still
 * switches when local storage is unavailable, but is then not remembered.
 */
export function switchTheme(): void {
  const root = document.documentElement;
  const theme = otherTheme(decideTheme(root.dataset.theme ?? null));
  root.dataset.theme = theme;
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {}
}

/** applySavedTheme as an inline script, to run before first paint. */
export const applySavedThemeScript = `try{document.documentElement.dataset.theme=(${decideTheme.toString()})(localStorage.getItem(${JSON.stringify(themeStorageKey)}))}catch(e){}`;
