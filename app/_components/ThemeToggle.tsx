"use client";

import { switchTheme } from "../_lib/theme";

type Props = {
  className?: string;
};

/** Switches between the dark and light themes, and remembers the choice. */
export default function ThemeToggle({ className }: Props) {
  return (
    <button
      type="button"
      onClick={switchTheme}
      className={className}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
