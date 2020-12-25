import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function Article(props) {
  axios
    .get(props.link)
    .then((response) => {
      var md = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return <ReactMarkdown children={md} allowDangerousHtml />;
}
