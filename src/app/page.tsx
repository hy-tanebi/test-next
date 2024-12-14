import Image from "next/image";
import styles from "./page.module.css";
import { Footer } from "./components/Footer";
import { Headline } from "./components/Headline";
import { Links } from "./components/Links";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline title="top(トップ)" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
