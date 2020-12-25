import axios from "axios";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import postsJSON from "./postsJSON.js";

export default function Article() {
  const router = useRouter();

  const postRoute = router.query.post;

  var articleArr = postsJSON.posts;

  for (var i = 0; i < articleArr.length; i++) {
    if (articleArr[i].route == postRoute) {
      var link = articleArr[i].link;
    }
  }
  return <ReactMarkdown children={getMD(link)} allowDangerousHtml />;
}

function getMD(link) {
  return axios(link).data;
}
