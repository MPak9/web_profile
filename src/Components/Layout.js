import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


//Skeleton Container to keep proper theme & styles throughout
const Layout = () => {

  let navigate = useNavigate();

  return (
    <div className='app-container'>
        <header>
            <div>MP</div>
            <nav>
              <span className='clickable' onClick={()=>{navigate('/Home/Notes')}}>Notes</span>
              <span className='clickable' onClick={()=>{navigate('/Home/Projects')}} >Projects</span>
  
            </nav>
        </header>
        <Outlet />
    </div>
  )
}

export default Layout