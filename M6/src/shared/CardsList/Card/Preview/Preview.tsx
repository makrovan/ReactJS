import React from 'react';
import styles from './preview.css';
const PREVIEW_IMG = "https://cdn.dribbble.com/users/1171505/screenshots/15253256/media/9195348e7da3886e8269918b952f0466.png";

export function Preview() {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src= {PREVIEW_IMG}
        />
      </div>
  );
}
