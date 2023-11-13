import {useEffect, useState} from "react";
import axios from "axios";
import {IPostsData} from "../shared/context/postsContext";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

export function usePostsData(){
    const token = useSelector<RootState, string>(state => state.token);
    const [postsData, setPostsData] = useState<IPostsData>({});
    useEffect(() => {
        axios.get(
            'https://oauth.reddit.com/best.json?sr_detail=true', {
                headers: {Authorization: `bearer ${token}`}
            })
            .then((resp) => {
                setPostsData({list: resp.data.data.children});
            })
            .catch(console.log)
    }, [token]);
    return [postsData];
}