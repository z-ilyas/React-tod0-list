import React from "react";
import { useState } from "react";
import { useDispatch } from "react";

function app () {
    const [ task, setTask ] = useState('');
    const [ status, setStatus ] = useState('');

    const dispatch = useDispatch();

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
        </>
    );   
}
export default app;