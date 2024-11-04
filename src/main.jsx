// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RootCmp } from './RootCmp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RootCmp />
  // {/* </StrictMode>, */}
)
