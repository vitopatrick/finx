import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./plan.css";

const Plan = () => {
  const plans = [
    {
      name: "Basic",
      price: "0",
      period: "month",
      features: [
        "Basic Trading Tools",
        "Market Analysis",
        "Crypto Wallet",
        "Email Support",
        "Basic API Access",
      ],
      isPopular: false,
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "29",
      period: "month",
      features: [
        "Advanced Trading Tools",
        "Real-time Analytics",
        "Multiple Wallets",
        "Priority Support",
        "Full API Access",
        "Lower Trading Fees",
      ],
      isPopular: true,
      cta: "Start Trading",
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      features: [
        "Custom Trading Tools",
        "Dedicated Analytics",
        "Unlimited Wallets",
        "24/7 Support",
        "Custom API Solutions",
        "Lowest Trading Fees",
        "Custom Integrations",
      ],
      isPopular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="plan">
      <div className="plan__hero">
        <div className="container">
          <div className="plan__header">
            <h2 className="plan__title">
              Choose Your <span className="highlight">Plan</span>
            </h2>
            <p className="plan__subtitle">
              Select the perfect trading plan for your investment needs. Start
              with our free tier or upgrade for advanced features and premium
              support.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="plan__grid">
          {plans.map((plan, index) => (
            <div
              className={`plan__card ${plan.isPopular ? "popular" : ""}`}
              key={index}
            >
              {plan.isPopular && (
                <div className="popular__tag">Most Popular</div>
              )}
              <div className="plan__content">
                <h3 className="plan__name">{plan.name}</h3>
                <div className="plan__price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan__features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="feature__icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`plan__cta ${plan.isPopular ? "popular" : ""}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
