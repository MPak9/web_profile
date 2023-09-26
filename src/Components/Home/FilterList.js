import React, { useState } from 'react'

/*
React Component Filter Tag system for the list of projects and notes on the homepage
*/
const FilterList = ({id, listArray}) => {

  const [filter, setFilter] = useState('all');

  const tags = ['CSS', 'HTML', 'React JS', 'SquareSpace' ];

  const handleTag = (tag) => {


  }

  return (
    <div>
        <h4>{id == 'Notes' ? 'Topics' : id == 'Projects' ? 'Tools' : 'Tools' }</h4>
        <div className='tag-filter-bar'>
            {tags.map((tag)=><span onClick={()=>{setFilter(tag)}}>{tag}</span>)}
        </div>

        <p>Filter: {filter}</p>
        <div className='scrollable-container'>
            {listArray.filter((item) => {
                if(filter == 'all') return true;

                let matches = false;
                item.tag.forEach((element)=> {
                    if(element == filter) {
                        console.log("FILTER: " + filter);
                        console.log(item.name + " tag: " + element);
                        return matches = true;
                    }
                })
                return matches;
            
            }).map((item) => <p>{item.name}</p>)}
        </div>
    </div>
  )
}

export default FilterList