import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardsList() {
    const { list } = useContext(postsContext);

    return (
        <ul className={styles.cardsList}>
            { list?.map((postData) =>
                <Card
                    key={postData.data.id}
                    id={postData.data.id}
                    title={postData.data.title}
                    postUrl={`https://www.reddit.com${postData.data.permalink}`}
                    previewImg={postData.data.thumbnail}
                    publishedTime={new Date(postData.data.created * 1000)}
                    commentNumber={postData.data.num_comments}
                    karmaValue={postData.data.score}
                    name={postData.data.author}
                    link={`https://www.reddit.com/user/${postData.data.author}`}
                    photo={postData.data.author}
                />)}
        </ul>
  );
}
