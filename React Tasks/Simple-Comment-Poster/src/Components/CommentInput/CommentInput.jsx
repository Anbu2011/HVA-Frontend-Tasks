import React from 'react'
import './CommentInput.css'
import { useState } from 'react'

const CommentInput = (props) => {
    const {onAddComment} = props
    const [newComment , setNewComment] = useState("")
    
    const handleChange = (event)=>{ 
        setNewComment(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        onAddComment(newComment)
        setNewComment("")
    }

  return (
    <>
        <div>
            <h1>Comment Section</h1>
        </div>
        <div>
            <form>
                <div>
                    <label className="comment-label" htmlFor="comment">Comment : </label>
                    <input type="text" value={newComment} onChange={handleChange} placeholder='Type Your Comment'/> 
                </div> 
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    </>
    
  )
}

export default CommentInput