import React from 'react'
import { useNavigate } from 'react-router-dom'


const ListItem = ({item, hideTitle}) => {
    let navigate = useNavigate();

  return (
    <div className='list-item-flex'>
        <div className='clickable' onClick={()=>{navigate(item.link)}} style={{backgroundColor:item.color}}>
            <img src={item.cover}/>  
            <p>{item.link == '' ? 'Coming Soon' : item.name}</p>        
        </div>
        {
            hideTitle ? '' : <p>{item.name}</p>
        } 
        
    </div>
  )
}

export default ListItem

ListItem.defaultProps = {
    hideTitle: false,
}