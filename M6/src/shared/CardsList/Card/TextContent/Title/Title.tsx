import React from 'react';
import styles from './title.css';
// пока что содержимое оставляем просто константами

interface ITitle {
    post: string;
    postUrl: string;
}

export function Title({ post, postUrl }: ITitle) {
  return (
      <h2 className={styles.title}>
        <a href= {postUrl} className={styles.postLink}>{post}</a>
      </h2>
  );
}
