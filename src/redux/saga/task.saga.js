import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postTask(action) {
    try{
        yield axios.post('/api/task', action.payload);
        console.log('Should get the new task we are sending to the server', action.payload);
    } catch (error) {
        console.log('create Task POST request failed', error);
    }
  }

function* createTask() {
    yield takeLatest('SAGA_CREATE_TASK', postTask);
  }
  
  export default createTask;