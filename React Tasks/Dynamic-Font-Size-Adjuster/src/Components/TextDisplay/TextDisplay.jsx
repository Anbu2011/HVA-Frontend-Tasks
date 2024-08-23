import React from 'react'
import './TextDisplay.css'

const TextDisplay = (props) => {

  const {display} = props

  return (
    <div className='display-font'>
      <h1 style={{fontSize:`${display}`}}>Font size Checker - {display}</h1>
    </div>
  )
}

export default TextDisplay
