import React from 'react'
import './CommentsList.css'

const CommentsList = (props) => {
  
  const {displayComments} = props

  return (

    <>
      <div>
        <h2>Comments List</h2>
      </div>

      <div className='display'>
        {displayComments.map((eachComment, index) => (<div key={index}> {eachComment} </div>))}
      </div>

    </>
  )
}

export default CommentsList