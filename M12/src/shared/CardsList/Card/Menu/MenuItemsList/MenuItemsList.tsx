import React from 'react';
import styles from './menuitemslist.css';
import {generateId} from "../../../../../utils/react/generateRandomIndex";

import {ReactComponent as CommentButtonSvg} from '../../../../assets/commentButton.svg'
import {ReactComponent as ShareButtonSvg} from '../../../../assets/shareButton.svg';
import {ReactComponent as SaveButtonSvg} from '../../../../assets/saveButton.svg'
import {ReactComponent as HideButtonSvg} from '../../../../assets/hideButton.svg';
import {ReactComponent as AbuseButtonSvg} from '../../../../assets/abuseButton.svg';
import {merge} from "../../../../../utils/ts/merge";
import {EColors, Text} from "../../../../Text";


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
    onClick: (id: string) => void;
}

interface IMenuListProps {
    list: IMenuItem[];
}

function MenuList( { list } : IMenuListProps) {
    return (
        <>
            { list.map(({ text, children, id, onClick }) => (
                <div key = {id} onClick = {() => onClick(id)}>
                    <div className={styles.menuItem}>
                        {children}
                        <Text size={12} color={EColors.grey99}>{text}</Text>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            ))}
        </>
    );
}

const handleClick = (id: string) => {
        // console.log((id));
    }

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({postId} : IMenuItemsListProps) {
  return (
      <div className={styles.menuItemsList}>
        <MenuList list={LIST.map(
            // merge({ onClick: handleClick })
           merge({ onClick: () => handleClick(postId) })
        )}/>
      </div>
  );
}
