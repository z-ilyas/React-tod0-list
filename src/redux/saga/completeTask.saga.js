import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* complete(action) {
    try{
        yield axios.post(`/api/task/${action.payload}`);
    } catch (error) {
        console.log('create Task POST request failed', error);
    }
  }

function* completeTask() {
    yield takeLatest('SAGA_COMPLETE_TASK', complete);
  }
  
  export default completeTask;