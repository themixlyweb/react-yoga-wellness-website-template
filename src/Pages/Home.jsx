/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

/**COMPONENTS IMPORT */
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Footer from "../Components/Footer";


/**IMAGE IMPORT */
import bgImg from "../Images/how-we-work-bg.webp";


const Home=()=>{
  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
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

    return(
        <>
        {/**HEADER */}
        <Header />

        {/**HERO SECTION */}
        <Hero />

        {/**STATS SECTION */}
        <motion.section
      className="stats"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container stats-wrapper">

        {/* LEFT */}
        <motion.div className="stats-left" variants={container}>

          <motion.div className="stat" variants={fadeUp}>
            <h2>
              <CountUp end={5000} duration={2} suffix="+" />
            </h2>
            <p>Yoga Classes</p>
          </motion.div>

          <div className="divider"></div>

          <motion.div className="stat" variants={fadeUp}>
            <h2>
              <CountUp end={200} duration={2} suffix="+" />
            </h2>
            <p>Course & Challenges</p>
          </motion.div>

          <div className="divider"></div>

          <motion.div className="stat" variants={fadeUp}>
            <h2>
              <CountUp end={500} duration={2} suffix="+" />
            </h2>
            <p>Course & Challenges</p>
          </motion.div>

        </motion.div>

        {/* RIGHT TEXT */}
        <motion.p
          className="section-text stat-text"
          variants={fadeUp}
        >
          Explore a wide range of yoga classes, guided courses, and engaging
          challenges designed to support your fitness and wellness journey.
        </motion.p>

      </div>
    </motion.section>

{/**ABOUT OUR STUDIO SECTION */}
<About />

{/**HOW WE WORK SECTION */}
<div className="container">
      <motion.section
        className="how-we-work"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ opacity: 0, scale: 1.05 }}   
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.4 }}
      >

        {/* OVERLAY */}
        <div className="how-we-work__overlay"></div>

        {/* CONTENT */}
        <motion.div
          className="how-we-work__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <h2>See How We Work in Action</h2>
        </motion.div>

      </motion.section>
    </div>

   

    {/**FOOTER */}
    <Footer />
        </>
    )
}
export default Home;