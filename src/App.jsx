import { useState } from 'react'
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import PopUp from './components/PopUp/PopUp';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/hola" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
