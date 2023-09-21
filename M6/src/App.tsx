import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store";
import {Provider} from "react-redux";

const store = legacy_createStore(rootReducer, composeWithDevTools());

function AppComponent(){

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
