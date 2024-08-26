import React, { useState } from 'react'
import './ButtonCount.css'

const ButtonCount = () => {

    const [count, setCount] = useState(0);

    const handleChange = () =>{
        setCount(count+1)
    }
  return (
    <>
        <div>
            <h1>ButtonCount</h1>
        </div>
        <div className='btn'>
            <button className='btn-count' onClick={handleChange}>Counter</button> 
            <div className='count'>
                <p style={{color:'black'}}>{count}</p>
            </div>
            
        </div>
    </>
    

  )
}

export default ButtonCount