import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maisafolgueral.png" />
          <div className={styles.authorInfo}>
            <strong>Maisa Folgueral</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="02 de abril às 11:20h" dateTime="2024-04-02 11:20:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
