import axios from "axios";
import MarkdownRenderer from "react-markdown-renderer";
import styles from "../styles/Home.module.css";
import postsJSON from "./postsJSON.js";

var markdown;

export default function Post({ md }) {
  return (
    <div className={styles.container}>
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

      console.log(link);

      await axios(link).then((response) => {
        markdown = response.data;
      });

      return { md: markdown };
    }
  }
  return { md: "Page not found" };
};
