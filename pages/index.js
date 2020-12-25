import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import ArticleBlock from "../components/ArticleBlock.js";
import postsJSON from "./postsJSON.js";

export default function Home() {
  axios
    .get(
      "https://raw.githubusercontent.com/pranavnt/blog/main/posts/2020/12-25-merry-christmas.md"
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  var articles = [];

  var articleArr = postsJSON.posts;

  for (var i = 0; i < articleArr.length; i++) {
    articles.push(
      <ArticleBlock
        title={articleArr[i].title}
        description={articleArr[i].description}
        date={articleArr[i].date}
        link={articleArr[i].link}
      />
    );
  }

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

      <div id="articles">{articles}</div>

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
