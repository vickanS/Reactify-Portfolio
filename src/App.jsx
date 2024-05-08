import './index.css'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from './pages/About'
import Projects from './pages/Projects'

import './styles/Theme.css'

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const theme = useSelector(state => state.theme); // Använd useSelector för att hämta temat

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
