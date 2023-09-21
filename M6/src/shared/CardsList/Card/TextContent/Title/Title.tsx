import React from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

interface ITitle {
    post: string;
    postUrl: string;
    postId: string;
}

export function Title({ post, postId }: ITitle) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
      <h2 className={styles.title}>
          {/*href= {postUrl}*/}
          <a className={styles.postLink} onClick={() => {setIsModalOpen(true)}}>
            {post}
        </a>

          { isModalOpen && ( <Post postId={postId} onClose={() => { setIsModalOpen(false) }}/> )}
      </h2>
  );
}
