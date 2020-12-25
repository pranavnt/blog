import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | pt5.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
        <a
          href="https://github.com/pranavnt/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by @pranavnt
        </a>
      </footer>
    </div>
  );
}
