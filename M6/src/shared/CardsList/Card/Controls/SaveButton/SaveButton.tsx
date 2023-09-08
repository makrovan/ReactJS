import React from 'react';
import styles from './savebutton.css';
import {ReactComponent as SaveButtonSvg} from '../../../../assets/saveButton.svg';

export function SaveButton() {
  return (
      <button className={styles.saveButton}>
          <SaveButtonSvg />
      </button>
  );
}
