import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'
import { useNavigate } from 'react-router-dom'

const Project_Toasty = () => {
  let navigate = useNavigate();

  return (
    <Journal 
        id={projects[1].name}
        subtitle={'Web Development Project'}
        cover={'https://cdn.discordapp.com/attachments/1075543412582924378/1156707827927220324/image.png?ex=6515f39c&is=6514a21c&hm=7c0f51d963de7ce0b0a1940ccd0c60e6e816e3524bf8610d3246768c218dbaaf&'}
        tags={projects[1].tag}
        summary={'Toasty is a personal project developed using React JS and vanilla CSS. The website is fully responsive and designed with the intention of being visually appealing with a wholesome charm. The primary goal was to create an attractive platform that communicates the story and value behind the Toasty brand, specifically its value proposition of providing healthy and fufilling sandwiches for busy individuals.'}
    >
 
      <a className='clickable' href= "https://mpak9.github.io/toasty-sandwhich-website/" target='blank'>VIEW LIVE</a>
  
    </Journal>
  )
}

export default Project_Toasty