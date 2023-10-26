import React from 'react';
import styles from './menu.css';
import {ReactComponent as MenuButtonSvg} from "../../../assets/menuButton.svg";
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {EColors, Text} from "../../../Text";

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
                  <MenuItemsList postId={'postId'}/>
                  <button className={styles.closeButton}>
                      <Text size={14} mobileSize={12} color={EColors.grey66}>Закрыть</Text>
                  </button>
              </div>
          </Dropdown>
      </div>
  );
}
