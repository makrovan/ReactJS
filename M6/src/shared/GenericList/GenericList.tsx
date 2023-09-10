import React from "react";
import {noop} from "../../utils/ts/noop";

interface IItem {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    iconSvg?: React.ReactNode;
}
interface IGenericListProps {
    list: IItem[];
}

// export function MyList({list}: IMyListInterface) {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//             ))}
//         </ul>
//     );
// }

export function GenericList( { list } : IGenericListProps) {
    return (
        <>
            { list.map(({ As = 'div', text, onClick = noop, className, id, href, iconSvg }) => (
                <As
                    className = {className}
                    onClick = {() => onClick(id)}
                    key = {id}
                    href = {href}
                >
                    {iconSvg}
                    {text}
                </As>
            ))}
        </>
    );
}