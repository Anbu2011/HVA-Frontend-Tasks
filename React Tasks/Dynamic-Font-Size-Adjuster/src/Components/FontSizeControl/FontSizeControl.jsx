import React from 'react'
import './FontSizeControl.css'

const FontSizeControl = (props) => {
    const {onFontSizeChange} = props
    return (
        <>
            <div>
                <h1>Font Size Control - Slider</h1>
            </div>
            <div>
                <input type="range"  className='slider' onChange={(event) => onFontSizeChange(event.target.value)}/>
            </div>
        </>
    )
}

export default FontSizeControl
