import React from 'react'
import Journal from '../Journal'
import {projects} from '../../JSON/Projects'
import Wrigley_Long_cover from '../../Images/Wrigley_Long_Cover.png'
import wrigley_img1 from '../../Images/Wrigley_Home_page.png'
import wrigley_img2 from '../../Images/Wrigley_Services_Screenshot.png'

const Project_Wrigley = () => {

    const images = [
        wrigley_img1, wrigley_img2
    ];

  return (
    <Journal
        id={projects[1].name}
        subtitle={'Squarespace Client Project'}
        cover={Wrigley_Long_cover}
        tags={projects[1].tag}
        summary={
            <summary>
               Redesigned a Squarespace website for a construction and inspection company to enhance their online brand presence, focusing on a simple, modern design with a minimal color palette.
            </summary>}
        href={'https://www.wrigleyconsultancy.com/'}
        images={images}
    >
        <p>Color Palette</p>
      <div style={{display:'flex', flexDirection:'row', minHeight:'10rem',  borderRadius:'5%'}}>
        <div style={{flexBasis:'60%', background:'#2f3056', }}/>
        <div style={{flexBasis:'25%', background:'#eaeaee',}}></div>
        <div style={{flexBasis:'15%', background:'#d1ae54',}}/>
      </div>

    </Journal>
  )
}

export default Project_Wrigley