import React from 'react';
import styles from './commentbutton.css';
import { ReactComponent as CommentButtonSvg} from '../../../../assets/commentButton.svg'
const COMMENT_NUMBER = 13;

export function CommentButton() {
  return (
      <button className={styles.commentButton}>
          <CommentButtonSvg />
        <span className={styles.commentsNumber}>{COMMENT_NUMBER}</span>
      </button>
  );
}
