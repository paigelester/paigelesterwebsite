import type { Work as WorkData } from "@/content/cv";
import { formatDateRange } from "../_lib/formatDateRange";
import styles from "./Work.module.scss";

type Props = {
  work: WorkData;
  /** The site shows a timeline; the PDF page keeps its plain list. */
  variant: "site" | "print";
};

export default function Work({ work, variant }: Props) {
  const onSite = variant === "site";

  return (
    <section
      className={styles.section}
      id="work"
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className={styles.heading}>
        {onSite ? "Work" : "Work Experience"}
      </h2>
      <ol className={styles.roles}>
        {work.roles.map((role) => (
          <li
            key={`${role.organisation}-${role.title}-${role.dates.start}`}
            className={
              // A role without an end date is the current one.
              onSite && !role.dates.end
                ? `${styles.role} ${styles.current}`
                : styles.role
            }
          >
            {onSite ? (
              <>
                <p className={styles.meta}>
                  {formatDateRange(role.dates)} · {role.organisation}
                </p>
                <h3 className={styles.title}>{role.title}</h3>
              </>
            ) : (
              <>
                <h3 className={styles.title}>{role.title}</h3>
                <p className={styles.organisation}>{role.organisation}</p>
                <p className={styles.dates}>{formatDateRange(role.dates)}</p>
              </>
            )}
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
