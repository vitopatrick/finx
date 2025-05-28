import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import "../styles/pages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content fade-in">
        <div className="page-header">
          <h1 className="page-title">About Neo Market</h1>
          <p className="page-subtitle">
            A next-generation cryptocurrency trading platform designed for both
            beginners and experienced traders.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <FaShieldAlt />
            </div>
            <h3 className="about-card-title">Secure Trading</h3>
            <p className="about-card-text">
              We implement bank-grade security measures including encrypted
              communications, cold storage, and regular security audits to
              protect your assets.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <FaChartLine />
            </div>
            <h3 className="about-card-title">Advanced Analytics</h3>
            <p className="about-card-text">
              Access real-time market data, advanced charting tools, and
              technical indicators to make informed trading decisions.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <FaUserFriends />
            </div>
            <h3 className="about-card-title">Community Driven</h3>
            <p className="about-card-text">
              Join a growing community of traders. Share strategies, learn from
              others, and stay updated with market trends.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <FaGlobe />
            </div>
            <h3 className="about-card-title">Global Access</h3>
            <p className="about-card-text">
              Trade cryptocurrency pairs 24/7 from anywhere in the world. We
              support multiple languages and currencies.
            </p>
          </div>
        </div>

        <div
          className="terms-section"
          style={{ marginTop: "4rem", textAlign: "center" }}
        >
          <h2 className="terms-section-title">Our Mission</h2>
          <p
            className="about-card-text"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            At Neo Market, we're committed to making cryptocurrency trading
            accessible, secure, and profitable for everyone. Our platform
            combines cutting-edge technology with user-friendly interfaces to
            provide the best trading experience possible. We believe in
            transparency, security, and continuous innovation to serve our
            growing community of traders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
