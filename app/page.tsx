import { cv } from "@/content/cv";
import Education from "./_components/Education";
import Links from "./_components/Links";
import Intro from "./_components/Intro";
import Skills from "./_components/Skills";
import Work from "./_components/Work";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.name}>Paige Lester</h1>
        {/* Printed from the /print page at build time by ci/print-cv.ts. */}
        <a
          href="/cv.pdf"
          download="Paige Lester CV.pdf"
          className={styles.download}
        >
          Download CV (PDF)
        </a>
      </header>
      <Intro intro={cv.intro} />
      <Work work={cv.work} />
      <Skills skills={cv.skills} />
      <Education education={cv.education} />
      <Links links={cv.links} />
    </main>
  );
}
