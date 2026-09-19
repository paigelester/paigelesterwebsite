"use client";

import { useEffect, useState } from "react";
import { dotAfter, dotSpottedEvent, spottedDot } from "../_lib/dot";
import styles from "./Dot.module.scss";

/**
 * Dot, in the header: a face on a button, with a line of advice beside it.
 * Each click shows the next face and line, and screen readers announce the
 * new line. Running paige.dot() in the console shows spottedDot until the
 * next click, which carries on from where the clicks left off.
 */
export default function Dot() {
  const [clicks, setClicks] = useState(0);
  const [spotted, setSpotted] = useState(false);
  const { face, advice } = spotted ? spottedDot : dotAfter(clicks);

  useEffect(() => {
    const spot = () => setSpotted(true);
    window.addEventListener(dotSpottedEvent, spot);
    return () => window.removeEventListener(dotSpottedEvent, spot);
  }, []);

  return (
    <div className={styles.dot}>
      <button
        type="button"
        onClick={() => {
          setSpotted(false);
          setClicks((count) => count + 1);
        }}
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
