import React from 'react'
import './TeaDisplay.css'

const TeaDisplay = (props) => {
  const {name, origin, description}= props.tea

  return (
    <>
      <div className='tea'>
        <p><strong>Tea Name : </strong>{name}</p>
        <p><strong>Origin : </strong>{origin}</p>
        <p><strong>Description : </strong>{description}</p>
      </div>
    </>
  )
}

export default TeaDisplay
