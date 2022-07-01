import React from 'react';

const UpdateModal = ({ task, setModal }) => {
    const { _id, name, isDone } = task

    const handleUpdate = event => {
        event.preventDefault()

        const updatedTask = event.target.name.value;

        const updateTask = { _id, name: updatedTask, isDone }
        console.log(updateTask);

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        })
            .then(res => res.json())
            .then(data => {
                setModal(null)
                console.log(data)
            })
    }

    // console.log(task);


    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" defaultValue={name} required name="name" className="input input-bordered w-full max-w-xs text-black" />
                        <input type="submit" value="Update" className="btn bg-gradient-to-r from-indigo-500 via-red-400 to-indigo-500 mt-6" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;