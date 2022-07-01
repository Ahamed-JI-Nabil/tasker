import React, { useState } from 'react';

const Task = ({ task }) => {
    const { _id, name, isDone } = task

    const [setClicked] = useState(false)

    const handleIsDone = () => {
        setClicked(true)

        const updatedIsDone = { _id, name, isDone: true }
        console.log(updatedIsDone);

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedIsDone),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    return (
        <div>
            <div className='flex my-4'>
                <input type="checkbox" checked={isDone ? 'checked' : ''} className="checkbox mr-3" onClick={() => handleIsDone(_id)} />
                <p className={isDone ? "line-through" : ""}>{name}</p>
            </div>
        </div>
    );
};

export default Task;