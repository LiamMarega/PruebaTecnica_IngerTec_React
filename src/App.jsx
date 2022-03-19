import { useState } from 'react'
import Home from './components/Home/Home';
import PopUp from './components/PopUp/PopUp';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popup/:animal" element={<PopUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App