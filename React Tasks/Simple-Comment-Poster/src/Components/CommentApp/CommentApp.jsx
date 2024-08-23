import { useState } from 'react'
import './CommentApp.css'
import CommentInput from '../CommentInput/CommentInput'
import CommentsList from '../CommentsList/CommentsList'

function CommentApp() {
  const [list, setList] = useState([])
  
  const func = (list1) => {
    setList([list1,...list])
  }

  return (
    <>
      <CommentInput key1={func}/>
      <CommentsList display={list}/>
    </>
  )
}

export default CommentApp
