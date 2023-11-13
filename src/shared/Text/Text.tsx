import React from 'react';
import styles from './text.css';
import classNames from "classnames";

type TSize = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSize;
  mobileSize?: TSize;
  tabletSize?: TSize;
  desktopSize?: TSize;
  color?: EColors;
  bold?: boolean;
  upperCase?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span', children, size,
    desktopSize, tabletSize, mobileSize,
    color = EColors.black, bold = false, upperCase = false } = props;
  const classes = classNames(
      styles[`s${size}`],
      styles[color],
      { [styles.bold] : bold },
      {[styles.upperCase] : upperCase},
      {[styles[`m${mobileSize}`]]: mobileSize},
      {[styles[`t${tabletSize}`]]: tabletSize},
      {[styles[`d${desktopSize}`]]: desktopSize}
  )
  return (
      <As className={classes}>
        {children}
      </As>
  );
}
