/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**ICONS IMPORT */
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Footer = () => {
  const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Instructors", link: "#instructors" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="container footer__wrapper">

        {/* LEFT */}
        <motion.div className="footer__left" variants={fadeUp}>
          <h2 className="footer__logo">Calmora</h2>
          <p className="footer__text">
            Helping you achieve a healthier, more balanced lifestyle through yoga, mindfulness, & personalized wellness programs.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div className="footer__links" variants={fadeUp}>
          <h4>Quick Links</h4>

          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ x: 5 }}  
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        {/* RIGHT */}
        <motion.div className="footer__contact" variants={fadeUp}>
  <h4>Contact</h4>

  <motion.p className="footer__contact-item" whileHover={{ x: 5 }}>
    <FiMapPin className="footer__icon" />
    Navrangpura, Ahmedabad, Gujarat 380009
  </motion.p>

  {/* EMAIL */}
  <motion.a
    href="mailto:email@example.com"
    className="footer__contact-item"
    whileHover={{ x: 5 }}
  >
    <FiMail className="footer__icon" />
    email@example.com
  </motion.a>

  {/* PHONE */}
  <motion.a
    href="tel:+919876543210"
    className="footer__contact-item"
    whileHover={{ x: 5 }}
  >
    <FiPhone className="footer__icon" />
    +91 98765 43210
  </motion.a>
</motion.div>

      </div>

      {/* BOTTOM */}
      <motion.div
        className="footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="container footer__bottom-inner">
          <p>© 2026 Calmora. All rights reserved.</p>
          <p>Designed and Developed by Themixly.</p>
        </div>
      </motion.div>

    </motion.footer>
  );
};

export default Footer;