import './index.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'
import Projects from './pages/projects'




function App() {


  return (
    <BrowserRouter>

      <Nav/>

      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
