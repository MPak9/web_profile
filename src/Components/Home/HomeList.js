import React, { useState } from 'react'
import DoubleLayout from './DoubleLayout'
import { useParams } from 'react-router-dom'

//Rendered on the right side of the Double Layout
//It renders a list of featured projects
const HomeList = () => {
  let {id} = useParams();

  const [filter, setFilter] = useState('all');
  const [filteredArray, setFilteredArray] = useState([]);

  const projects = [
    {name:'CSS', tag:['CSS', 'HTML']},
    {name:'HTML', tag:['HTML', 'CSS']},
    {name:'React Js', tag:['React JS', 'CSS']},
    {name:'SquareSpace', tag:['SquareSpace']}
  ]
  
  const handleArrayFilter = (tag, original) => {
    console.log(filter);
    if(tag === filter){
        setFilteredArray( original.filter(tag => {
            return tag == filter;
        }));
       
    }
    else{
        setFilteredArray(original);
    }
    
}

  return (
    <DoubleLayout> 
        <h3>{id == 'Notes' ? 'Notes' : id == 'Projects' ? 'Check out my Projects!' : 'Check out my Projects!' }</h3>
        {id == 'Notes' ? 'Notes' : id == 'Projects' ? 'Projects' : 'Projects' }
        <div>
          <span onClick={()=>{setFilter('CSS')}}>CSS</span>
          <span onClick={()=>{setFilter('HTML')}}>HTML</span>
          <span onClick={()=>{setFilter('React JS')}}>React JS</span>
          <span onClick={()=>{setFilter('SquareSpace')}}>Square Space</span>
        </div>

        <p>Filter: {filter}</p>
        <div>
          {projects.filter((proj) =>
          {
            let matches = false;
            proj.tag.forEach((element)=> 
            {
              if(element == filter) {
                console.log("FILTER: " + filter);
                console.log(proj.name + " tag: " + element);
                 return !matches;
              }

            
            })
            return matches;
          
          }).map((proj) => <p>{proj.name}</p>)}
          
          </div>
    </DoubleLayout>
  )
}

export default HomeList