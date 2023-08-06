import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postTask() {
    try{
        yield axios.post('/api/task', action.payload);
    } catch (error) {
        console.log('create exercise POST request failed', error);
    }
  }

function* createTask() {
    yield takeLatest('SAGA_CREATE_TASK', postTask);
  }
  
  export default createTask;