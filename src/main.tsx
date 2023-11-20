import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NewsProvider from './context/NewsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NewsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NewsProvider>
)
