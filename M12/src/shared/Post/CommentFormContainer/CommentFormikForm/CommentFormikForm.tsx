import React from 'react';
import styles from './commentformikform.css';
import {Field, Form, Formik} from "formik";
import {useStoreActions, useStoreState} from "easy-peasy";
import {StoreModel} from "../../../../store/easyPeasyStore";
// import {myTextState} from "../CommentFormContainer";

function validateCommentText(value: string): string | undefined {
    if (!value) {
        return 'Необходимо ввести текст';
    } else if (value.length < 4) {
        return 'Сообщение должно быть длиннее 3-х символов';
    }
}

interface ICommentFormikFormProps {
    onSummit: (values: {commentText: string}) => void;
}

export function CommentFormikForm({onSummit}: ICommentFormikFormProps) {
    const myText = useStoreState<StoreModel>(state => state.item);
    const mySet = useStoreActions<StoreModel>(action => action.set);

    return (
      <Formik
          initialValues={{
              commentText: '',
          }}
          onSubmit={(values, {resetForm}) => {
              mySet(values.commentText);
              onSummit(values);
              resetForm({});
          }}
      >
          {({errors, touched}) => (
              <Form className={styles.form}>
                  <Field
                      className={styles.input}
                      name='commentText'
                      type = 'text'
                      validate = {validateCommentText}
                  />
                  {errors.commentText && touched.commentText && (
                      <div className={styles.error}>{errors.commentText}</div>
                  )}
                  <button className={styles.button} type="submit">
                      Комментировать
                  </button>
                  <div>Текст в Easy Peasy State-е: {myText}</div>
              </Form>
          )}
      </Formik>
  );
}
