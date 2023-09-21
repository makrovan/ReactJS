import React, {useState} from 'react';
import styles from './comment.css';
import {EColors, Text} from "../../../Text";
// import {CommentForm} from "../../CommentFormContainer/CommentForm";
import {IPost} from "../../../../hooks/usePostComments";
import {ReactComponent as ReplyButtonSvg} from '../../../assets/replyButton.svg';
import {CommentList} from "../CommentList";
import {CommentFormContainer} from "../../CommentFormContainer";

export function Comment({comment} : {comment: IPost}) {
  if (comment.count) {
    return null;
  }

  const [isCommentHide, setIsCommentHide] = useState(true);

  return (
      <li key={comment.id} className={styles.comment}>
        <h3 className={styles.author}>{comment.author} said:</h3>
        <p className={styles.body}>{comment.body}</p>
        <button className={styles.replyButton} onClick={() => {
          setIsCommentHide(!isCommentHide);
        }}>
          <ReplyButtonSvg />
          <Text size={12} color={EColors.grey99}>Ответить</Text>
        </button>
        <div className={isCommentHide ? styles.hidden : ''}>
          <CommentFormContainer
              postId={comment.id}
              isCommentHide={isCommentHide}
              helloText={`to ${comment.author}: `}
              onClose = {() => {setIsCommentHide(!isCommentHide)}}/>
        </div>
        { (comment.replies !== '') ? <CommentList children={comment.replies?.data.children.map((iPostData) => {
          return iPostData.data
        })} /> : null}
      </li>
  );
}
