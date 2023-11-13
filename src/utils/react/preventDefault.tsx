import React from "react";
import {stopPropagation} from "./stopPropagation";

export function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
    }
}

export const preventAll = <T extends (e: any) => void>(fn: T) =>
    preventDefault(stopPropagation(fn));