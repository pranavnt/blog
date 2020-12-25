import styles from "../styles/Home.module.css";

export default function ArticleBlock(props) {
  return (
    <div style={{ borderBottom: "1px solid #eaeaea" }}>
      <a href={props.link}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <b>
            <p>{props.date}</p>
          </b>
        </div>
      </a>
    </div>
  );
}