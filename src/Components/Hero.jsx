/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**IMAGES IMPORT */
import yogaImg from "../Images/hero-img.webp";
import bgImg from "../Images/hero-bg.webp";
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}
      id="home"
    >
      <div className="container hero-content">

        {/* LEFT */}
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp}>
            Get in Shape — <br />
            Feel the Difference
          </motion.h1>

          <motion.p className="section-text" variants={fadeUp}>
            Transform your body and mind with guided yoga,
            strength training, and personalized fitness programs
            designed for all experience levels.
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
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                />
              ))}
            </div>
            <span>Trusted by over 1000+ Fitness Enthusiast</span>
          </motion.div>

          {/* BUTTONS */}
          <motion.div className="hero-buttons" variants={fadeUp}>
            <a href="#contact">
            <motion.button
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Journey
            </motion.button>
              </a>
                          <a href="#contact">
            <motion.button
              className="btn outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Free Trial
            </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={yogaImg}
            alt="  Get in Shape — Feel the Difference"
            animate={{ y: [0, -15, 0] }}  
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;