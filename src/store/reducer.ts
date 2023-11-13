import {Action, ActionCreator, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {ThunkAction} from "redux-thunk";

export type RootState = {
    token: string;
    me: MeState;
}
const initialState: RootState = {
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    },
}
const SET_TOKEN = 'SET_TOKEN';
const SET_TOKEN_START = 'SET_TOKEN_START';
type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
type SetTokenStartAction = {
    type: typeof SET_TOKEN_START;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
});

export const setTokenStart: ActionCreator<SetTokenStartAction> = () => ({
    type: SET_TOKEN_START,
});

type MyAction = SetTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction | SetTokenStartAction;
export const rootReducer: Reducer<RootState, MyAction> =
    (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }
}

export const setTokenRequestAsync = ():ThunkAction<void, RootState, unknown, Action<string>> =>
    (dispatch, _getState) => {
        dispatch(setTokenStart());

        const token = (localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined') ?
            localStorage.getItem('token') : window.__token__;
        if (token && token !== 'undefined') {
            dispatch(setToken(token));
            localStorage.setItem('token', token);
        }
    }

// const store = useStore<RootState>();
// const reduxToken = store.getState().reduxToken;
// const reduxToken = useSelector<RootState, string>(state => state.token);
