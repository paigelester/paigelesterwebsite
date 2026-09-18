import type { Education as EducationData } from "@/content/cv";
import { formatDateRange } from "../_lib/formatDateRange";
import styles from "./Education.module.scss";

type Props = {
  education: EducationData;
};

export default function Education({ education }: Props) {
  return (
    <section
      className={styles.section}
      id="education"
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading" className={styles.heading}>
        Education
      </h2>
      <ol className={styles.qualifications}>
        {education.qualifications.map((qualification) => (
          <li
            key={`${qualification.institution}-${qualification.name ?? ""}-${qualification.dates.start}`}
            className={styles.qualification}
          >
            {qualification.name && (
              <h3 className={styles.name}>{qualification.name}</h3>
            )}
            <p className={styles.institution}>{qualification.institution}</p>
            <p className={styles.dates}>
              {formatDateRange(qualification.dates)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
