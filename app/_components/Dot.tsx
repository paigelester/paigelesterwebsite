"use client";

import { useState } from "react";
import { dotAfter } from "../_lib/dot";
import styles from "./Dot.module.scss";

/**
 * Dot, in the header: a face on a button, with a line of advice beside it.
 * Each click shows the next face and line, and screen readers announce the
 * new line.
 */
export default function Dot() {
  const [clicks, setClicks] = useState(0);
  const { face, advice } = dotAfter(clicks);

  return (
    <div className={styles.dot}>
      <button
        type="button"
        onClick={() => setClicks((count) => count + 1)}
        className={styles.face}
        aria-label="Ask Dot"
        title="Ask Dot"
      >
        <span aria-hidden="true">{face}</span>
      </button>
      <p className={styles.advice} aria-live="polite">
        {advice}
      </p>
    </div>
  );
}
