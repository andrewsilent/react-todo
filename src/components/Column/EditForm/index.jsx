import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { INPUT_SCHEMA } from '../../../utils/validation';
import styles from './EditForm.module.scss';
import cx from 'classnames';
import useInitialValues from '../../../hooks/useInitialValues';

const EditForm = props => {
  const { action, placeholder, type, edit, element, column } = props;
  const [timerID, setTimerID] = useState();
  const initialValues = useInitialValues(type, element, column);
  
  const onFocus = () => {
    setTimeout(() => clearTimeout(timerID), 0);
  };

  const onBlur = () => {
    const timer = setTimeout(edit, 250);
    return setTimerID(() => timer);
  };

  const classNames = (errors, touched) =>
    cx(styles.input, { [styles.invalid]: errors.body && touched.body });

  // const onFocus = e => (e.target.selectionStart = e.target.value.length);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={INPUT_SCHEMA}
      onSubmit={(values, { resetForm }) => {
        action(values);
        edit();
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.addTask}>
          <div className={styles.wrapper}>
            <Field
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              as='textarea'
              name='body'
              placeholder={placeholder}
              className={classNames(errors, touched)}
              rows='3'
            ></Field>
            <ErrorMessage name='body' component='div' className={styles.errorMessage}
            />
          </div>
          <div className={styles.formControls}>
            <button type='submit' className={styles.submit} onFocus={onFocus} onBlur={onBlur}>
              Save
            </button>
            <button type='reset' className={styles.reset} onClick={edit}></button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
