import React, { useState } from 'react'
import ListItem from './ListItem';

/*
React Component Filter Tag system for the list of projects and notes on the homepage
*/
const FilterList = ({id, listArray, tags, hideTitle}) => {

  const [filter, setFilter] = useState('All');

  return (
    <div>
        <h4>{id == 'Notes' ? 'Topics' : id == 'Projects' ? 'Tools' : 'Tools' }</h4>
        <div className='tag-filter-bar'>
            {tags.map((tag)=><span className={tag == filter ? 'active-tag' : 'unactive-tag'} onClick={()=>{setFilter(tag)}}>{tag}</span>)}
        </div>

        <div className='scrollable-container'>
            {listArray.filter((item) => {
                if(filter == 'All') return true;

                let matches = false;

                item.tag.forEach((element)=> {
                    if(element == filter) {
                        console.log("FILTER: " + filter);
                        console.log(item.name + " tag: " + element);
                        return matches = true;
                    }
                })

                return matches;
            
            }).map((item) =><ListItem item={item} hideTitle={hideTitle}/>)}
        </div>
    </div>
  )
}

export default FilterList

