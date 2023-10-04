import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Journal = ({id, subtitle, tags, cover, summary, children}) => {

  return (
    <section  className='journal-container'>
        <h3>{id}</h3>
        <h4>{subtitle}</h4>
        <div className='tag-bar'>
          {tags.map((tag)=><span className='active-tag' >{tag}</span>)}
        </div>
        {cover != '' ? 
          <figure className='cover'>
            <img src={cover} />           
          </figure>
          :''
        }
        <summary>
          {summary}
        </summary>
        <main className='flex-row-container'>
            {children}
        </main>
    </section>
  )
}

export default Journal

Journal.defaultProps = {
  id:'',
  subtitle:'',
  tags:[],
  cover:'',
  summary:'',
  
}