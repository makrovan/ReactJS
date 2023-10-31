import React from 'react';
import styles from './title.css';
import {generatePath, Link} from "react-router-dom";

interface ITitle {
    post: string;
    postUrl: string;
    postId: string;
}

export function Title({ post, postId }: ITitle) {

    return (
        <h2 className={styles.title}>
            {/*href= {postUrl} onClick={() => {setIsModalOpen(true)}}*/}
            <Link className={styles.postLink} to={generatePath("/posts/:id", {id: postId})}>
                {post}
            </Link>
        </h2>
    );
}