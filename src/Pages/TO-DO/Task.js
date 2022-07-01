import React, { useState } from 'react'
import remove from '../../images/cancel.png'
import useTasks from '../Hooks/useTasks';
import UpdateModal from './UpdateModal';


const Task = ({ task }) => {
    const { _id, name, isDone } = task

    const [setClicked] = useState(false)

    const [tasks, setTasks] = useTasks([])

    const [modal, setModal] = useState(null)

    const handleIsDone = () => {

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
                setClicked(true)
                console.log(data)
            })

    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this task?')
        if (proceed) {
            fetch(`http://localhost:5000/tasks/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tasks.filter(item => item._id !== id)
                    setTasks(remaining)
                })
        }
    }


    return (
        <div>
            <div className='flex items-center my-2 border-solid rounded-lg border-2 border-sky-500 p-3  w-96'>
                <input type="checkbox" checked={isDone ? 'checked' : ''} className="checkbox mr-3" onClick={() => handleIsDone()} />
                <p className={isDone ? "line-through" : ""}>{name}</p>
                <label onClick={() => setModal(task)} for="purchase-modal" disabled={isDone && true} className='btn btn-xs mr-3 btn-primary modal-button'>Update</label>
                <img onClick={() => handleDelete(_id)} src={remove} alt="remove icon" className='w-4 h-4 cursor-pointer' />
                {
                    modal && <UpdateModal
                        key={_id}
                        task={task}
                        setModal={setModal}
                    ></UpdateModal>
                }
            </div>
        </div>
    );
};

export default Task;