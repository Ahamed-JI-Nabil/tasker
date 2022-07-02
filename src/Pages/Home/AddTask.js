import React from 'react';
import useTasks from '../Hooks/useTasks';


const AddTask = () => {

    const [setTasks] = useTasks([])

    const handleSubmit = event => {
        event.preventDefault()

        const tasks = {
            name: event.target.task.value,
            isDone: false
        }

        fetch('https://socialist-eds-50299.herokuapp.com/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()

            });

    }


    return (
        <div>
            <div className="card justify-center items-center">
                <div className="card-body w-96 py-1">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input type="text" placeholder="Type here..." className="input input-bordered input-primary w-full max-w-xs text-black font-semibold text-lg" name='task' />
                        <button className="btn bg-gradient-to-r from-indigo-500 via-red-400 to-indigo-500 mt-6">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;