import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {CommentForm} from "./CommentForm";

interface ICommentFormContainerProps {
  // postId: string;
  isCommentHide: boolean;
  helloText: string;
  onClose?: () => void;
}

export function CommentFormContainer({ isCommentHide, helloText, onClose}: ICommentFormContainerProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(helloText)

  useEffect(() => {
    ref.current?.focus();
    ref.current?.setSelectionRange(ref.current?.value.length,ref.current?.value.length);
  }, [isCommentHide]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
    onClose?.();
  }

  return (
      <CommentForm
          value={value}
          onChange={handleChange}
          onSummit={handleSubmit}
          myRef={ref} />
  );
}
