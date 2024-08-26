import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FontSizeApp from './FontSizeApp/FontSizeApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FontSizeApp />
  </StrictMode>,
)
