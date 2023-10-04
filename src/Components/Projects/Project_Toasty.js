import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'
import { useNavigate } from 'react-router-dom'

const Project_Toasty = () => {
  let navigate = useNavigate();

  const images = [
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056208268697630/image.png?ex=65173811&is=6515e691&hm=311c324309d67bf173a5a234f057bbcbbb25ee8a7a70884068f5de59dccfbbd8&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056346332614687/image.png?ex=65173832&is=6515e6b2&hm=bd95d4f3d4a4b7f349a62ac49123472bd690d1878aaa02134b3409278aa045cd&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1159164650299080865/image.png?ex=651ee3b4&is=651d9234&hm=c5c4c7ccf633881694536fef806c957081227d634cd796447c1af87f7a4209ae&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056607084105748/image.png?ex=65173870&is=6515e6f0&hm=f2a1d59b8d8d4a7dca84e1f31050b97500d9d2c6b35b8522abc7c0a176751a6a&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056752848740372/image.png?ex=65173892&is=6515e712&hm=e7b7c38f36dd71def5d5b2249ae5db3d9682d751199bfc7ea2ad183d25fff10f&'
  ]

  return (
    <Journal 
        id={projects[1].name}
        subtitle={'Web Development Project'}
        cover={'https://cdn.discordapp.com/attachments/1075543412582924378/1156707827927220324/image.png?ex=6515f39c&is=6514a21c&hm=7c0f51d963de7ce0b0a1940ccd0c60e6e816e3524bf8610d3246768c218dbaaf&'}
        tags={projects[1].tag}
        summary={'Toasty is a personal project developed using React JS and vanilla CSS. The website is fully responsive and designed with the intention of being visually appealing with a wholesome charm. The primary goal was to create an attractive platform that communicates the story and value behind the Toasty brand, specifically its value proposition of providing healthy and fufilling sandwiches for busy individuals.'}
    >
 
      <a className='clickable button' href= "https://mpak9.github.io/toasty-sandwhich-website/" target='blank'>VIEW LIVE</a>

      <ul className='journal-gallery'>
          {images.map((img)=><li><img src={img} /></li> )}
      </ul>
  
    </Journal>
  )
}

export default Project_Toasty