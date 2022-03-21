import { useState } from 'react'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import PopUp from './components/PopUp/PopUp';
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/hola" element={<LandingPage />} />

      </div>
    </BrowserRouter>
  )
}

export default App
