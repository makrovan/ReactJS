import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
// import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
// import {GenericList} from "./shared/GenericList/GenericList";
// import {merge} from "./utils/ts/merge";
// import {Dropdown} from "./shared/Dropdown";

// import {useIsMounted} from "./utils/react/UseIsMounted";
// import {getValue} from "./utils/react/PickFromSyntheticEvent";

// const LIST = [
//     {text: 'some', As: 'li' as const },
//     {text: 'some2', As: 'li' as const },
//     {text: 'some3', As: 'li' as const }
// ].map(generateId)

function AppComponent(){
    // const [title, setTitle] = React.useState('');
    // const [isVisible] = useIsMounted();

    // const [list, setList] = React.useState(LIST)
    // const handleClick = (id: string) => {
    //     // console.log((id));
    //     setList(list.filter((item) => item.id !== id));
    // }

    // const handleAdd = () => {
    //     setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})));
    // }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />

                {/*// list={LIST.map((item) =>*/}
                    {/*// ({*/}
                    {/*// ...item,*/}
                    {/*// onClick: () => console.log(item.id),*/}
                    {/*// }))}/>*/}
                {/*// /!*<input type='text' onChange={getValue(setTitle)}/>*!/*/}
                {/*// /!*следующий код заустится только на клиенте:*!/*/}
                {/*// /!*{isVisible && <div style={{width: window.innerWidth}}>{ title }</div>}*!/*/}

                {/*<br/>*/}
                {/*<Dropdown button={<button>Test!</button>}>*/}
                {/*    /!*<CardsList />*!/*/}
                {/*    <button onClick={handleAdd}>Add Element</button>*/}
                {/*    <GenericList list={list.map(*/}
                {/*        merge(*/}
                {/*            { onClick: handleClick }*/}
                {/*        )*/}
                {/*    )}/>*/}
                {/*</Dropdown>*/}
            </Content>
        </Layout>
    );
}

//для вызова хуков AppComponent переделываем в функцию:
export const App = hot(() => <AppComponent />);

//из-за вызова hot App преобразуется в класс
// export const App = hot(<AppComponent />);