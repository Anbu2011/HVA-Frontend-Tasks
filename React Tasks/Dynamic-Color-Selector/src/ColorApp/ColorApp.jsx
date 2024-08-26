import { useState } from 'react'
import './ColorApp.css'
import ColorSelector from '../Components/ColorSelector/ColorSelector.jsx'
import ColorDisplay from '../Components/ColorDisplay/ColorDisplay.jsx'

function ColorApp() {
  const [selectedColor, setSelectedColor] = useState('')

  const handleColorChange = (event) =>{
    setSelectedColor(event.target.value)
  }

  return (
    <>
      <div>
        <ColorSelector onColorChange={handleColorChange}/>

        <ColorDisplay displayColor={selectedColor}/>
      </div>
      
    </>
  )
}

export default ColorApp
