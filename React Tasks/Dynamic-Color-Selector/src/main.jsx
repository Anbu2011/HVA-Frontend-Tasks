import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ColorApp from './Components/ColorApp/ColorApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorApp />
  </StrictMode>,
)
