import React from 'react'

const ListItem = ({item, hideTitle}) => {
  return (
    <div className='list-item-grid'>
        <div style={{backgroundColor:item.color}}>

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