import React from 'react';
import styles from './karmacounter.css';
import {ReactComponent as TriangleButtonSvg} from '../../../../assets/triangleButton.svg';

interface IKarmaCounterProps {
    karmaValue: number;
}

export function KarmaCounter({karmaValue}: IKarmaCounterProps) {
  return (
      <div className={styles.karmaCounter}>
        <button>
            <TriangleButtonSvg />
        </button>
        <span className={styles.karmaValue}>{karmaValue}</span>
        <button>
            <TriangleButtonSvg className={styles.down} />
        </button>
      </div>
  );
}
