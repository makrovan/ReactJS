import React, {useContext} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";

export function SearchBlock() {
    const {iconImage, name} = useContext(userContext);
  return (
      <div className={styles.searchBlock}>
          <UserBlock avatarSrc={iconImage} userName={name}/>
      </div>
  );
}
