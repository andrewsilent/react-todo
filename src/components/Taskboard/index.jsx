import React, { useReducer, useState } from 'react';
import styles from './Taskboard.module.scss';
import { appReducer as reducer } from '../../appReducer.js';
import { AppContext } from '../../contexts';
import response from '../../response/response.json';
import Column from '../Column';
import EditForm from '../Column/EditForm';

const Taskboard = props => {
  const { results } = response;
  const [isEdit, setIsEdit] = useState(false);
  const [state, dispatch] = useReducer(reducer, { data: results });

  const addColumn = params => {
    dispatch({
      type: 'ADD_COLUMN',
      ...params,
    });
  };

  const editColumn = params => {
    dispatch({
      type: 'EDIT_COLUMN',
      ...params,
    });
  };

  const removeColumn = params => {
    dispatch({
      type: 'REMOVE_COLUMN',
      ...params,
    });
  };

  const addTask = params => {
    dispatch({
      type: 'ADD_TASK',
      status: 'ACTIVE',
      ...params,
    });
  };

  const editTask = params => {
    dispatch({
      type: 'EDIT_TASK',
      status: 'EDIT',
      ...params,
    });
  };

  const completeTask = params => {
    dispatch({
      type: 'COMPLETE_TASK',
      ...params,
    });
  };

  const removeTask = params => {
    dispatch({
      type: 'REMOVE_TASK',
      ...params,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addColumn,
        editColumn,
        removeColumn,
        addTask,
        editTask,
        completeTask,
        removeTask,
      }}
    >
      <section className={styles.taskboard}>
        {state.data.map(column => (
          <Column key={column.id} element={column} />
        ))}

        <div className={styles.column}>
          {isEdit ? (
            <EditForm
              action={addColumn}
              type='ADD_COLUMN'
              edit={() => setIsEdit(!isEdit)}
              placeholder='Enter a new column title'
            />
          ) : (
            <h3 className={styles.addColumn} onClick={() => setIsEdit(!isEdit)}>
              Add a column
            </h3>
          )}
        </div>
      </section>
    </AppContext.Provider>
  );
};

export default Taskboard;
