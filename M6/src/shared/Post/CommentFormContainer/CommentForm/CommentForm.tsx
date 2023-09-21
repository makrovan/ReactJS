import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSummit: (event: FormEvent) => void;
    ref: React.RefObject<HTMLTextAreaElement>;
}

export function CommentForm({value, onChange, onSummit, ref}: ICommentFormProps) {

    return (
      <form className={styles.form} onSubmit={onSummit}>
        <textarea className={styles.input} value={value} onChange={onChange} ref={ref} />
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