import type { PersonalStatement as PersonalStatementData } from "@/content/cv";
import styles from "./PersonalStatement.module.scss";

type Props = {
  personalStatement: PersonalStatementData;
};

export default function PersonalStatement({ personalStatement }: Props) {
  return (
    <section className={styles.section} aria-labelledby="personal-statement">
      <h2 id="personal-statement" className={styles.heading}>
        Personal Statement
      </h2>
      {personalStatement.paragraphs.map((paragraph) => (
        <p key={paragraph} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
