import React from 'react'
import './TextDisplay.css'

const TextDisplay = (props) => {

  const {displayFontSize} = props

  return (
    <div className='display-font-size'>
      <p style={{fontSize:`${displayFontSize}`}}>Font size Checker - {displayFontSize}</p>
    </div>
  )
}

export default TextDisplay
