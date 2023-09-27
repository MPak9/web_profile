import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Journal = ({id, subtitle, tags, cover, children}) => {

  return (
    <div  className='journal-container'>
        <h3>{id}</h3>
        <h4>{subtitle}</h4>
        <div className='tag-bar'>
          {tags.map((tag)=><span className='active-tag' >{tag}</span>)}
        </div>
        <div className='cover'>
            <img src={cover} />
        </div>
        <div className='flex-row-container'>
            {children}
        </div>
    </div>
  )
}

export default Journal

Journal.defaultProps = {
  tags:[]
}