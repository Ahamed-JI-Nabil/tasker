import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDo = () => {

    const [tasks, setTasks] = useState([])

    const url = 'http://localhost:5000/tasks'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data);

            })
    }, [])


    return (
        <div>
            <div className="card justify-center items-center">
                <div className="card-body w-96">
                    <div>
                        {
                            tasks.map(task => <Task
                                key={task._id}
                                task={task}
                            ></Task>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;