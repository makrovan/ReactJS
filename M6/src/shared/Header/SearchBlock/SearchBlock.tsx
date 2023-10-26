import React, {useContext} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";

export function SearchBlock() {
    const data = useContext(userContext);
  return (
      <div className={styles.searchBlock}>
          <UserBlock avatarSrc={data.data.iconImage} userName={data.data.name} loading={data.loading}/>
      </div>
  );
}
