import { useState } from 'react'
import './CommentApp.css'
import CommentInput from '../Components/CommentInput/CommentInput'
import CommentsList from '../Components/CommentsList/CommentsList'

function CommentApp() {
  const [comments, setComments] = useState([])
  
  const addComment = (newComment) => {
    setComments([newComment,...comments])
  }

  return (
    <>
      <CommentInput onAddComment={addComment}/>
      <CommentsList displayComments={comments}/>
    </>
  )
}

export default CommentApp
