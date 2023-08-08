import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function app () {
    const [ task, setTask ] = useState('');
    const [ status, setStatus ] = useState('');
    const tasks = useSelector((store) => store.allTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'SAGA_FETCH_ALL_TASKS'
        })
      }, []);

    const submitTask = () => {
        dispatch ({
            type: 'SAGA_CREATE_TASK',
            payload: {
                task: task,
                status: status
            }
        })
        setTask('');
        setStatus('');
    }

    const completeTask = (id) => {
        dispatch ({
            type: 'SAGA_COMPLETE_TASK',
            payload: id
        })
    }

    const deleteTask = (id) => {
        dispatch ({
            type: 'SAGA_DELETE_TASK',
            payload: id
        })
    }

    return(
        <>
            <div>
                <h1>To-Do List</h1>
            </div>
            <div>
                <input 
                    placeholder="Write your Task"
                    type="text" 
                    value={task}
                    required
                    onChange={(event) => setTask(event.target.value)}
                />
                <input 
                    placeholder="Pending or Complete"
                    type="text" 
                    value={status}
                    required
                    onChange={(event) => setStatus(event.target.value)}
                />
                <button onClick={submitTask}>Submit</button>
            </div>
            <div>
                <h1> All Tasks</h1>
                <ul>
                    {tasks.map(Task => {
                        return(
                            <li key={Task.id}>
                                {Task.tasks} - {Task.status} - <button onClick={() => completeTask(Task.id)}>Complete</button> - <button onClick={() => deleteTask(Task.id)}>Delete</button>
                            </li>
                        )})}
                </ul>
            </div>
        </>
    );   
}
export default app;