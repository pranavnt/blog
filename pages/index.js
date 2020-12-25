import Head from "next/head";
import styles from "../styles/Home.module.css";

import ArticleBlock from "../components/ArticleBlock.js";
import postsJSON from "./postsJSON.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | pt5.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{}}>
        <h1 style={{ fontSize: "50px", borderBottom: "1px solid #eaeaea" }}>
          Blog
        </h1>
      </div>

      <div id="articles">
        <ArticleBlock
          title="Welcome to my blog!"
          description="This is my first blog post!"
          date="Dec 25, 2020"
        />
        <ArticleBlock
          title="Welcome to my blog!"
          description="This is my first blog post!"
          date="Dec 25, 2020"
        />
      </div>

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
