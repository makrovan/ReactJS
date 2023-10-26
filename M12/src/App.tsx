import React, {useEffect} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import { applyMiddleware, legacy_createStore, Middleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer, setTokenRequestAsync} from "./store/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
// import {setTokenRequestAsync} from "./store/me/actions";

const logger: Middleware = (_store) => (next) => (action) => {
    console.log('dispatching:', action);
    next(action);
    // const nextValue = next({...action, name: 'Anton'});
    // console.log('action after next:', nextValue);
}

const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk),
));

// const timeout = (ms: number):ThunkAction<void, RootState, unknown, Action<string>> =>
//     (dispatch, _getState) => {
//     dispatch({ type: 'START'});
//     setTimeout(() => {
//         dispatch({type: 'FINISH'})
//     }, ms);
// }

function AppComponent(){
    useEffect(() => {
        store.dispatch(setTokenRequestAsync() as any);
        // store.dispatch(timeout(3000));
    }, []);

    return (
        <Provider store={store}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <PostsContextProvider>
                            <CardsList />
                        </PostsContextProvider>
                    </Content>
                </Layout>
            </UserContextProvider>
        </Provider>
    );
}

//для вызова хуков AppComponent переделываем в функцию:
export const App = hot(() => <AppComponent />);

// const [ token] = useToken();
// const [commentValue, setCommentValue] = useState('');

// const CommentProvider = commentContext.Provider;

//из-за вызова hot App преобразуется в класс
// export const App = hot(<AppComponent />);

// <Provider store={store}>
//{/*// <CommentProvider value={{*/}
//{/*//     value: commentValue,*/}
//{/*//     onChange: setCommentValue,*/}
//{/*// }}>*/}
//{/*// </CommentProvider>*/}
// </Provider>
