import { Link } from "react-scroll";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

// Define the animation variants
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Nav = () => {
  return (
    <nav className="sidebar">
      <motion.div
        className="navTitle"
        initial="hidden"
        animate="visible"
        variants={fadeInFromLeft}
        transition={{ duration: 0.5 }}
      >
        <h1>Christopher</h1>
        <span>.</span>
      </motion.div>
      
      <motion.ul
        className="nav-links"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {['home', 'About', 'Projects', 'Contact'].map((section, index) => (
          <motion.li
            key={section}
            variants={fadeInFromLeft}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link to={section} spy={true} smooth={true} duration={500}>
              <FontAwesomeIcon
                icon={
                  section === 'home' ? faHome :
                  section === 'About' ? faUser :
                  section === 'Projects' ? faBriefcase :
                  faEnvelope
                }
                className="nav-icon"
              />
              <span>{section === 'home' ? 'Home' :
                      section === 'About' ? 'About' :
                      section === 'Projects' ? 'Projects' :
                      'Contact me!'}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.div
        className="social-icons"
        initial="hidden"
        animate="visible"
        variants={fadeInFromLeft}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
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
      </motion.div>
    </nav>
  );
};

export default Nav;
