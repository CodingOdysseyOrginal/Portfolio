import { Link } from "react-scroll";
import "./Nav.css";


const Nav = () => {
  return (
    <nav className="sidebar">
      <div className="navTitle">
        <h1>Christopher</h1>
        <span>.</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="Projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="Contact" spy={true} smooth={true}>
          Contact me!
          </Link>
        </li>
      </ul>
      <div className="social-icons">
        <div className="icon">
          <a href="https://www.linkedin.com/in/christopher-o%E2%80%99connor-859b68184/" target="_blank" rel="noopener noreferrer" className="social-link">
            
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/CodingOdysseyOrginal" target="_blank" rel="noopener noreferrer" className="social-link">
            
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
