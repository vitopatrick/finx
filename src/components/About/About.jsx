import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaGlobeAmericas,
  FaChartLine,
} from "react-icons/fa";
import "./about.css";

const About = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: "2M+",
      label: "Active Users",
      color: "#4f6ef7",
    },
    {
      icon: <FaGlobeAmericas />,
      number: "150+",
      label: "Countries Served",
      color: "#a855f7",
    },
    {
      icon: <FaChartLine />,
      number: "$10B+",
      label: "Trading Volume",
      color: "#10b981",
    },
    {
      icon: <FaShieldAlt />,
      number: "99.9%",
      label: "Secure Transactions",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">
              About <span className="highlight">NeoMarket</span>
            </h2>
            <p className="about__description">
              NeoMarket is a leading cryptocurrency trading platform that
              combines cutting-edge technology with user-friendly features. Our
              platform provides secure, efficient, and innovative trading
              solutions for both beginners and experienced traders.
            </p>
            <div className="about__features">
              <div className="feature">
                <div className="feature__icon">
                  <FaShieldAlt />
                </div>
                <div className="feature__text">
                  <h3>Secure Platform</h3>
                  <p>Multi-layer security with advanced encryption</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature__icon">
                  <FaChartLine />
                </div>
                <div className="feature__text">
                  <h3>Advanced Trading</h3>
                  <p>Professional tools and real-time analytics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about__stats">
            {stats.map((stat, index) => (
              <div className="stat__card" key={index}>
                <div
                  className="stat__icon"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                </div>
                <h3 className="stat__number">{stat.number}</h3>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
