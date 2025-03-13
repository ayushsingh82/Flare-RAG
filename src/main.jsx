import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="verify" element={<div>Verify Page (Coming Soon)</div>} />
          <Route path="about" element={<div>About Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
