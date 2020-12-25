import axios from "axios";
import { useRouter } from "next/router";
// import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "react-markdown-renderer";

import postsJSON from "./postsJSON.js";

let markdown;
var postRoute;
const articleArr = postsJSON.posts;

export default function Post(props) {
  const router = useRouter();
  postRoute = router.query["post"];
  return (
    <div>
      <MarkdownRenderer markdown={props.markdown} />
    </div>
  );
}

export async function getStaticProps() {
  for (var i = 0; i < articleArr.length; i++) {
    if (articleArr[i].route == "/" + postRoute) {
      var link = articleArr[i].link;

      axios(link).then((response) => {
        markdown = response.data;
      });

      break;
    }
  }
  return {
    props: {
      markdown,
    },
  };
}
