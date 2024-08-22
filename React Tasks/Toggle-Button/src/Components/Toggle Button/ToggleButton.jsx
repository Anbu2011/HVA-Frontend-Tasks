import React, { useState } from 'react'
import './ToggleButton.css'
const ToggleButton = () => {
    const [state, setState] = useState()

    const handleChange = (event) => {
        setState(event.target.checked)
    }

  return (
    <div>
        <h1>ToggleButton</h1>
        
        <input type="checkbox" id="switch" className="checkbox" onChange={handleChange}/>
        <label htmlFor="switch" className="toggle"></label>
        
        {state ? (<p style={{color:'black', fontSize:'22px'}}>ON</p>) : (<p style={{color:'black', fontSize:'22px'}}>OFF</p>)}
    </div>
    
  )
}

export default ToggleButton