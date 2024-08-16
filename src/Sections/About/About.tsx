import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import "./About.css";

// Define animation variants
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

const About: React.FC = () => {
  
  const { ref: headerRef, inView: headerInView } = useInView({
    
    threshold: 0.9
  });

  const { ref: infoRef, inView: infoInView } = useInView({
   
    threshold: 0.1
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    
    threshold: 0.1
  });

  const skillSpans = [
    { text: 'HTML', direction: 'left' },
    { text: 'CSS', direction: 'right' },
    { text: 'JavaScript', direction: 'left' },
    { text: 'React', direction: 'right' },
    { text: 'Tailwind', direction: 'left' },
    { text: 'GitHub', direction: 'right' },
    { text: 'Visual Studio Code', direction: 'left' },
    { text: 'Express', direction: 'left' },
    { text: 'Node', direction: 'right' },
    { text: 'MongoDB', direction: 'left' },
    { text: 'C#', direction: 'right' },
    { text: 'ASP.NET', direction: 'left' },
  ];

  return (
    <section id="About" className="About">
      <motion.div
        className="section-header"
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={slideInLeft}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
      </motion.div>
      <div className="row">
        <motion.div
          className="column"
          ref={infoRef}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <div className="about-info">
            <motion.h3
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ duration: 0.5 }}
            >
              My Introduction
            </motion.h3>
            <p>
              I am a software developer with a solid foundation in both front-end and back-end technologies. I am currently enhancing my skills in Express and MongoDB, which will contribute to my upcoming Full-Stack MERN project.
            </p>
          </div>
        </motion.div>
        <div className="column">
          <motion.div
            className="skills-box"
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="skills-header">
              <motion.h3
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                variants={slideInLeft}
                transition={{ duration: 0.5 }}
              >
                Frontend
              </motion.h3>
            </div>
            <div className="skills-list">
              {skillSpans.slice(0, 7).map((skill, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  variants={skill.direction === 'left' ? slideInLeft : slideInRight}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="column">
          <motion.div
            className="skills-box"
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="skills-header">
              <motion.h3
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                variants={slideInRight}
                transition={{ duration: 0.5 }}
              >
                Backend
              </motion.h3>
            </div>
            <div className="skills-list">
              {skillSpans.slice(7).map((skill, index) => (
                <motion.span
                  key={index + 7}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  variants={skill.direction === 'left' ? slideInLeft : slideInRight}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
