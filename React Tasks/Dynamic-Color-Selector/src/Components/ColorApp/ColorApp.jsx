import { useState } from 'react'
import './ColorApp.css'
import ColorSelector from '../ColorSelector/ColorSelector.jsx'
import ColorDisplay from '../ColorDisplay/ColorDisplay.jsx'

function ColorApp() {
  const [selectedColor, setSelectedColor] = useState('')

  const propsFn = (color) =>{
    setSelectedColor(color)
  }

  return (
    <>
      <ColorSelector func={propsFn}/>

      <ColorDisplay display={selectedColor}/>
    </>
  )
}

export default ColorApp
