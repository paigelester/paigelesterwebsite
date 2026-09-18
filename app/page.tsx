import { cv } from "@/content/cv";
import PersonalStatement from "./_components/PersonalStatement";
import WorkExperience from "./_components/WorkExperience";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>Paige Lester</h1>
      <PersonalStatement personalStatement={cv.personalStatement} />
      <WorkExperience workExperience={cv.workExperience} />
    </main>
  );
}
