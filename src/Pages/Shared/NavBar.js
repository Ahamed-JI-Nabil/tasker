import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>
        <li><Link to='/completed-task'>Completed Tasks</Link></li>
        <li><Link to='/to-do'>TO DO</Link></li>
        <li><Link to='/calender'>Calender</Link></li>
    </>

    return (
        <div>
            <div class="navbar lg:px-44 text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className='btn btn-ghost text-xl justify-center'>Tasker</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;