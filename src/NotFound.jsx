import React from 'react'
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div>
        <Link to='/home'>
            <h1 className='text-3xl text-white bg-black min-h-screen'>404 Not Found</h1>
        </Link>
    </div>
  )
}

export default NotFound