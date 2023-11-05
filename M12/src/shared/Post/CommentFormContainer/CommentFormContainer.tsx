// import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import React from 'react';
// import {CommentForm} from "./CommentForm";
import {CommentFormikForm} from "./CommentFormikForm";

interface ICommentFormContainerProps {
  postId: string;
  isCommentHide: boolean;
  helloText: string;
  onClose?: () => void;
}

// export const charCountState = selector({
//   key: 'charCountState', // уникальный ID
//   get: ({get}) => {
//     const text = get(myTextState)
//     console.log('!!!!');
//     return text.length
//   },
// })

export function CommentFormContainer({ postId, isCommentHide, helloText, onClose}: ICommentFormContainerProps) {
  // const myRef = useRef<HTMLTextAreaElement>(null);
  // const [value, setValue] = useState(helloText)

  // useEffect(() => {
  //   myRef.current?.focus();
  //   myRef.current?.setSelectionRange(myRef.current?.value.length,myRef.current?.value.length);
  // }, [isCommentHide]);

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  // }
  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   console.log(value);
  //   onClose?.();
  // }

  function handleFormikSubmit(values: {commentText: string}): void {
    console.log(values.commentText);
  }

  return (
      // <CommentForm
      //     value={value}
      //     onChange={handleChange}
      //     onSummit={handleSubmit}
      //     myRef={myRef} />
      <CommentFormikForm onSummit={handleFormikSubmit}/>
  );
}
