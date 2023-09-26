import React, { useState } from 'react'
import DoubleLayout from './DoubleLayout'
import { useParams } from 'react-router-dom'
import FilterList from './FilterList';

//Rendered on the right side of the Double Layout
//It renders a list of featured projects
const HomeList = () => {
  let {id} = useParams();
  
  const projects = [
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'SquareSpace', tag:['SquareSpace']}
  ]
  

  return (
    <DoubleLayout> 
        <h3>{id == 'Notes' ? 'Notes' : id == 'Projects' ? 'Check out my Projects!' : 'Check out my Projects!' }</h3>
        
        <FilterList id={id} listArray={projects} />
    </DoubleLayout>
  )
}

export default HomeList