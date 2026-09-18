import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.scss";

/**
 * The site's sticky header: the theme toggle and a download button, with room
 * on the left for Dot.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      {/* Dot's place. */}
      <div className={styles.dot} />
      <div className={styles.controls}>
        <ThemeToggle className={styles.toggle} />
        {/* Printed from the /print page at build time by ci/print-cv.ts. */}
        <a
          href="/cv.pdf"
          download="Paige Lester CV.pdf"
          className={styles.download}
        >
          {/* A non-breaking space, as a flex container drops a plain one. */}
          Download CV{" "}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
