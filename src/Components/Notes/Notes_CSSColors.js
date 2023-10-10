import React, { useState } from 'react'
import Journal from '../Journal'
import { notes } from '../../JSON/Notes'
import { defaultColors } from '../../JSON/CSSColors'

const Notes_CSSColors = () => {
  const[filteredColors, setFilteredColors] = useState(defaultColors);

  const handleColorFilter = (value) => {
    console.log(value);
    if(value === 'used'){
      setFilteredColors( defaultColors.filter(color => {
          return color.used === true;
      }));
    }
    else if(value==='unused'){
      setFilteredColors( defaultColors.filter(color => {
          return color.used === false;
      }));
    }
    else{
      setFilteredColors( defaultColors);
    } 
  }


  return (
    <Journal
        id={notes[0].name}
        subtitle={'Default CSS Colors'}
        summary={'A list of default css colors for reference'}
    >
      
      <div style={{marginTop:'5%'}}>
          <span> Filter </span>
          <select 
              defaultValue={'all'} 
              onChange={(e)=>handleColorFilter(e.target.value)} >
              <option value="used">Used</option>
              <option value="unused">Unused</option>
              <option value="all">All</option>
          </select> 
      </div>
      <section className='grid-container' style={{marginTop:'5%', flexShrink:'1'}}>
          {filteredColors.map(({color, hex}) => 
            <div className='list-item-flex'style={{justifyContent:'center', minWidth:'3rem'}}>
                <div style={{ backgroundColor: hex, borderRadius:'5%', width:'100%', aspectRatio:'1/1' }}/>
                <p style={{textAlign:'center', alignSelf:'center'}}>{color}</p>   
                <p style={{textAlign:'center', alignSelf:'center'}}>{hex} </p>
            </div>)}
      </section>

    </Journal>
  )
}

export default Notes_CSSColors