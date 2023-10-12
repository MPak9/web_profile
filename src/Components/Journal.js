import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Journal = ({id, subtitle, tags, cover, summary, children, href, images, footnoteTitle, footnotes}) => {
  let navigate = useNavigate();

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

        <main className='flex-row-container'>
          <summary>{summary}</summary>
          {href != '' ?
            <a className='clickable button' href= {href} target='blank'>VIEW LIVE</a>
            :''
          }
          {children}
          { typeof images[0] !== 'undefined'?
            <ul className='journal-gallery'>
              {images.map((img)=><li><img src={img} /></li> )}
            </ul>
            :''
          }
          
        </main>
        {
        footnotes[0] != '' ?
          <section>
            <hr/>
            <p>{footnoteTitle}</p>
            <ol className='footnotes'>
              {footnotes.map((note)=><li className='clickable' onClick={()=>navigate(note.link)} >
                {note.title}
                <br/>
                <sub>{note.description}</sub>
                </li> )}
            </ol>
          </section>
        :''
        }
        
        

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
  images:[''],
  footnoteTitle:'Related Topics',
  footnotes:[''],
  href:''
  
}