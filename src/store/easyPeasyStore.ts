import {action, Action} from "easy-peasy";

export interface StoreModel {
    item: string;
    set: Action<StoreModel, string>
}

export const storeModel:StoreModel = {
    item: '',
    set: action((state, payload) => {
        state.item = payload;
    }),
}
