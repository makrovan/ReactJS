import React, {useEffect, useState} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer, setTokenRequestAsync} from "./store/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter, Navigate, NavLink, Route, Routes, useParams} from "react-router-dom";
import {Post} from "./shared/Post";
import {createStore, StoreProvider} from "easy-peasy";
import {storeModel, StoreModel} from "./store/easyPeasyStore";
// import styles from "./shared/CardsList/Card/TextContent/Title/title.css";
// import {setTokenRequestAsync} from "./store/me/actions";

// const logger: Middleware = (_store) => (next) => (action) => {
//     console.log('dispatching:', action);
//     next(action);
//     // const nextValue = next({...action, name: 'Anton'});
//     // console.log('action after next:', nextValue);
// }

const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

// const timeout = (ms: number):ThunkAction<void, RootState, unknown, Action<string>> =>
//     (dispatch, _getState) => {
//     dispatch({ type: 'START'});
//     setTimeout(() => {
//         dispatch({type: 'FINISH'})
//     }, ms);
// }

// interface StoreModel {
//     item: string,
//     add: Action<string>,
// }

const easy_peasyStore = createStore<StoreModel>(storeModel);

function AppComponent(){
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        store.dispatch(setTokenRequestAsync() as any);
        setMounted(true);
        // store.dispatch(timeout(3000));
    }, []);

    function MyPost() {
        const myId = useParams().id;
        if (myId) {
            return (<Post postId = {myId} />)
        } else {
            return <></>
        }
    }

    return (
        <Provider store={store}>
            <StoreProvider store={easy_peasyStore}>
                {mounted &&
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Navigate to="/posts" />} />
                            <Route path="/auth" element={<Navigate to="/posts" />} />
                            <Route path="/posts" element = {
                                <UserContextProvider>
                                    <Layout>
                                        <Header />
                                        <Content>
                                            <PostsContextProvider>
                                                <CardsList />
                                            </PostsContextProvider>
                                        </Content>
                                    </Layout>
                                </UserContextProvider>} />

                            <Route path="/posts/:id" element = {
                                <UserContextProvider>
                                    <Layout>
                                        <Header />
                                        <Content>
                                            <PostsContextProvider>
                                                <CardsList />
                                                <MyPost />
                                            </PostsContextProvider>
                                        </Content>
                                    </Layout>
                                </UserContextProvider>} />

                            <Route path="*" element = {
                                <NavLink style={{textAlign: 'center'}} to="/">404 - страница не найдена...</NavLink>
                            } />
                        </Routes>
                    </BrowserRouter>
                }
            </StoreProvider>
        </Provider>
    );
}
// { isModalOpen && ( <Post postId={postId} onClose={() => { setIsModalOpen(false) }}/> )}

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
