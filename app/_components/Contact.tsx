import type { Education, Links } from "@/content/cv";
import { formatDateRange } from "../_lib/formatDateRange";
import LinkIcon from "./LinkIcon";
import styles from "./Contact.module.scss";

type Props = {
  education: Education;
  links: Links;
};

/**
 * How to reach Paige, closing the site: the Links, Education, a references
 * note and a note for visitors who inspect the page. Site-only, so the PDF
 * page keeps its own Education and Links.
 */
export default function Contact({ education, links }: Props) {
  const emailLinks = links.profiles.filter((link) =>
    link.url.startsWith("mailto:")
  );
  const profileLinks = links.profiles.filter(
    (link) => !link.url.startsWith("mailto:")
  );

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={styles.heading}>
        Contact
      </h2>
      <p className={styles.headline}>
        Engineering leadership is at its best where the real work happens.
      </p>
      <div className={styles.actions}>
        {emailLinks.map((link) => (
          <a key={link.url} href={link.url} className={styles.email}>
            {link.label}
          </a>
        ))}
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
      {/* Wider screens show the Links beside the Contents side menu. */}
      <ul className={styles.profiles}>
        {profileLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url} className={styles.profile}>
              <LinkIcon link={link} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.details}>
        <div>
          <h3 className={styles.detailHeading}>Education</h3>
          <ul className={styles.qualifications}>
            {education.qualifications.map((qualification) => (
              <li
                key={`${qualification.institution}-${qualification.name ?? ""}-${qualification.dates.start}`}
              >
                {formatDateRange(qualification.dates)}{" "}
                {qualification.name && `${qualification.name}, `}
                {qualification.institution}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.detailHeading}>References</h3>
          <p>Available on request</p>
        </div>
      </div>
      {/* Shown as text, like a comment found in the page source. */}
      <p className={styles.inspectorNote}>
        {
          "<!-- you opened the inspector. good instinct. there's a note for you in the console. -->"
        }
      </p>
    </section>
  );
}
