import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './Pages/Shared/NavBar';
import Home from './Pages/Home/Home';
import ToDo from './Pages/TO-DO/ToDo';
import Calender from './Pages/Calender/Calender';
import CompletedTasks from './CompletedTasks/CompletedTasks';

function App() {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white lg:h-screen'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/to-do' element={<ToDo></ToDo>}></Route>
        <Route path='/completed-task' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
