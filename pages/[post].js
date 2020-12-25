import axios from "axios";
import { useRouter } from "next/router";
// import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "react-markdown-renderer";

import postsJSON from "./postsJSON.js";

let markdown;

export default function Post() {
  const router = useRouter();

  const postRoute = router.query["post"];

  var articleArr = postsJSON.posts;

  for (var i = 0; i < articleArr.length; i++) {
    console.log(i);
    console.log("/" + postRoute);
    console.log(articleArr[i].route);
    if (articleArr[i].route == "/" + postRoute) {
      var link = articleArr[i].link;
      console.log(link);

      axios(link).then((response) => {
        markdown = response.data;
        console.log(markdown);
      });

      break;
    }
  }

  console.log(markdown);

  return (
    <div>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}
