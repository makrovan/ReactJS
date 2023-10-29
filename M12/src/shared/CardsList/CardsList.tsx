import React, { useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {IPostData} from "../context/postsContext";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

export function CardsList() {
    // раньше было так:
    // const { list } = useContext(postsContext);

    // теперь так:
    const token = useSelector<RootState>(state => state.token);
    const [posts, setPosts] = useState<IPostData[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState('');
    const [countOfIntersecting, setCountOfIntersecting] = useState(0);
    const [endOfList, setEndOfList] = useState(false);

    const bottomOfList = useRef<HTMLDivElement>(null);

    async function load() {
        setLoading(true);
        setErrorLoading('');
        try {
            const {data : {data: {after, children} }} = await axios.get(
                'https://oauth.reddit.com/best/', {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                });

            console.log(after);
            setNextAfter(after);
            setPosts(prevChildren => prevChildren.concat(...children));
            // console.log('response', posts);
        } catch (error) {
            // console.log(error);
            setErrorLoading(String(error));
        }
        setLoading(false);
    }

    useEffect(() => {
        if (!token || token === 'undefined') return;

        if (nextAfter === null) {
            console.log('end...');
            const myButton = document.getElementById('button');
            if (myButton) {
                myButton.style.visibility = 'hidden';
            }
            setCountOfIntersecting(4);
            setEndOfList(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && (countOfIntersecting < 3)) {
                setCountOfIntersecting(countOfIntersecting + 1);
                console.log(countOfIntersecting);
                load();
            } else if (entries[0].isIntersecting && (countOfIntersecting === 3)) {
                const myButton = document.getElementById('button');
                if (myButton) {
                    myButton.style.visibility = 'visible';
                }
            }
        }, {
            rootMargin: '100px'
        })

        if(bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if(bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }

    }, [bottomOfList.current, nextAfter, token]);

    function handleButtonClick() {
        console.log('clicked!!!');
        const myButton = document.getElementById('button');
        if (myButton) {
            myButton.style.visibility = 'hidden';
        }
        setCountOfIntersecting(1);
        load();
    }

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: 'center'}}>Список постов пуст</div>
            )}
            { posts?.map((postData) =>
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

            <div ref={bottomOfList}/>
            {loading && (
                <div style={{textAlign: 'center'}}>Загрузка...</div>
            )}

            {errorLoading && (
                <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>
            )}

            {endOfList && (
                <div role='alert' style={{textAlign: 'center'}}>Список окончен...</div>
            )}

            <div style={{textAlign: 'center', }}>
                <button id = 'button' className = {styles.button} onClick = {handleButtonClick}>
                    Загрузить еще...
                </button>
            </div>
        </ul>
    );
}
