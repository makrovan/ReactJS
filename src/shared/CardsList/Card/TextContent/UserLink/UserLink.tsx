import React from 'react';
import styles from './userlink.css';
import {useOtherUserData} from "../../../../../hooks/useOtherUserData";

interface IUserLinkProps {
  name: string;
  link: string;
  href: string;
}
export function UserLink({ name, link, href }: IUserLinkProps) {
    const [otherUser] = useOtherUserData(link);
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src = { (otherUser.iconImage) ? otherUser.iconImage :
                'https://cdn.dribbble.com/users/230073/avatars/normal/ad60f3dd2d81f3d769fd6d098552b26f.jpg'}
            // заглушка, если нет фото
            alt="avatar"
        />
        <a href= {href} className={styles.username}>{name}</a>
      </div>
  );
}