const allTasks = (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_TASKS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default allTasks;