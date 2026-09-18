import type { Work as WorkData } from "@/content/cv";
import { formatDateRange } from "../_lib/formatDateRange";
import styles from "./Work.module.scss";

type Props = {
  work: WorkData;
};

export default function Work({ work }: Props) {
  return (
    <section className={styles.section} aria-labelledby="work">
      <h2 id="work" className={styles.heading}>
        Work Experience
      </h2>
      <ol className={styles.roles}>
        {work.roles.map((role) => (
          <li
            key={`${role.organisation}-${role.title}-${role.dates.start}`}
            className={styles.role}
          >
            <h3 className={styles.title}>{role.title}</h3>
            <p className={styles.organisation}>{role.organisation}</p>
            <p className={styles.dates}>{formatDateRange(role.dates)}</p>
            <ul className={styles.highlights}>
              {role.highlights.map((highlight) => (
                <li key={highlight} className={styles.highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
