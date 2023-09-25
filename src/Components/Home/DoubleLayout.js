import React from 'react'
import { Outlet } from 'react-router-dom'

//Composition
//Skeleton container for the double flex layout
//jsx prop.children will be rendered on the right flex container

const DoubleLayout = ({children}) => {
  return (
    <main className='double-container' >
      <section className='left-double-container'>
        <h1>Michelle Pak</h1>
        <h2>Designing web solutions with care</h2>
      </section>
      <section className='right-double-container'>
        {children}
      </section>
    </main>
    
  )
}

export default DoubleLayout