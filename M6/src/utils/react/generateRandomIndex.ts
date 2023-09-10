//nanoid

import {assoc} from "../ts/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

//вызывается лишь один раз, когда вызываем модуль:
export const assignId = assoc('id', generateRandomString());

//вызывается каждый раз, когда вызываем функцию:
export const generateId = <O extends object>(obj: O) => assoc('id',generateRandomString())(obj);
//example:
// const LIST = [
//     {value: 'some'},
//     {value: 'some2'},
//     {value: 'some3'}
// ].map(assignId);
