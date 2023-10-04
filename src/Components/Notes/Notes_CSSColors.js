import React from 'react'
import Journal from '../Journal'
import { notes } from '../../JSON/Notes'
import { defaultColors } from '../../JSON/CSSColors'

const Notes_CSSColors = () => {
  return (
    <Journal
        id={notes[0].name}
        subtitle={'Default CSS Colors'}
        summary={'A list of default css colors for reference'}
    >
        <section className='grid-container' style={{marginTop:'10%'}}>
            {defaultColors.map(({color, hex}) => 
              <div className='list-item-flex'style={{justifyContent:'center', width:'8rem'}}>
                  <div style={{ backgroundColor: hex, borderRadius:'5%', width:'100%', aspectRatio:'1/1' }}/>
                  <p style={{textAlign:'center', alignSelf:'center'}}>{color}</p>   
                  <p style={{textAlign:'center', alignSelf:'center'}}>{hex} </p>
              </div>)}
        </section>
       

    </Journal>
  )
}

export default Notes_CSSColors