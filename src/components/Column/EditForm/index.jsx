import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './EditForm.module.scss';

const EditForm = props => {
  const { action, placeholder, type, edit, element, column } = props;

  const getInitialValues = () => {
    switch (type) {
      case 'EDIT_TASK':
        return {
          id: element.id,
          column: element.column,
          status: element.status,
          body: element.title,
        };
      case 'EDIT_COLUMN':
        return {
          id: element.id,
          body: element.title,
          tasks: element.tasks,
        };
      case 'ADD_TASK':
        return {
          id: '',
          column: column,
          status: '',
          body: '',
        };
      case 'ADD_COLUMN':
        return {
          id: '',
          body: '',
          tasks: [],
        };
      default:
        return;
    }
  };

  const onFocus = e => (e.target.selectionStart = e.target.value.length);

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values, { resetForm }) => {
        action(values);
        edit();
        resetForm();
      }}
    >
      <Form className={styles.addTask}>
        <div className={styles.wrapper}>
          <Field
            onFocus={onFocus}
            onBlur={() => setTimeout(edit, 250)} // it is not a good solution
            autoFocus
            as='textarea'
            name='body'
            placeholder={placeholder}
            className={styles.input}
            rows='3'
          ></Field>
        </div>
        <div className={styles.formControls}>
          <button type='submit' className={styles.submit}>
            Save
          </button>
          <button type='reset' className={styles.reset} onClick={edit}></button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
