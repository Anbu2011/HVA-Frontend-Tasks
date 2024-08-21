import React from 'react'
import './TeaDisplay.css'

const TeaDisplay = ({tea}) => {
  return (
    <>
      <div>
          <h1>Tea Name : {tea.Name}</h1>
          <p><strong>Origin : </strong>{tea.Origin}</p>
          <p><strong>Description : </strong>{tea.Description}</p>
      </div>
    </>
  )
}

export default TeaDisplay