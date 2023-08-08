import { all } from 'redux-saga/effects';
import createTask from './task.saga';
import allTasks from './allTasks.saga';
import completeTask from './completeTask.saga';
import deleteTask from './deleteTask.saga';

export default function* rootSaga() {
    yield all([
        createTask(),
        allTasks(),
        completeTask(),
        deleteTask()
    ]);
}

