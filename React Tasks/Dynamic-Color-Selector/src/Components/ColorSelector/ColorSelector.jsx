import React from 'react'
import './ColorSelector.css'

const ColorSelector = (props) => {
  const {func} = props
  return (
    <>
      <div>
          <h1>Color Selector</h1>
          <h2>Click Any of the Button to see the Background Color</h2>
      </div>
      <div className='btns'>
          <button className='green' value="green" onClick={() => func(event.target.value)}>Green</button>
          <button className='blue' value="blue" onClick={() => func(event.target.value)}>Blue</button>
          <button className='red' value="red" onClick={() => func(event.target.value)}>Red</button>
          <button className='gray' value="gray" onClick={() => func(event.target.value)}>Gray</button>
          <button className='darkmagenta' value="darkmagenta" onClick={() => func(event.target.value)}>Darkmagenta</button>
      </div>
    </>
    

    
  )
}

export default ColorSelector