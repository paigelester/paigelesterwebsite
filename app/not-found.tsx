import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Page not found</h1>
      <p className={styles.message}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className={styles.link}>
        Go to Paige Lester&apos;s CV
      </Link>
    </main>
  );
}
