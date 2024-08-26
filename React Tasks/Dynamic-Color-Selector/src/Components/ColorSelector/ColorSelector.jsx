import React from 'react'
import './ColorSelector.css'

const ColorSelector = (props) => {
  const {onColorChange} = props
  return (
    <>
      <div>
          <h1>Color Selector</h1>
          <h2>Click Any of the Button to see the Background Color</h2>
      </div>
      <div className='btns'>
          <button className='green' value="green" onClick={(event) => onColorChange(event)}>Green</button>
          <button className='blue' value="blue" onClick={(event) => onColorChange(event)}>Blue</button>
          <button className='red' value="red" onClick={(event) => onColorChange(event)}>Red</button>
          <button className='gray' value="gray" onClick={(event) => onColorChange(event)}>Gray</button>
          <button className='darkmagenta' value="darkmagenta" onClick={(event) => onColorChange(event)}>Darkmagenta</button>
      </div>
    </>
  )
}

export default ColorSelector