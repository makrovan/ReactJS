import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {CommentButton} from "./CommentButton";
import {ShareButton} from "./ShareButton";
import {SaveButton} from "./SaveButton";

export function Controls() {
  return (
      <div className={styles.controls}>
        <KarmaCounter karmaValue={234}/>
        <CommentButton commentNumber={13}/>

        <div className={styles.actions}>
          <ShareButton />
          <SaveButton />
        </div>
      </div>
  );
}
