"use client";

import { useEffect } from "react";
import { installConsoleCommands } from "../_lib/consoleCommands";
import { logConsoleNoteOnce } from "../_lib/consoleNote";

/**
 * Logs the note for visitors who open the console, once the page loads, and
 * gives them the paige.<command>() commands it mentions.
 */
export default function ConsoleNote() {
  useEffect(() => {
    installConsoleCommands();
    logConsoleNoteOnce();
  }, []);

  return null;
}
