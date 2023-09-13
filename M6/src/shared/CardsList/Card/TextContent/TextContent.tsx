import React from 'react';
import styles from './textcontent.css';
import {Title} from "./Title";

interface ITextContentProps {
  children?: React.ReactNode;
  publishedTime?: string;
  title?: string;
  postUrl?: string;
}

//не придумал как передать title в качестве второго дочернего компонента...
export function TextContent(
    { children, publishedTime = '', title = '', postUrl = '' }: ITextContentProps) {
  return (
      <div className={styles.textContent}>
          <div className={styles.metaData}>
              { children }
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                { publishedTime }
            </span>
          </div>
          <Title
           post={title}
           postUrl={postUrl}
          />
      </div>
  );
}
