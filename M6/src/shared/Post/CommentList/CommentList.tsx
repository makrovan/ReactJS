import React from 'react';
import styles from './commentlist.css';
import {IPost} from "../../../hooks/usePostComments";
import {Comment} from "./Comment";

interface ICommentListProps {
    children?: Array<IPost>,
}

export function CommentList({children} : ICommentListProps) {
    if (children === undefined) {
        return null;
    }

    return (
      <ul className={styles.commentList}>
          {children.map((comment, index) => (
              <Comment comment={comment} key={'comment_'+ index}/>
          ))}
      </ul>
    );
}
