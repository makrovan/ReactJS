import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {UserLink} from "./TextContent/UserLink";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

export function Card() {
  return (
      <li className={styles.card}>
          < TextContent>
              <UserLink />
          </TextContent>
          <Preview />
          <Menu />
          <Controls />
      </li>
  );
}
