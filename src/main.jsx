import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent from './components/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Resume Builder</h1>
    <Parent />
  </StrictMode>,
)

