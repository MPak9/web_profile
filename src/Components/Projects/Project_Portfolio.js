import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'

const Project_Portfolio = () => {

    const footnotes = [
        {
            title:'Double Flex Layout for Homepage (Coming Soon)',
            link:'',
        },
        {
            title:'Composition: Passing JSX as Children (Coming Soon) ',
            link:'',
        },
        {
            title:'CSS Media Breakpoints: Orientation (Coming Soon)',
            link:'',
        },
    ]


  return (
    <Journal 
    id={projects[0].name}
    subtitle={'Personal Project Documentation Portfolio'}
    cover={'https://cdn.discordapp.com/attachments/1075543412582924378/1163198151000326144/image.png?ex=653eb3b2&is=652c3eb2&hm=bf79121deba8254ad2e172c0a40e59a77120c2c35f7cc02fd34fe60ea8816c8a&'}
    tags={projects[0].tag}
    summary={
      'Summary'
    }
    footnoteTitle={'Project Documentation'}
    footnotes={footnotes}
>

</Journal>
  )
}

export default Project_Portfolio