import { all } from 'redux-saga/effects';
import createTask from './task.saga';

export default function* rootSaga() {
    yield all([
        createTask(),
        
    ]);
}