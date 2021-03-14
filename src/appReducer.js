const handlers = {
  ADD_COLUMN: (state, action) => {
    const newState = state;
    const newColmnID = String(Date.now());
    newState.data.push({
      id: newColmnID,
      title: action.body,
      tasks: [],
    });
    return { ...newState };
  },

  EDIT_COLUMN: (state, action) => {
    const newState = state;
    const columnToChange = newState.data.findIndex(
      column => column.id === action.id
    );
    const column = { ...newState.data[columnToChange] };
    const newColumn = { ...column, title: action.body };
    newState.data.splice(columnToChange, 1, newColumn);
    return { ...newState };
  },

  REMOVE_COLUMN: (state, action) => {
    // console.log('remove column');
    return { ...state };
  },
  ADD_TASK: (state, action) => {
    console.log('action', action);
    const newState = state;
    const newTaskID = String(Date.now());
    newState.data
      .filter(column => column.id === action.column)
      .map(column =>
        column.tasks.push({
          id: newTaskID,
          column: action.column,
          status: action.status,
          title: action.body,
        })
      );
    return { ...newState };
  },
  EDIT_TASK: (state, action) => {
    const newState = state;
    const columnToChange = newState.data.findIndex(
      column => column.id === action.column
    ); // index of column
    const column = { ...newState.data[columnToChange] }; // the column
    const taskToChange = column.tasks.findIndex(task => task.id === action.id); // index of task
    const task = { ...column.tasks[taskToChange] }; // the task
    const newTask = { ...task, title: action.body }; // new task - old task with modified text
    column.tasks.splice(taskToChange, 1, newTask);
    const newColumn = { ...newState.data[columnToChange], tasks: column.tasks }; // new column - old column with modified tasks array
    newState.data.splice(columnToChange, 1, newColumn);
    return { ...newState };
  },
  COMPLETE_TASK: (state, action) => {
    console.log('complete task');
    return { ...state };
  },
  REMOVE_TASK: (state, action) => {
    console.log('remove task');
    return { ...state };
  },
};

export const appReducer = (state, action) =>
  handlers[action.type](state, action);
