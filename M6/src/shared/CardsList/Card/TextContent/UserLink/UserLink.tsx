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
            src = {otherUser.iconImage}
            alt="avatar"
        />
        <a href= {href} className={styles.username}>{name}</a>
      </div>
  );
}