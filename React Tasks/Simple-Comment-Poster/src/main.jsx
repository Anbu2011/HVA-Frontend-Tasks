import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CommentApp from './Components/CommentApp/CommentApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentApp />
  </StrictMode>,
)
