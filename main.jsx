import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
    <BrowserRouter> {/* Wrap App here so useLocation works inside App.jsx */}
      <App />
    </BrowserRouter>
  // </React.StrictMode>
)