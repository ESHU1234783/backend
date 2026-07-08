import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"></link>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
