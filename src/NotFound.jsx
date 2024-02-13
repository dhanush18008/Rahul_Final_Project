import React from 'react'
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div>
        <Link to='/'>
            <h1 className='text-3xl text-emerald-300'>404 Not Found</h1>
        </Link>
    </div>
  )
}

export default NotFound