import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";
import {IPostsData} from "../shared/context/postsContext";

export function usePostsData(){
    const token = useContext(tokenContext);

    const [postsData, setPostsData] = useState<IPostsData>({});
    useEffect(() => {
        axios.get(
            'https://oauth.reddit.com/best.json?sr_detail=true', {
                headers: {Authorization: `bearer ${token}`}
                // params: {sr_detail: true}
            })
            .then((resp) => {
                setPostsData({list: resp.data.data.children});
            })
            .catch(console.log)
    }, [token]);
    return [postsData];
}