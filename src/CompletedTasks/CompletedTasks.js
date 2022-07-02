import React from 'react';
import { useMatch } from 'react-router';
import useTasks from '../Pages/Hooks/useTasks';
import Task from '../Pages/TO-DO/Task';

const CompletedTasks = () => {

    const [tasks] = useTasks([])

    const match = useMatch('/completed-task')

    return (
        <div className="card justify-center items-center">
            <div className="card-body">
                <div className='grid lg:grid-rows-4 lg:grid-flow-col gap-2'>
                    {match &&
                        tasks.filter(task => task.isDone === true).map(task => <Task
                            key={task._id}
                            task={task}
                        ></Task>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompletedTasks;