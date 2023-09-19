import React, {useState} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postsContext";
import {commentContext} from "./shared/context/commentContext";

function AppComponent(){
    const [ token] = useToken();
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider;
    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <tokenContext.Provider value={token}>
                <UserContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <PostContextProvider>
                                <CardsList />
                            </PostContextProvider>
                        </Content>
                    </Layout>
                </UserContextProvider>
            </tokenContext.Provider>
        </CommentProvider>
    );
}

//для вызова хуков AppComponent переделываем в функцию:
export const App = hot(() => <AppComponent />);

//из-за вызова hot App преобразуется в класс
// export const App = hot(<AppComponent />);