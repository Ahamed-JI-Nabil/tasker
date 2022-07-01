import React from 'react';

const AddTask = () => {

    const handleSubmit = event => {
        event.preventDefault()

        const tasks = {
            name: event.target.task.value,
            isDone: false
        }

        fetch('http://localhost:5000/tasks', {
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


        console.log(event.target.task.value);

    }


    return (
        <div>
            <div class="card justify-center items-center">
                <div class="card-body w-96">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs text-black font-semibold text-lg" name='task' />
                        <button class="btn bg-gradient-to-r from-indigo-500 via-red-400 to-indigo-500 mt-6">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;