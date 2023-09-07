import React from 'react';
import styles from './menu.css';
import { ReactComponent as MenuButtonSvg} from "../../../assets/menuButton.svg";
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";

export function MenuButton() {
  return (
      <button className={styles.menuButton}>
          <MenuButtonSvg />
      </button>
  )
}

export function Menu() {
  return (
      <div className={styles.menu}>
          <Dropdown button={<MenuButton />}>
              <div className={styles.dropdown}>
                  <MenuItemsList />
                  <button className={styles.closeButton}>Закрыть</button>
              </div>
          </Dropdown>
      </div>
  );
}
