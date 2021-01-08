import React from 'react'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { CoreProvider } from './components/Provider'
import './App.css'

function App() {
  return (
    <div className="App">
      <CoreProvider>
        <div className="navbar">
          <p className="title">Blogsite</p>
          <input placeholder="Search"/>
        </div>

        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </CoreProvider>
    </div>
  )
}

export default App
