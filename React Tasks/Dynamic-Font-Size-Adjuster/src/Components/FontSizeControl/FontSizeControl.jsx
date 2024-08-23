import React from 'react'
import './FontSizeControl.css'

const FontSizeControl = (props) => {
    const {funct} = props
    return (
        <>
            <div>
                <h1>Font Size Control - Slider</h1>
            </div>
            <div>
                <input type="range"  className='slider' onChange={() => funct(event.target.value)}/>
            </div>
        </>
    )
}

export default FontSizeControl