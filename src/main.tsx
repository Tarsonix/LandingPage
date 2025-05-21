import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root with concurrent mode
const root = createRoot(document.getElementById("root")!)

// Measuring initial load performance
performance.mark('react-start')

// Add event listener for after hydration
window.addEventListener('load', () => {
  performance.mark('react-end')
  performance.measure('react-hydration', 'react-start', 'react-end')
  
  // Print performance to console in development
  if (import.meta.env.DEV) {
    const measurements = performance.getEntriesByType('measure')
    console.log('React hydration time:', measurements[measurements.length - 1].duration.toFixed(2), 'ms')
  }
})

// Render the app
root.render(<App />)
