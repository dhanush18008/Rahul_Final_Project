import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function FrontPage() {
  return (
    <div className='flex flex-row'>
        <NavBar/>
        <Outlet/>

    </div>
  )
}

export default FrontPage