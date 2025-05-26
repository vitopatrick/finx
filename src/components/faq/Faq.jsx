import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with cryptocurrency trading?",
      answer:
        "Getting started is easy! Create an account, complete the verification process, deposit funds into your wallet, and you can start trading immediately. We offer comprehensive guides and tutorials for beginners.",
    },
    {
      question: "What security measures do you have in place?",
      answer:
        "We implement industry-leading security measures including 2FA, cold storage for funds, regular security audits, and advanced encryption protocols to ensure your assets are protected.",
    },
    {
      question: "What cryptocurrencies can I trade?",
      answer:
        "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, and other major altcoins. Our platform regularly adds new tokens based on market demand and thorough security assessments.",
    },
    {
      question: "What are the trading fees?",
      answer:
        "Our fee structure is competitive and transparent. Trading fees typically range from 0.1% to 0.5% depending on your trading volume and membership tier. We also offer special discounts for high-volume traders.",
    },
    {
      question: "How can I withdraw my funds?",
      answer:
        "You can withdraw your funds to your personal wallet or bank account at any time. We process withdrawals quickly and securely, usually within 24 hours, subject to security verification.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="faq__subtitle">
            Find answers to common questions about our platform and services
          </p>
        </div>

        <div className="faq__accordion">
          {faqs.map((faq, index) => (
            <div
              className={`accordion__item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="accordion__header"
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion__question">{faq.question}</span>
                <FaChevronDown className="accordion__icon" />
              </button>
              <div className="accordion__content">
                <p className="accordion__answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
