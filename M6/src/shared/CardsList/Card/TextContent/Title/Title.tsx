import React from 'react';
import styles from './title.css';
// пока что содержимое оставляем просто константами
const POST = 'Следует отметить, что новая модель организационной деятельности поможет';
const POST_URL = "#post-url"
export function Title() {
  return (
      <h2 className={styles.title}>
        <a href= {POST_URL} className={styles.postLink}>{POST}</a>
      </h2>
  );
}
