import type { Skills as SkillsData } from "@/content/cv";
import styles from "./Skills.module.scss";

type Props = {
  skills: SkillsData;
};

export default function Skills({ skills }: Props) {
  return (
    <section className={styles.section} aria-labelledby="skills">
      <h2 id="skills" className={styles.heading}>
        Skills
      </h2>
      {skills.groups.map((group) => (
        <div key={group.name} className={styles.group}>
          <h3 className={styles.groupName}>{group.name}</h3>
          <ul className={styles.skills}>
            {group.skills.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
