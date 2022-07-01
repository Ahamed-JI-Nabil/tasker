import React from 'react';
import ToDo from '../TO-DO/ToDo';
import AddTask from './AddTask';

const Home = () => {
    return (
        <div>
            <ToDo></ToDo>
            <AddTask></AddTask>
        </div>
    );
};

export default Home;