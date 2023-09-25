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
                <span onClick={()=>{navigate('/Home/Projects')}} >Projects</span>
                <span onClick={()=>{navigate('/Home/Notes')}}>Notes</span>
            </nav>
        </header>
        <Outlet />
    </div>
  )
}

export default Layout