import { useState } from 'react'
import './FontSizeApp.css'
import FontSizeControl from '../FontSizeControl/FontSizeControl'
import TextDisplay from '../TextDisplay/TextDisplay'

function FontSizeApp() {
  const [size, setSize] = useState("")
  
  const func = (sizes) =>{
    setSize(sizes+"px")
  }


  return (
    <>
      <FontSizeControl funct={func} />
      
      <TextDisplay display={size} />
    </>
  )
}

export default FontSizeApp
