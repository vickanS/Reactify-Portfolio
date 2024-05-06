import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/Nav.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <h1 className="title">Victorias portfolio</h1>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      {isOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <nav className="nav">
          <ul className={`navlist ${isOpen ? 'open' : ''}`}>
              <Link to={"/"}>
                <li className="navitem">Home</li>
              </Link>
              <Link to={"/about"}>
                <li className="navitem">About me</li>
              </Link>
              <Link to={"/projects"}>
                <li className="navitem">Projects</li>
              </Link>
              <Link to={"/contact"}>
                <li className="navitem">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav
