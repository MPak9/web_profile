import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'

const Project_Toasty = () => {
  return (
    <Journal 
        id={'Toasty'}
        subtitle={'Web Development Project'}
        cover={'https://cdn.discordapp.com/attachments/1075543412582924378/1156707827927220324/image.png?ex=6515f39c&is=6514a21c&hm=7c0f51d963de7ce0b0a1940ccd0c60e6e816e3524bf8610d3246768c218dbaaf&'}
        tags={projects[1].tag}
    >
        Hi

    </Journal>
  )
}

export default Project_Toasty