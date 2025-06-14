import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Greetings} from './Greetings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
  </StrictMode>,
)
