import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
    postId: string;
    isCommentHide: boolean;
    helloText: string;
    onClose?: () => void;
}

export function CommentForm({postId, isCommentHide, helloText, onClose}: ICommentFormProps) {
    const ref = useRef<HTMLTextAreaElement>(null);
    // const {value, onChange} = useContext(commentContext)
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
      <form className={styles.form} onSubmit={handleSubmit}>
          {/**/}
        <textarea className={styles.input} value={value} onChange={handleChange} ref={ref} />
        <button className={styles.button} type="submit">Комментировать</button>
      </form>
  );
}

//НЕКОНТРОЛИРУЕМЫЙ ВВОД:
// useEffect(() => {
//     ref.current?.focus();
//     if (ref.current) {
//         ref.current.value = helloText;
//     }
//     ref.current?.setSelectionRange(ref.current?.value.length,ref.current?.value.length);
// }, [isCommentHide]);
//
// function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     console.log(ref.current?.value);
// }
//
// return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//         <textarea className={styles.input} ref={ref} />
//         <button className={styles.button} type="submit">Комментировать</button>
//     </form>
// );