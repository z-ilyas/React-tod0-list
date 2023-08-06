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
                            <li>{Task}</li>
                        )})}
                </ul>
            </div>
        </>
    );   
}
export default app;