import React, { useEffect } from 'react'
import './ColorDisplay.css'

const ColorDisplay = (props) => {
  const {display} = props

  useEffect(() =>{
    document.body.style.backgroundColor = display;
  })
  
  return (
    <>
    
      <div className='display-message'>
        {display && <p>The background Color Changed into {display}</p>}
      </div>
      
    </>
  )
}

export default ColorDisplay