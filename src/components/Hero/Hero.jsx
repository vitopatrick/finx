import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__overlay">
        <div className=" hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              The Future of <span className="highlight">Crypto</span> Investment
            </h1>
            <p className="hero__description">
              Experience seamless cryptocurrency trading and investment with our
              cutting-edge platform. Buy, store, and grow your digital assets
              all in one place.
            </p>
            <div className="hero__cta-group">
              <Link to="/register" className="hero__cta-primary">
                Get Started
                <span className="hero__cta-arrow">→</span>
              </Link>
              <Link to="/about" className="hero__cta-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero__stats">
            <div className="stat__item">
              <span className="stat__number">$2B+</span>
              <span className="stat__label">Trading Volume</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">150K+</span>
              <span className="stat__label">Active Users</span>
            </div>
            <div className="stat__item">
              <span className="stat__number">99.9%</span>
              <span className="stat__label">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
