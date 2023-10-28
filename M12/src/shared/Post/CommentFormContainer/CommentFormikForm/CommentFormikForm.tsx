import React from 'react';
import styles from './commentformikform.css';
import {Field, Form, Formik} from "formik";

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
    return (
      <Formik
          initialValues={{
              commentText: '',
          }}
          onSubmit={(values, {resetForm}) => {
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
              </Form>
          )}
      </Formik>
  );
}
