import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className='dark bg-primary text-golden font-sans text-yellow-700 text-bold '>
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>,
)
