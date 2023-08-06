import { all } from 'redux-saga/effects';
import createTask from './task.saga';
import allTasks from './allTasks.saga';

export default function* rootSaga() {
    yield all([
        createTask(),
        allTasks(),
    ]);
}