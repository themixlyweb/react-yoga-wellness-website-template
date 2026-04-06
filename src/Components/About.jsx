/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import trusted1 from '../Images/trusted-1.webp';
import trusted2 from '../Images/trusted-2.webp';
import trusted3 from '../Images/trusted-3.webp';
import trusted4 from '../Images/trusted-4.webp';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <motion.section
      className="about-section container"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      
      {/* LEFT */}
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-subheading">About Our Studio</p>
        <h2 className="section-heading">
          A Space for Wellness & Balance
        </h2>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="about-right"
        variants={container}
      >
        <motion.p className="section-text" variants={fadeUp}>
          We are dedicated to helping individuals improve their physical and mental well-being through guided yoga, mindful movement, and supportive coaching. Our programs are designed for every level, creating a welcoming space where you can grow stronger, healthier, and more balanced.
        </motion.p>

        {/* TRUSTED */}
        <motion.div className="trusted" variants={fadeUp}>
          <div className="avatars">
            {[trusted1, trusted2, trusted3, trusted4].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`A Space for Wellness & Balance ${i + 1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <span>Trusted by over 1000+ Fitness Enthusiast</span>
        </motion.div>

        {/* BUTTON */}
        <a href="#instructors">
        <motion.button
          className="btn outline"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Know More About Us
        </motion.button>
        </a>
      </motion.div>

    </motion.section>
  );
};

export default About;