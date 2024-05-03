import { Link } from "react-router-dom"
import "../styles/Nav.css"

const Nav = () => {

  return (
    <header className="header">

        <h1 className="title">Victorias sida</h1>

        <nav className="nav">
            <ul className="navlist">

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

    </header>
    
  )
}

export default Nav
