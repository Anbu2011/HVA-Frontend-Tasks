import { useState } from 'react'
import './FontSizeApp.css'
import FontSizeControl from '../Components/FontSizeControl/FontSizeControl'
import TextDisplay from '../Components/TextDisplay/TextDisplay'

function FontSizeApp() {
  const [fontSize, setFontSize] = useState("")
  
  const handleFontSizeChange = (newFontSize) =>{
    setFontSize(newFontSize+"px")
  }

  return (
    <>
      <FontSizeControl onFontSizeChange={handleFontSizeChange} />
      
      <TextDisplay displayFontSize={fontSize} />
    </>
  )
}

export default FontSizeApp
