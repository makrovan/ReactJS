import React from 'react';
import styles from './userblock.css';
import {ReactComponent as AnonimIconSvg} from '../../../assets/anonimIcon.svg'
import {Break} from "../../../Break";
import {EColors, Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
  return (
      <a
          href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
          className={styles.userBox}>
        <div className={styles.avatarBox}>
          { avatarSrc ?
              <img src={avatarSrc} alt={'user avatar'} className={styles.avatarImage}/> :
              <AnonimIconSvg />
          }
        </div>

        <div className={styles.username}>
          <Break size={12} />
          <Text size={20} color={userName ? EColors.black : EColors.grey99}>{userName || 'Аноним'}</Text>
        </div>
      </a>
  );
}
