import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemedComponent from './ContextAPI/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedComponent>
      <App />
    </ThemedComponent>
  </StrictMode>,
)
