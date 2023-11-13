import React from 'react';
import styles from './commentbutton.css';
import { ReactComponent as CommentButtonSvg} from '../../../../assets/commentButton.svg'

interface ICommentButtonProps {
    commentNumber: number;
}

export function CommentButton({ commentNumber }: ICommentButtonProps) {
  return (
      <button className={styles.commentButton}>
          <CommentButtonSvg />
        <span className={styles.commentsNumber}>{commentNumber}</span>
      </button>
  );
}
