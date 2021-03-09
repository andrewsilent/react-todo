import React, { useReducer } from 'react';
import styles from './Taskboard.module.scss';
import { appReducer as reducer } from '../../appReducer.js';

const Taskboard = props => {
  const [state, dispatch] = useReducer(reducer, {
    id: Date.now(),
    column: 0,
    status: 'active',
    title: '',
  });

  const addColumn = () => {
    dispatch({
      type: 'ADD_COLUMN',
      title: 'title of new column',
      columnID: state.column + 1,
    });
  };

  const addTask = () => {
    dispatch({
      type: 'ADD_TASK',
      title: 'title of task',
      id: Date.now(),
    });
  };

  return (
    <section className={styles.taskboard}>
      <div className={styles.column}>
        <h3 className={styles.cardTitle}>Very main important tasks!!!</h3>
        <div className={styles.task}>
          <h4 className={styles.taskTitle}>Do morning excercises</h4>
        </div>
        <div className={styles.task}>
          <h4 className={styles.taskTitle}>Drink water with lemon</h4>
        </div>
        <p className={styles.addTask} onClick={addTask}>
          Add one more task
        </p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.cardTitle}>Not important tasks</h3>
        <div className={styles.task}>
          <h4 className={styles.taskTitle}>Some Task</h4>
        </div>
        <p className={styles.addTask} onClick={addTask}>
          Add one more task
        </p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.cardTitleTpl} onClick={addColumn}>
          Add a column
        </h3>
      </div>
    </section>
  );
};

export default Taskboard;
