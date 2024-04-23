import { Avatar } from "./Avatar";

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import PropTypes from "prop-types";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maisafolgueral.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maisa Folgueral</strong>
              <time
                title="02 de abril às 11:20h"
                dateTime="2024-04-02 11:20:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string,
};
