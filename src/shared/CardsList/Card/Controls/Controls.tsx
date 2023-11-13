import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {CommentButton} from "./CommentButton";
import {ShareButton} from "./ShareButton";
import {SaveButton} from "./SaveButton";

interface IControlsProps {
    commentNumber: number;
    karmaValue: number;
}

export function Controls({commentNumber, karmaValue}: IControlsProps) {
  return (
      <div className={styles.controls}>
        <KarmaCounter karmaValue={karmaValue}/>
        <CommentButton commentNumber={commentNumber}/>

        <div className={styles.actions}>
          <ShareButton />
          <SaveButton />
        </div>
      </div>
  );
}
