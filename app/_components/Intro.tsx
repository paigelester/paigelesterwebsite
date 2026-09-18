import type { Intro as IntroData } from "@/content/cv";
import styles from "./Intro.module.scss";

type Props = {
  intro: IntroData;
};

export default function Intro({ intro }: Props) {
  return (
    <section className={styles.section} aria-labelledby="intro">
      <h2 id="intro" className={styles.heading}>
        Personal Statement
      </h2>
      {intro.paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
