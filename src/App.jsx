import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'




function App() {


  return (
    <BrowserRouter>

      <Nav/>

      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
