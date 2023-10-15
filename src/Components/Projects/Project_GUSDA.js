import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'

const Project_GUSDA = () => {
  return (
    <Journal
        id={projects[2].name}
        cover={'https://cdn.discordapp.com/attachments/1075543412582924378/1161409340478070835/image.png?ex=653831bc&is=6525bcbc&hm=057f7464a4681b75f12dfbc11c84fa283852cda0c93108f494daee8cf23cc6e1&'}
        tags={projects[2].tag}
        summary={
          <summary>
            Designed a website, done in collaboration with a Graphic Designer, to support the client's media outreach initiative. The client's mission was to create an online space that reflects the warm and welcoming nature of their Christ-centered church. The website also serves as a valuable resource for current church members keeping them informed about past, current, and upcoming church activities. Thus to meet their vision for ease of use for both older and younger members, a simple website design was implemented, featuring minimalistic accents. 
          </summary>}
        href={'https://www.gusda.org/'}
    >

    </Journal>
  )
}

export default Project_GUSDA