import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { links } from './links.js'
import './styles.css'

// Rotas curtas: /whatsapp, /loja... redirecionam para a URL do links.js
const slug = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase()
const target = slug && links.find((l) => l.slug === slug && l.active)
if (target) {
  window.location.replace(target.url)
} else {
  createRoot(document.getElementById('root')).render(<App />)
}
