import Image from "next/image";
import styles from "./page.module.css";
import Landing from "./components/landing-section/landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
