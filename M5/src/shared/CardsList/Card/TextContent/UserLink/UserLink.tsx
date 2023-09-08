import React from 'react';
import styles from './userlink.css';
const USER_NAME = 'Дмитрий Гришин';
const USER_LINK = 'https://cdn.dribbble.com/users/230073/avatars/normal/ad60f3dd2d81f3d769fd6d098552b26f.jpg'
const USER_URL = "#user-url";
interface IUserLinkProps {
}

interface IUserLinkState {
  name: string;
  link: string;
  href: string;
}

export class UserLink extends React.Component<IUserLinkProps, IUserLinkState>{
  constructor(props: IUserLinkProps) {
    super(props);

    // пока что инициализируем в конструкторе:
    this.state = {
      name: USER_NAME,
      link: USER_LINK,
      href: USER_URL,
    }
  }

  render() {
    return (
    <div className={styles.userLink}>
      <img
          className={styles.avatar}
          src = {this.state.link}
          alt="avatar"
      />
      <a href= {this.state.href} className={styles.username}>{this.state.name}</a>
    </div>
    );
  }
}