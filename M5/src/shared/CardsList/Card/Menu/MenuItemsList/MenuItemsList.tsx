import React from 'react';
import styles from './menuitemslist.css';
import {generateId} from "../../../../../utils/react/generateRandomIndex";

import { ReactComponent as CommentButtonSvg} from '../../../../assets/commentButton.svg'
import { ReactComponent as ShareButtonSvg} from '../../../../assets/shareButton.svg';
import {ReactComponent as SaveButtonSvg} from '../../../../assets/saveButton.svg'
import {ReactComponent as HideButtonSvg} from '../../../../assets/hideButton.svg';
import {ReactComponent as AbuseButtonSvg} from '../../../../assets/abuseButton.svg';


const LIST = [
  {text: 'Комментарии', children: <CommentButtonSvg />},
  {text: 'Поделиться', children: <ShareButtonSvg />},
  {text: 'Скрыть', children: <HideButtonSvg />},
  {text: 'Сохранить', children: <SaveButtonSvg />},
  {text: 'Пожаловаться', children: <AbuseButtonSvg />},
].map(generateId)

interface IMenuItem {
    id: string;
    text: string;
    children: React.ReactNode;
}

interface IMenuListProps {
    list: IMenuItem[];
}

function MenuList( { list } : IMenuListProps) {
    return (
        <>
            { list.map(({ text, children }) => (
                <div>
                    <div className={styles.menuItem}>
                        {children}
                        <span>{text}</span>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            ))}
        </>
    );
}

export function MenuItemsList() {
  return (
      <div className={styles.menuItemsList}>
        <MenuList list={LIST} />
      </div>
  );
}
