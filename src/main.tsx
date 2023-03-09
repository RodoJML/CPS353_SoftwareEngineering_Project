import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchList from './UniversityList'
import './index.css'
import CreateAccount from './CreateAccount'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreateAccount />
  </React.StrictMode>,
)
