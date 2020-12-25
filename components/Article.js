import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function Article(props) {
  axios
    .get(props.link)
    .then((response) => {
      return <ReactMarkdown children={response.data} allowDangerousHtml />;
    })
    .catch((error) => {
      console.log(error);
    });
}
