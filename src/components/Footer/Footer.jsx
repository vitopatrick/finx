import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const links = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
      { name: "Blog", path: "/blog" },
    ],
    product: [
      { name: "Features", path: "/features" },
      { name: "Trading", path: "/trading" },
      { name: "Pricing", path: "/pricing" },
      { name: "Security", path: "/security" },
    ],
    support: [
      { name: "Help Center", path: "/help" },
      { name: "Contact Us", path: "/contact" },
      { name: "API Docs", path: "/api" },
      { name: "Status", path: "/status" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Compliance", path: "/compliance" },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Capital flow
            </Link>
            <p className="footer__description">
              A next-generation cryptocurrency trading platform combining
              security, speed, and sophisticated trading tools.
            </p>
            <div className="footer__contact">
              <div className="contact__item">
                <FaEnvelope />
                <span>support@Capital flow.com</span>
              </div>

              <div className="contact__item">
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="footer__links">
            <div className="links__column">
              <h3>Company</h3>
              <ul>
                {links.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links__column">
              <h3>Product</h3>
              <ul>
                {links.product.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links__column">
              <h3>Support</h3>
              <ul>
                {links.support.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links__column">
              <h3>Legal</h3>
              <ul>
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
