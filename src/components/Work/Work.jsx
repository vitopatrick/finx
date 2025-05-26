import React from "react";
import {
  FaUserPlus,
  FaWallet,
  FaChartBar,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./work.css";

const Work = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      description: "Sign up in minutes with our simple verification process",
      number: "01",
    },
    {
      icon: <FaWallet />,
      title: "Fund Your Wallet",
      description: "Deposit crypto or fiat currency to start trading",
      number: "02",
    },
    {
      icon: <FaChartBar />,
      title: "Start Trading",
      description: "Access advanced trading tools and real-time market data",
      number: "03",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Profits",
      description: "Grow your portfolio with our competitive rates",
      number: "04",
    },
  ];

  return (
    <section className="work">
      <div className="container">
        <div className="work__header">
          <h2 className="work__title">
            How It <span className="highlight">Works</span>
          </h2>
          <p className="work__subtitle">
            Get started with cryptocurrency trading in four simple steps
          </p>
        </div>

        <div className="work__timeline">
          {steps.map((step, index) => (
            <div className="step__card" key={index}>
              <div className="step__number">{step.number}</div>
              <div className="step__icon">{step.icon}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
