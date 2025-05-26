import React from "react";
import { FaUserPlus, FaWallet, FaChartLine, FaLock } from "react-icons/fa";
import "./start.css";

const Start = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      description: "Sign up in minutes with our simple verification process",
      color: "#4f6ef7",
    },
    {
      icon: <FaWallet />,
      title: "Fund Wallet",
      description: "Deposit crypto or fiat currency to start trading",
      color: "#a855f7",
    },
    {
      icon: <FaLock />,
      title: "Secure Assets",
      description: "Your funds are protected with industry-leading security",
      color: "#10b981",
    },
    {
      icon: <FaChartLine />,
      title: "Start Trading",
      description: "Access advanced tools and start trading instantly",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="start">
      <div className="start__hero">
        <div className="container">
          <div className="start__header">
            <h2 className="start__title">
              Get Started <span className="highlight">Today</span>
            </h2>
            <p className="start__subtitle">
              Begin your crypto trading journey in four simple steps. Join
              thousands of traders who have already started their financial
              success with NeoMarket.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="start__grid">
          {steps.map((step, index) => (
            <div className="step__card" key={index}>
              <div
                className="step__icon"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <span style={{ color: step.color }}>{step.icon}</span>
              </div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>
              <div className="step__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Start;
