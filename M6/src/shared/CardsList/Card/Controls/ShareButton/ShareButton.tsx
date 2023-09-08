import React from 'react';
import styles from './sharebutton.css';
import { ReactComponent as ShareButtonSvg} from "../../../../assets/shareButton.svg";

export function ShareButton() {
  return (
      <button className={styles.shareButton}>
          <ShareButtonSvg />
      </button>
  );
}
