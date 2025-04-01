import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/resets.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/utilities.css'
import './css/media.css'
import './index.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)