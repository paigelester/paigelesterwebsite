"use client";

import { useEffect } from "react";
import { logConsoleNoteOnce } from "../_lib/consoleNote";

/** Logs the note for visitors who open the console, once the page loads. */
export default function ConsoleNote() {
  useEffect(logConsoleNoteOnce, []);

  return null;
}
