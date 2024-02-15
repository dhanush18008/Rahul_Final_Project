import React from 'react'
import NavBar from './NavBar'
import AllEmployees from './AllEmployees'

function FrontPage() {
  return (
    <div className='flex flex-row '>
        <NavBar/>
        <AllEmployees/>

    </div>
  )
}

export default FrontPage