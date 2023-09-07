import React from 'react';
import styles from './textcontent.css';
import {Title} from "./Title";

const PUBLISHED_TIME = 4;

interface ITextContentProps {
  children?: React.ReactNode,
  // title?: React.ReactNode,
}

//не придумал как передать title в качестве второго дочернего компонента...
export function TextContent(
    { children }: ITextContentProps,
    ) {
  return (
      <div className={styles.textContent}>
          <div className={styles.metaData}>
              { children }
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                { PUBLISHED_TIME } часа назад
            </span>
          </div>
          < Title />
      </div>
  );
}
