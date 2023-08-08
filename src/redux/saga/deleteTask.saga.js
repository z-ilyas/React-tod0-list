import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* Delete(action) {
    try{
        yield axios.delete(`/api/task/${action.payload}`);
    } catch (error) {
        console.log('create Task POST request failed', error);
    }
  }

function* deleteTask() {
    yield takeLatest('SAGA_DELETE_TASK', Delete);
  }
  
  export default deleteTask;