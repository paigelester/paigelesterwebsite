import type { Intro as IntroData, Links } from "@/content/cv";
import styles from "./Intro.module.scss";

type Props =
  | { variant: "print"; intro: IntroData }
  | { variant: "site"; intro: IntroData; links: Links };

/**
 * The Intro. On the site it opens the page with the job titles, the name and
 * the email address; the PDF page keeps its plain "Personal Statement".
 */
export default function Intro(props: Props) {
  const paragraphs = props.intro.paragraphs.map((paragraph) => (
    <p key={paragraph} className={styles.paragraph}>
      {paragraph}
    </p>
  ));

  if (props.variant === "print") {
    return (
      <section
        className={styles.section}
        id="intro"
        aria-labelledby="intro-heading"
      >
        <h2 id="intro-heading" className={styles.heading}>
          Personal Statement
        </h2>
        {paragraphs}
      </section>
    );
  }

  const emailLinks = props.links.profiles.filter((link) =>
    link.url.startsWith("mailto:")
  );

  return (
    <section
      className={styles.section}
      id="intro"
      aria-labelledby="intro-heading"
    >
      <p className={styles.jobTitles}>
        Engineering Manager · Principal Software Engineer
      </p>
      <h1 id="intro-heading" className={styles.name}>
        Paige <br />
        Lester
      </h1>
      {paragraphs}
      {emailLinks.map((link) => (
        <a key={link.url} href={link.url} className={styles.email}>
          {link.label}
        </a>
      ))}
    </section>
  );
}
