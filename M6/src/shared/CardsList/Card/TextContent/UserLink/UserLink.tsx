import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  name: string;
  link: string;
  href: string;
}
export function UserLink({ name, link, href }: IUserLinkProps) {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src = {link}
            alt="avatar"
        />
        <a href= {href} className={styles.username}>{name}</a>
      </div>
  );
}

// interface IUserLinkState {
//   name: string;
//   link: string;
//   href: string;
// }
// export class UserLink extends React.Component<IUserLinkProps, IUserLinkState>{
//   constructor(props: IUserLinkProps) {
//     super(props);
//
//     // пока что инициализируем в конструкторе:
//     this.state = {
//       name: USER_NAME,
//       link: USER_LINK,
//       href: USER_URL,
//     }
//   }
//
//   render() {
//
//   }
// }