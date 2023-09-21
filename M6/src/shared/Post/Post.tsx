import React, {useEffect, useRef, useState} from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
// import {CommentForm} from "./CommentFormContainer/CommentForm";
import {IPost, usePostComments} from "../../hooks/usePostComments";
import {CommentList} from "./CommentList";
import {CommentFormContainer} from "./CommentFormContainer";

interface IPostProps {
  postId: string;
  onClose?: () => void;
}

export function Post(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)){
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  const emptyPost = {
    id: ''
  }
  const [post, setPost] = useState<IPost>(emptyPost);
  const [comments, setComments] = useState<Array<IPost>>([emptyPost]);
  const [postComments] = usePostComments(props.postId);

  useEffect(() => {
    if (postComments.length) {
        setPost({
            author: postComments[0].data.children[0].data.author,
            created: postComments[0].data.children[0].data.created,
            title: postComments[0].data.children[0].data.title,
            id: postComments[0].data.children[0].data.id,
        });
        setComments(postComments[1].data.children.map((item) => {return item.data}));
    }
  }, [postComments]);

  return ReactDOM.createPortal((
      <div className={styles.modal} ref={ref}>
        <h2 className={styles.header}>{post.title}</h2>
        <div className={styles.content}>
          <p>{post.title}</p>
        </div>
        <CommentFormContainer postId={post.id} isCommentHide={false} helloText={''}/>
        <CommentList children={comments} />
      </div>
  ), node);
}
