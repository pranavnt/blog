import styles from "../styles/Home.module.css";

export default function ArticleBlock(props) {
  return (
    <div
      className={styles.ArticleBlock}
      style={{ borderBottom: "1px solid #dddddd" }}
    >
      <a href={props.route}>
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
