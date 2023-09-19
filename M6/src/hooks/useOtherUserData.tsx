import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../shared/context/tokenContext";
import axios from "axios";


interface IOtherUserData {
    name?: string;
    iconImage?: string;
    url?: string;
}

export function useOtherUserData(username: string) {
    const token = useContext(tokenContext);

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