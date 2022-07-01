import React, { useState } from 'react';

const Task = ({ task }) => {
    const { name } = task

    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <div className='flex my-4'>
                <input type="checkbox" checked={clicked ? 'checked' : ''} className="checkbox mr-3" onClick={() => setClicked(!clicked)} />
                <p className={clicked ? "line-through" : ""}>{name}</p>
            </div>
        </div>
    );
};

export default Task;