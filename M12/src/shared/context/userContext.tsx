import React from "react";
import {useUserData} from "../../hooks/useUserData";
import {IUserData} from "../../store/me/actions";

export interface IUserContextData {
    data: IUserData,
    loading: boolean
}
export const userContext =
    React.createContext<IUserContextData>({
        data: {},
        loading: false,
    });

export function UserContextProvider({children} : {children: React.ReactNode}){
    const data = useUserData();

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}