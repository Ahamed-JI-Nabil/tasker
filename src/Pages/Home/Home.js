import React from 'react';
import ToDo from '../TO-DO/ToDo';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-2'>All Tasks</h2>
            <ToDo></ToDo>
            <AddTask></AddTask>
        </div>
    );
};

export default Home;