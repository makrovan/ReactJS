import React from "react";
// import {pick, pipe} from "../ts/compose";

export function PickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
        <E extends ((t: T[K]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);
}

export const getValue = PickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = PickFromSyntheticEvent<HTMLInputElement>()("checked");

//реализация через pipe:
//НО НЕ ПАРАМЕТАРИЗИРОВАНО! может быть ошибка с типами
// export const getValueNumber = pipe<number>(
//     pick('currentTarget'),
//     pick('value'),
//     parseInt
// )