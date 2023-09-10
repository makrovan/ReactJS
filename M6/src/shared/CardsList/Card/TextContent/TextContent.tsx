import React from 'react';
import styles from './textcontent.css';
import {Title} from "./Title";

interface ITextContentProps {
  children?: React.ReactNode;
  publishedTime: number;
}

//не придумал как передать title в качестве второго дочернего компонента...
export function TextContent(
    { children, publishedTime }: ITextContentProps,
    ) {
  return (
      <div className={styles.textContent}>
          <div className={styles.metaData}>
              { children }
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                { publishedTime } часа назад
            </span>
          </div>
          <Title
           post={'Следует отметить, что новая модель организационной деятельности поможет'}
           postUrl={"#post-url"}
          />
      </div>
  );
}
