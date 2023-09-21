import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store";


interface IOtherUserData {
    name?: string;
    iconImage?: string;
    url?: string;
}

export function useOtherUserData(username: string) {
    const token = useSelector<RootState, string>(state => state.token);

    const [data, setData] = useState<IOtherUserData>({});
    useEffect(() => {
        axios.get(
            `https://oauth.reddit.com/user/${username}/about.json?redditWebClient=desktop2x&app=desktop2x-client-production&gilding_detail=1&awarded_detail=1&raw_json=1`, {
                headers: {Authorization: `bearer ${token}`}
            })
            .then((resp) => {
                setData({
                    name: resp.data.data.name,
                    iconImage: resp.data.data.snoovatar_img,
                    url: `https://www.reddit.com/user/${resp.data.data.name}`
                });
            })
            .catch()
    }, [token]);
    return [data];
}