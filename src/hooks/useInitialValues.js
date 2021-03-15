const initialValues = (type, element, column) => {
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

export default initialValues;
