import React from 'react'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <div>
<ul className='flex flex-row-reverse justify-start font-serif py-4 mr-72 gap-40'>
    <Link to='/manageSkills'>
        <li className='menu-item'>Manage Skills</li> 
    </Link>
    <Link to='/manageEmployee'>
        <li className='menu-item'>Manage Employee</li>
    </Link>
    <Link to='/search-by-skills'>
        <li className='menu-item'>Search Employee By Skills</li>
    </Link>
</ul>

    </div>
  )
}

export default NavBar