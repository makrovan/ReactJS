import {ActionCreator, AnyAction, Reducer} from "redux";

export type RootState = {
    token: string;
}
const initialState: RootState = {
    token: '',
}
const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token,
});
export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
}

// const store = useStore<RootState>();
// const reduxToken = store.getState().reduxToken;
// const reduxToken = useSelector<RootState, string>(state => state.token);
