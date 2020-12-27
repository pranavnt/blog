import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactMarkdown from "react-markdown";
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
      <ReactMarkdown children={md} />
    </div>
  );
}

Post.getInitialProps = async (ctx) => {
  // gets route
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
