import React from 'react'
import { useNavigate } from 'react-router-dom'


const ListItem = ({item, hideTitle}) => {
    let navigate = useNavigate();

  return (
    <div className='list-item-grid'>
        <div className='clickable' onClick={()=>{navigate(item.link)}} style={{backgroundColor:item.color}}>
            <img src={item.cover}/>
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