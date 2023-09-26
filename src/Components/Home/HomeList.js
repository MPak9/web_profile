import React, { useState } from 'react'
import DoubleLayout from './DoubleLayout'
import { useParams } from 'react-router-dom'
import FilterList from './FilterList';
import { projects, project_tags } from '../../JSON/Projects';
import { notes, note_tags } from '../../JSON/Notes';
//Rendered on the right side of the Double Layout
//It renders a list of featured projects
const HomeList = () => {
  let {id} = useParams();
  

  return (
    <DoubleLayout> 
        <h3>{id == 'Notes' ? 'Notes' : id == 'Projects' ? 'Check out my Projects!' : 'Check out my Projects!' }</h3>
        
        {id == 'Notes' 
          ?
         <FilterList id={id} listArray={notes} tags={note_tags}/> 
         : id == 'Projects' 
         ? 
         <FilterList  id={id} listArray={projects} tags={project_tags} hideTitle={true} /> 
         : <FilterList  id={id} listArray={projects} tags={project_tags} hideTitle={true} /> }
    </DoubleLayout>
  )
}

export default HomeList