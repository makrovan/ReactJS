import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {UserLink} from "./TextContent/UserLink";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

export interface ICardProps {
    id: string; //id
    title?: string; //title
    postUrl?: string; //https://www.reddit.com + permalink
    previewImg?: string; //thumbnail
    publishedTime?: Date //created
    commentNumber?: number //num_comments
    karmaValue?: number //score

    photo?: string;
    name?: string; //author
    link?: string //https://www.reddit.com/user/${name}
}

export function Card(props: ICardProps) {
    const {
        title = 'title',
        postUrl = '#postUrl',
        previewImg = '',
        publishedTime,
        commentNumber = 0,
        karmaValue = 0,
        name = 'author name',
        photo = '',
        link = '#user-url',
        id
    } = props;
  return (
      <li className={styles.card}>
          < TextContent
              publishedTime= {publishedTime?.toLocaleDateString(
                  'ru-ru', {weekday: "short", year:"numeric", month:"short", day:"numeric"})}
              title={title}
              postUrl={postUrl}
              postId={id}
          >
              <UserLink
                  link={photo}
                  name={name}
                  href={link}
              />
          </TextContent>
          <Preview
              previewImg={(previewImg !== 'self' && previewImg !=='nsfw' && previewImg !== 'default' && previewImg !== 'spoiler') ? previewImg :
                  'https://cdn.dribbble.com/users/1171505/screenshots/15253256/media/9195348e7da3886e8269918b952f0466.png'}/>
          {/*заглушка, если нет картинки*/}
          <Menu />
          <Controls commentNumber={commentNumber} karmaValue={karmaValue}/>
      </li>
  );
}
