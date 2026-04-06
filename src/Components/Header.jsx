/**CORE LIBRARIES IMPORT */
import React, { useState } from "react";
import { motion } from "framer-motion";

/**ICONS IMPORT */
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

 const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Instructors", link: "#instructors" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav">

        {/* LOGO */}
        <div className="logo">Calmora</div>

        {/* DESKTOP NAV */}
       <nav className="nav-links">
  {navItems.map((item, i) => (
    <a key={i} href={item.link}>
      {item.name}
    </a>
  ))}
</nav>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </div>

      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-top">
          <h2 className="logo">Calmora</h2>
        </div>
<div className="sidebar-links">
  {navItems.map((item, i) => (
    <a
      key={i}
      href={item.link}
      onClick={() => setOpen(false)}
    >
      {item.name}
    </a>
  ))}
</div>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </motion.header>
  );
};

export default Header;