import { cv } from "@/content/cv";
import Education from "./_components/Education";
import Links from "./_components/Links";
import PersonalStatement from "./_components/PersonalStatement";
import Skills from "./_components/Skills";
import WorkExperience from "./_components/WorkExperience";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.name}>Paige Lester</h1>
        {/* Printed from this page at build time by ci/print-cv.ts. */}
        <a
          href="/cv.pdf"
          download="Paige Lester CV.pdf"
          className={styles.download}
        >
          Download CV (PDF)
        </a>
      </header>
      <PersonalStatement personalStatement={cv.personalStatement} />
      <WorkExperience workExperience={cv.workExperience} />
      <Skills skills={cv.skills} />
      <Education education={cv.education} />
      <Links links={cv.links} />
    </main>
  );
}
