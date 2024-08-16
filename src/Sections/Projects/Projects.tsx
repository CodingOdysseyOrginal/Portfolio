import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Projects.css';
import Book_Bound from './Img/Book_Bound.png';
import Game_Store from './Img/GameStore.png';
import Silverback_Strength from './Img/Silverback_Strength.png';


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const slideInLeft = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const slideInRight = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};


interface Project {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  languages: string;
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Book Bound',
    imgSrc: Book_Bound,
    description: 'An online bookstore showcasing a collection of books across various genres. Each book has a detailed description page, and the site includes a fully functional shopping cart.',
    languages: 'React, TypeScript',
    demoLink: 'https://codingodysseyorginal.github.io/Book_Bound/',
    codeLink: 'https://github.com/CodingOdysseyOrginal/Book_Bound',
  },
  {
    id: 2,
    name: 'Game Store',
    imgSrc: Game_Store,
    description: 'A game store application built with React.js, offering users the ability to browse and filter games by name. Each game features a download page.',
    languages: 'React, JavaScript',
    demoLink: 'https://codingodysseyorginal.github.io/Game_Store/',
    codeLink: 'https://github.com/CodingOdysseyOrginal/Game_Store',
  },
  {
    id: 3,
    name: 'Silverback Strength',
    imgSrc: Silverback_Strength,
    description: "A professional gym landing page created with TypeScript and React. The site showcases the gym's services, including detailed information about personal trainers, membership options, and frequently asked questions.",
    languages: 'TypeScript, React',
    demoLink: 'https://codingodysseyorginal.github.io/SilverBackStrength/',
    codeLink: 'https://github.com/CodingOdysseyOrginal/SilverBackStrength',
  },
];

export const Projects: React.FC = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <div id="projects" className='Projects'>
      <motion.h1
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        ref={projectsRef}
      >
        Projects
      </motion.h1>
      <div className='projects-container'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className='project-card'
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.imgSrc} alt={project.name} className='project-image' />
            <div className='project-info'>
              <motion.h3
                className='project-name'
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.name}
              </motion.h3>
              <motion.p
                className='project-description'
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              <motion.p
                className='project-technologies'
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {project.languages}
              </motion.p>
              <motion.div
                className='project-links'
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className='project-link'>View Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className='project-link'>View Code</a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
