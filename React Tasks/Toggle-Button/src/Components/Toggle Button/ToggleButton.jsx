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
        
        <p style={{color:'black', fontSize:'22px'}}>
          {state ? 'ON' : 'OFF'}
        </p>
    </div>
    
  )
}

export default ToggleButton