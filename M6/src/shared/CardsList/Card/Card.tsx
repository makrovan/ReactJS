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
          < TextContent publishedTime={4}>
              <UserLink
                  link={'https://cdn.dribbble.com/users/230073/avatars/normal/ad60f3dd2d81f3d769fd6d098552b26f.jpg'}
                  name={'Дмитрий Гришин'}
                  href={"#user-url"}
              />
          </TextContent>
          <Preview
              previewImg={"https://cdn.dribbble.com/users/1171505/screenshots/15253256/media/9195348e7da3886e8269918b952f0466.png"}/>
          <Menu />
          <Controls />
      </li>
  );
}
