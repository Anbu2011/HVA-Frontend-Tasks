import React from 'react'
import './TeaDisplay.css'

const TeaDisplay = ({tea}) => {
  const {Name, Origin, Description}= tea

  return (
    <>
      <div>
        <h1>Tea Name : {Name}</h1>
        <p><strong>Origin : </strong>{Origin}</p>
        <p><strong>Description : </strong>{Description}</p>
      </div>
    </>
  )
}

export default TeaDisplay
