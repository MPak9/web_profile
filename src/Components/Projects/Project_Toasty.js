import React from 'react'
import Journal from '../Journal'
import { projects } from '../../JSON/Projects'
import { useNavigate } from 'react-router-dom'
import { defaultColorsUsed } from '../../JSON/CSSColors'
import Toasty_Cover from '../../Images/Toasty_Long_Cover.png'

const Project_Toasty = () => {
  let navigate = useNavigate();

/*   const images = [
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056208268697630/image.png?ex=65173811&is=6515e691&hm=311c324309d67bf173a5a234f057bbcbbb25ee8a7a70884068f5de59dccfbbd8&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056346332614687/image.png?ex=65173832&is=6515e6b2&hm=bd95d4f3d4a4b7f349a62ac49123472bd690d1878aaa02134b3409278aa045cd&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1159164650299080865/image.png?ex=651ee3b4&is=651d9234&hm=c5c4c7ccf633881694536fef806c957081227d634cd796447c1af87f7a4209ae&',
    'https://cdn.discordapp.com/attachments/1075543412582924378/1157056607084105748/image.png?ex=65173870&is=6515e6f0&hm=f2a1d59b8d8d4a7dca84e1f31050b97500d9d2c6b35b8522abc7c0a176751a6a&',
  ]
 */
  const footnotes = [
    {
      title:'CSS Grid Tips for design ornamentation (Coming Soon)',
      link:'',
    },
    {
      title:'Toasty Project Bread Animation (Coming Soon)',
      link:'',
    },
    {
      title:'Responsive SVG (Coming Soon)',
      link:'',
    },
    {
      title:'Dynamically Added Responsive Menu (Coming Soon)',
      link:'',
      
    },
    {
      title:'Deploying Github Pages with create-react-app',
      href:'https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app',
      description: 'Thank you to Solomon Ayoola for this nifty piece of info'
      
    },
  ]


  return (
    <Journal 
        id={projects[1].name}
        subtitle={'Web Development Project'}
        cover={Toasty_Cover}
        tags={projects[1].tag}
        summary={
          'Toasty is a personal project developed using React JS and vanilla CSS. The website is fully responsive and designed with the intention of being visually appealing and having a wholesome charm. The primary goal was to create an attractive platform that communicates the story and value behind the Toasty brand, specifically its value proposition of providing healthy and fufilling sandwiches for busy individuals.'
        }
        href= "https://mpak9.github.io/toasty-sandwhich-website/"
        //images={images}
        footnoteTitle={'Project Documentation'}
        footnotes={footnotes}
    >     
      <br/>
      <p>Color Palette</p>
      <div style={{display:'flex', flexDirection:'row', minHeight:'10rem',  borderRadius:'5%'}}>
        <div style={{flexBasis:'50%', background:'aliceBlue', }}>
        
        </div>
        <div style={{flexBasis:'50%', background:'orange',}}>
          
        </div>
        
        <div style={{flexBasis:'20%', background:'wheat',}}>
          
        </div>
        <div style={{flexBasis:'10%', background:'steelBlue', }}>
        
        </div>
      </div>

    </Journal>
  )
}

export default Project_Toasty