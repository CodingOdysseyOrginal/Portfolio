import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import "./Home.css";
import Myself from "./Img/me.jpg";
import Typed from "typed.js";
import { motion } from 'framer-motion';
import CV from './Img/Christopher.cv.pdf'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export function Home() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2 
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    const options = {
      strings: ["Developer", "Traveler", "Muay Thai Fighter"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".typedText", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <motion.div
        className="featured-text"
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="featured-text-card"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>Christopher O'Connor</span>
        </motion.div>
        <motion.div
          className="featured-name"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            I'm a <span className="typedText"></span>
          </p>
        </motion.div>
        <motion.div
          className="featured-text-info"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            I'm a Software Developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </motion.div>
        <motion.div
          className="featured-text-btn"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href={CV} download="Christopher_OConnor_CV.pdf">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="featured-image"
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={popIn}
        transition={{ duration: 0.5 }}
      >
        <div className="image">
          <img src={Myself} alt="avatar" />
        </div>
      </motion.div>
    </section>
  );
}
