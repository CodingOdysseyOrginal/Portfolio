import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


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

const Contact: React.FC = () => {
  const phoneNumber = "07795934091";
  const emailAddress = "christopher.oconnor1@hotmail.com";


  const { ref: contactRef, inView: contactInView } = useInView({
   
    threshold: 0.1, 
  });

  return (
    <motion.div
      id="Contact"
      className="Contact"
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Us</h2>
      <div className="container">
        <motion.div
          className="contactInfo"
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="infoItem"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={slideInLeft}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faPhone} className="Icon" />
            <a href={`tel:${phoneNumber}`} className="link">
              {phoneNumber}
            </a>
          </motion.div>
          <motion.div
            className="infoItem"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={slideInRight}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="Icon" />
            <a href={`mailto:${emailAddress}`} className="link">
              {emailAddress}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
