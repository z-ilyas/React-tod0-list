import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllTasks() {
    try {
      const tasks = yield axios.get('/api/task');
      yield put({ type: 'GET_ALL_TASKS', payload: tasks.data});
    } catch (error) {
         console.log('User get request failed', error);
    }
  }

function* allTasks() {
    yield takeLatest('SAGA_FETCH_ALL_TASKS', fetchAllTasks);
  }
  
  export default allTasks;