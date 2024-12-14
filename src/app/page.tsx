import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "./components/Footer";
import { Headline } from "./components/Headline";
import { Links } from "./components/Links";
import { Header } from "./components/Header";
import { Mains } from "./components/Mains";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div className={styles.inner}>
          <Headline title="top(トップ)" />
          <Links />
          <Mains />
        </div>
      </main>
      <Footer />
    </div>
  );
}
