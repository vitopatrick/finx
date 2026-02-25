import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaWallet,
  FaExchangeAlt,
} from "react-icons/fa";
import "./info.css";

const Info = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Platform",
      description:
        "Enterprise-grade security protocols and cold storage for your digital assets",
    },
    {
      icon: <FaChartLine />,
      title: "Advanced Trading",
      description:
        "Professional trading tools with real-time analytics and market insights",
    },
    {
      icon: <FaWallet />,
      title: "Multi-Currency Wallet",
      description:
        "Store and manage multiple cryptocurrencies in one secure wallet",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Instant Exchange",
      description:
        "Seamless currency swaps with competitive rates and low fees",
    },
  ];

  return (
    <section className="info">
      <div className="container">
        <div className="info__header">
          <h2 className="info__title">
            Why Choose <span className="highlight">Capital flow</span>
          </h2>
          <p className="info__subtitle">
            Experience the next generation of cryptocurrency trading and
            investment
          </p>
        </div>

        <div className="info__grid">
          {features.map((feature, index) => (
            <div className="feature__card" key={index}>
              <div className="feature__icon">{feature.icon}</div>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
