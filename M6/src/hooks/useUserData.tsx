import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
    name?: string;
    iconImage?: string;
}

export function useUserData() {
    const token = useContext(tokenContext);
    const [data, setData] = useState<IUserData>({});
    useEffect(() => {
        axios.get(
            'https://oauth.reddit.com/api/v1/me', {
                headers: {Authorization: `bearer ${token}`}
            })
            .then((resp) => {
                const userData = resp.data;
                setData({name: userData.name, iconImage: userData.snoovatar_img}); //icon_img
            })
            .catch(console.log)
    }, [token]);

    return [data];
}