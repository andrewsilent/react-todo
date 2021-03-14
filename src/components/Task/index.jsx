import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts';
import EditForm from '../Column/EditForm';
import styles from './Task.module.scss';

const Task = props => {
  const { id, title } = props.element;
  const [isEdit, setIsEdit] = useState(false);
  const { editTask, completeTask, removeTask } = useContext(AppContext);
  
  return isEdit ? (
    <EditForm
      action={editTask}
      type='EDIT_TASK'
      edit={() => setIsEdit(!isEdit)}
      element={props.element}
    />
  ) : (
    <div className={styles.task} tabIndex='0'>
      <h4 className={styles.taskTitle} onClick={() => setIsEdit(!isEdit)}>
        {title}
      </h4>
      <button
        className={styles.complete}
        onClick={() => completeTask({ id: id })}
      ></button>
      <button
        className={styles.remove}
        onClick={() => removeTask({ id: id })}
      ></button>
    </div>
  );
};

export default Task;
