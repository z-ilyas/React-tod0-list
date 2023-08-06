import { combineReducers } from 'redux';
import allTasks from './task.reducer';
const rootReducer = combineReducers({
    allTasks,
});

export default rootReducer;