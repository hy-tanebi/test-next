import styles from "../page.module.css";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";

export const metadata = {
  title: "about Pageeee",
  description: "これはアバウトな感じ",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Headline title="about（アバウト）" />
        <p>これはaboutページ</p>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
