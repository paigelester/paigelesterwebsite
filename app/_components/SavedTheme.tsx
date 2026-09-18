"use client";

import { useLayoutEffect } from "react";
import { applySavedTheme } from "../_lib/theme";

/**
 * Re-applies the saved theme after React's development-only Strict Mode
 * remount clears the attribute the root layout's inline script set. Changes
 * nothing in production, where the script's attribute stays.
 */
export default function SavedTheme() {
  useLayoutEffect(applySavedTheme, []);

  return null;
}
