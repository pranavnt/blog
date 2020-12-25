import Head from "next/head";
import styles from "../styles/Home.module.css";
import MarkdownRenderer from "react-markdown-renderer";
import axios from "axios";
import postsJSON from "../posts.js";

var markdown;

export default function Post({ md }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | pt5.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarkdownRenderer markdown={md} />
    </div>
  );
}

Post.getInitialProps = async (ctx) => {
  var postRoute = ctx.query.post;

  var articleArr = postsJSON.posts;

  for (var i = 0; i < articleArr.length; i++) {
    if (articleArr[i].route == postRoute) {
      var link = articleArr[i].link;

      await axios(link).then((response) => {
        markdown = response.data;
      });

      return { md: markdown };
    }
  }
  return { md: "Page not found" };
};
