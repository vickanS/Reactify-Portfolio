import './index.css'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '@ionic/react/css/core.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'
import Projects from './pages/Projects'

import './styles/Theme.css'

function App() {
  return ( // provider applicerar innehållet i store på hela applikationen
    <Provider store={store}> 
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const theme = useSelector(state => state.theme); // useSelector används för att hämta temat dark eller light

//innanför browserRouter läggs det som ska visas på sidan vart man än är i applikationen
//innanför Routes lägger man de olika sökvägarna
  return (
    <div className={theme}>
      <BrowserRouter> 
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
