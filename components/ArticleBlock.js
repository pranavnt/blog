import styles from "../styles/Home.module.css";

export default function ArticleBlock(props) {
  return (
    <div style={{ borderBottom: "1px solid #eaeaea" }}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <b>
          <p>{props.date}</p>
        </b>
      </div>
    </div>
  );
}
