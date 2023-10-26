import React from "react";
import {usePostsData} from "../../hooks/usePostsData";


export interface IPost {
    id: string; //id
    title: string; //title
    permalink: string; //postUrl = https://www.reddit.com + permalink
    thumbnail: string; //previewImg
    created: number //timestamp -> Date = publishedTime
    num_comments: number //commentNumber
    score: number //karmaValue

    author: string; //name
    author_fullname: string;
}
export interface IPostData {
    data: IPost
}

export interface IPostsData {
    list?: IPostData[];
}

export const postsContext = React.createContext<IPostsData>({});

export function PostsContextProvider({children} : {children: React.ReactNode}){
    const [postsData] = usePostsData();

    return (
        <postsContext.Provider value={postsData} >
            {children}
        </postsContext.Provider>
    )
}