import { Link } from "react-scroll";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="About" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="Projects" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="Contact" spy={true} smooth={true}>
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            <span>Contact me!</span>
          </Link>
        </li>
      </ul>
      <div className="social-icons">
        <div className="icon">
          <a href="https://www.linkedin.com/in/christopher-o%E2%80%99connor-859b68184/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/CodingOdysseyOrginal" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
