import React from "react";
import { FaSearch, FaHandshake, FaChartBar, FaRocket } from "react-icons/fa";
import "./howitworks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Research Markets",
      description:
        "Analyze market trends and discover trading opportunities with our advanced tools",
      color: "#4f6ef7",
    },
    {
      icon: <FaHandshake />,
      title: "Execute Trades",
      description:
        "Place trades with confidence using our intuitive trading interface",
      color: "#a855f7",
    },
    {
      icon: <FaChartBar />,
      title: "Track Performance",
      description:
        "Monitor your portfolio and track your trading performance in real-time",
      color: "#10b981",
    },
    {
      icon: <FaRocket />,
      title: "Grow Portfolio",
      description: "Scale your investments and achieve your financial goals",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="howitworks">
      <div className="howitworks__hero">
        <div className="container">
          <div className="howitworks__header">
            <h2 className="howitworks__title">
              How It <span className="highlight">Works</span>
            </h2>
            <p className="howitworks__subtitle">
              Our platform makes cryptocurrency trading simple and efficient.
              Follow these steps to start your trading journey and maximize your
              potential returns.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="howitworks__grid">
          {steps.map((step, index) => (
            <div className="process__card" key={index}>
              <div
                className="process__icon"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <span style={{ color: step.color }}>{step.icon}</span>
              </div>
              <div className="process__content">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__description">{step.description}</p>
              </div>
              <div className="process__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
