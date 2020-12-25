import axios from "axios";
import { useRouter } from "next/router";
// import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "react-markdown-renderer";

import postsJSON from "./postsJSON.js";

var markdown;

export default function Post({ md }) {
  return (
    <div>
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
      break;
    }
  }
  return { md: markdown };
};
