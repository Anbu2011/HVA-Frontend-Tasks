import React from 'react'
import './CommentsList.css'

const CommentsList = ({display}) => {


  return (

    <>
      <div>
        <h2>Comments List</h2>
      </div>

      <div className='display'>
        {display.map((items, index) => (<div key={index}> {items} </div>))}
      </div>

    </>
  )
}

export default CommentsList