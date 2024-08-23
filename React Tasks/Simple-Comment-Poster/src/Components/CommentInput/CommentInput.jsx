import React from 'react'
import './CommentInput.css'
import { useState } from 'react'

const CommentInput = (props) => {
    const {key1} = props
    const [comment , setComment] = useState("")
    
    const handleChange = (event)=>{ 
        setComment(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        key1(comment)
        setComment("")
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
                    <input type="text" value={comment} onChange={handleChange} placeholder='Type Your Comment'/> 
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