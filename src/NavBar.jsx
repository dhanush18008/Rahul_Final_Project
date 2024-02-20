import React from 'react'
import {Link} from 'react-router-dom';
import './App.css'
function NavBar() {
  return (
    <div className='bg-indigo-900 font-roboto text-xl min-h-screen'>
    <Link to='/home'>    
        <img src='https://img.favpng.com/20/25/19/management-human-resource-analytics-data-business-png-favpng-ZE4L9KqHBQEJWZsr13y3eGhZk_t.jpg' alt="Logo" className="navbar-image px-8 py-3"/>
    </Link>
<ul className='flex flex-col w-48 px-3 justify-center gap-8 py-7 ml-2'>
    <Link to='/home/manageSkills'>
        <li className='menu-item'>Manage Skills</li> 
    </Link>
    <Link to='/home/manageEmployee'>
        <li className='menu-item'>Manage Employee</li>
    </Link>
    <Link to='/home/search-by-skills'>  
        <li className='menu-item'>Search Employee By Skills</li>
    </Link>
</ul>

    </div>
  )
}

export default NavBar