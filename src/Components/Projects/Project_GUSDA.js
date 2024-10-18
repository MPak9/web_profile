import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'
import GUSDA_Long_Cover from '../../Images/GUSDA_Long_Cover.png'

const Project_GUSDA = () => {
  return (
    <Journal
        id={projects[2].name}
        cover={GUSDA_Long_Cover}
        tags={projects[2].tag}
        summary={
          <summary>
            Designed a website, done in collaboration with a Graphic Designer, to support the client's media outreach initiative. The client's mission was to create an online space that reflects the warm and welcoming nature of their Christ-centered church. The website also serves as a valuable resource for current church members keeping them informed about past, current, and upcoming church activities. Thus to meet their vision for ease of use for both older and younger members, a simple website design was implemented, featuring minimalistic accents. 
          </summary>}
        href={'https://www.gusda.org/'}
    >
      <p>Color Palette</p>
      <div style={{display:'flex', flexDirection:'row', minHeight:'10rem',  borderRadius:'5%'}}>
        <div style={{flexBasis:'60%', background:'#4B207F', }}/>
        <div style={{flexBasis:'5%', background:'#E6E4E8',}}/>
        <div style={{flexBasis:'10%', background:'#101010',}}></div>
        <div style={{flexBasis:'30%', background:'white',}}/>
      </div>
    </Journal>
  )
}

export default Project_GUSDA