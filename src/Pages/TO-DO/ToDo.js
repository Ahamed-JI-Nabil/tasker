import React from 'react';
import useTasks from '../Hooks/useTasks';
import Task from './Task';

const ToDo = () => {

    const [tasks] = useTasks([])


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