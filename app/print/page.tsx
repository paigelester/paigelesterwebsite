import type { Metadata } from "next";
import { cv } from "@/content/cv";
import Education from "../_components/Education";
import Intro from "../_components/Intro";
import Links from "../_components/Links";
import Skills from "../_components/Skills";
import Work from "../_components/Work";
import styles from "./page.module.scss";

// The CV as printed to cv.pdf by ci/print-cv.ts. Nothing links here: it only
// exists to be printed, so the home page can change without changing the PDF.
export const metadata: Metadata = {
  robots: { index: false }
};

export default function Print() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>Paige Lester</h1>
      <Intro intro={cv.intro} />
      <Work work={cv.work} />
      <Skills skills={cv.skills} />
      <Education education={cv.education} />
      <Links links={cv.links} />
    </main>
  );
}
