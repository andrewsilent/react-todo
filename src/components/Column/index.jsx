import React, { useContext, useState } from 'react';
import { AppContext } from '../../contexts';
import Task from '../Task';
import styles from './Column.module.scss';
import EditForm from './EditForm';

const Column = props => {
  const { id, title, tasks } = props.element;
  const [isEdit, setIsEdit] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);
  const { addTask, editColumn, removeColumn } = useContext(AppContext);
  
  return (
    <div className={styles.column}>
      {isEdit ? (
        <EditForm
          action={editColumn}
          type='EDIT_COLUMN'
          edit={() => setIsEdit(!isEdit)}
          element={props.element}
        />
      ) : (
        <div className={styles.header}>
          <h3 className={styles.columnTitle} onClick={() => setIsEdit(!isEdit)}>
            {title}
          </h3>
          <button
            className={styles.options}
            onClick={() => removeColumn({ id: id })}
          >
            <span className={styles.circle}></span>
          </button>
        </div>
      )}
      {tasks.map(task => (
        <Task key={task.id} element={task} />
      ))}
      {isAddTask ? (
        <EditForm
          action={addTask}
          type='ADD_TASK'
          edit={() => setIsAddTask(!isAddTask)}
          element={props.element}
          column={id}
        />
      ) : (
        <p className={styles.addTask} onClick={() => setIsAddTask(!isAddTask)}>
          Add one more task
        </p>
      )}
    </div>
  );
};

export default Column;
