import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

export interface IPost {
    author?: string;
    created?: number;
    title?: string;
    body?: string;
    count?: number;
    id: string;
    replies?: IPostDataList | '';
}

export interface IPostDataList {
    data: {
        children: Array<{
            data: IPost;
        }>;
    };
}

export interface IPostComments extends Array<IPostDataList>{
    // [n: number] : IPostDataList
}

export function usePostComments(postId: string) {
    const token = useSelector<RootState, string>(state => state.token);

    const [postComments, setPostComments] =
        useState<IPostComments>(new Array<IPostDataList>());

    useEffect(() => {
        axios.get(
            `https://oauth.reddit.com/comments/${postId}`, {
                headers: {Authorization: `bearer ${token}`}
            })
            .then((resp: AxiosResponse<IPostComments>) => {
                setPostComments(resp.data);
            })
            .catch(console.log)
    }, [token]);
    return [postComments];
}

// последний эллемент массива comment - перечисление id-ков, он нам не нужен
// проверка того, что в субкоммент-ах что-то есть:
// const try1 = comments[21].replies;
// if ((try1 !== '') && (try1 !== undefined)) {
//     console.log(try1.data.children.length);
// }
// если там пусто, то replies === ''