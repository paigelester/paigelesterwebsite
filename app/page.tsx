import { cv } from "@/content/cv";
import Contact from "./_components/Contact";
import Header from "./_components/Header";
import Intro from "./_components/Intro";
import SitePage from "./_components/SitePage";
import Skills from "./_components/Skills";
import Work from "./_components/Work";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <SitePage>
      <Header />
      <main className={styles.main}>
        <Intro variant="site" intro={cv.intro} links={cv.links} />
        <Work variant="site" work={cv.work} />
        <Skills skills={cv.skills} />
        <Contact education={cv.education} links={cv.links} />
      </main>
    </SitePage>
  );
}
