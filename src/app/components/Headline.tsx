import Image from "next/image";
import styles from "./Headline.module.css";

interface HeadlineProps {
  title: string;
}

export function Headline({ title }: HeadlineProps) {
  return (
    <div>
      <p className={styles.title}>これはテストです。</p>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol>
        <li>
          {title} ページ<code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
