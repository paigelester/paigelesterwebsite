import type { Links as LinksData } from "@/content/cv";
import styles from "./Links.module.scss";

type Props = {
  links: LinksData;
};

export default function Links({ links }: Props) {
  return (
    <section className={styles.section} aria-labelledby="links">
      <h2 id="links" className={styles.heading}>
        Links
      </h2>
      <ul className={styles.links}>
        {links.profiles.map((link) => (
          <li key={link.url}>
            <a href={link.url} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
