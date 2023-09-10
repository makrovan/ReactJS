import React from "react";

export function withKey(key?: string) {
    return <P extends {}, T extends React.ComponentType<P>>(component: T) =>
        (props: P, index: number) =>
            React.createElement(
                component,
                {...props, key: key ? props[key as keyof P] : index},
                [],
            );
}

export const withIdKey = withKey('id');
// const withIndexKey = withKey();
