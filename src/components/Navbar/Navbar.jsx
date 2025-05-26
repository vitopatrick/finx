import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggle = () => {
    setActive(!active);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !active ? "hidden" : "unset";
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <Link to="/" onClick={() => setActive(false)}>
          <h1 className="title">Neomarket</h1>
        </Link>
        <div className="nav-links">
          <Link to="/" className="links" onClick={() => setActive(false)}>
            Home
          </Link>
          <Link to="/about" className="links" onClick={() => setActive(false)}>
            About
          </Link>
          <Link
            to="/contact"
            className="links"
            onClick={() => setActive(false)}
          >
            Contact
          </Link>
        </div>
        <div className="nav-buttons">
          <Link
            to="/register"
            className="cta-1"
            onClick={() => setActive(false)}
          >
            Begin Here
          </Link>
          <Link to="/login" className="cta-2" onClick={() => setActive(false)}>
            Login
          </Link>
        </div>
        <div className="bars" onClick={toggle}>
          {active ? <FaTimes size="24px" /> : <FaBars size="24px" />}
        </div>
      </div>
      <div className={active ? "sidenav active" : "sidenav"}>
        <div className="sidenav-content">
          <Link to="/" className="links" onClick={toggle}>
            Home
          </Link>
          <Link to="/about" className="links" onClick={toggle}>
            About
          </Link>
          <Link to="/contact" className="links" onClick={toggle}>
            Contact
          </Link>
          <Link to="/register" className="cta-1" onClick={toggle}>
            Begin Here
          </Link>
          <Link to="/login" className="cta-2" onClick={toggle}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
