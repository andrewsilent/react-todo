import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts';
import EditForm from '../Column/EditForm';
import styles from './Task.module.scss';
import cx from 'classnames';

const Task = props => {
  const { id, column, title, status } = props.element;
  const [isEdit, setIsEdit] = useState(false);
  const { editTask, completeTask, removeTask } = useContext(AppContext);

  const classNames = cx(styles.taskTitle, { [styles.done]: status === 'done' });

  const complete = () => {
    completeTask({ id: id, column: column });
  }

  return isEdit ? (
    <EditForm
      action={editTask}
      type='EDIT_TASK'
      edit={() => setIsEdit(!isEdit)}
      element={props.element}
    />
  ) : (
    <div className={styles.task} tabIndex='0'>
      <h4 className={classNames} onClick={() => setIsEdit(!isEdit)}>
        {title}
      </h4>
      <button
        className={styles.complete}
        title='Complete task'
        onClick={complete}
      >
        ✓
      </button>
      <button
        className={styles.remove}
        title='Remove task'
        onClick={() =>
          setTimeout(() => removeTask({ id: id, column: column }), 100)
        }
      >
        ✗
      </button>
    </div>
  );
};

export default Task;
