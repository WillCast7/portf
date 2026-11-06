import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en.json'
import es from './i18n/es.json'


var lng: string = 'es';
localStorage.setItem("language", lng);

i18next.use(initReactI18next)
.init({
  lng:lng,
  interpolation:{
    escapeValue:false
  },
  resources:{
    en:{
      translation:en
    },
    es:{
      translation:es
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
