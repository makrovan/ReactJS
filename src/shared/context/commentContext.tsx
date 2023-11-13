import React from "react";

export type CommentContextType = {
    value: string;
    onChange: (value: string) => void;
}
export const commentContext = React.createContext<CommentContextType>({
    value: '',
    onChange: () => {}
});