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
            Designed a website tailored to support the clients media outreach initiative, done in collaboration with a Graphic Designer.The clients mission was to create an inviting online space that reflects the warm and welcoming nature of their Christ-centered church. The website also serves as a valuable resource for current church members, keeping them informed about past, current, and upcoming church activities.To meet their vision, a simple and intuitive website design was implemented, featuring minimalistic accents. This approach ensured user-friendliness while reinforcing a personal and familiar ambiance, consistent with the churchs commitment to creating a welcoming atmosphere for all
          </summary>}
        href={'https://www.gusda.org/'}
    >

    </Journal>
  )
}

export default Project_GUSDA