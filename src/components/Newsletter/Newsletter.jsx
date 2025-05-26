import React, { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    // For now, we'll just show a success message
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <div className="newsletter__text">
            <h2 className="newsletter__title">
              Stay Updated with <span className="highlight">Crypto</span> News
            </h2>
            <p className="newsletter__description">
              Get the latest cryptocurrency news, updates, and market insights
              delivered straight to your inbox
            </p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form__input"
              />
              <button type="submit" className="form__button">
                Subscribe
                <span className="button__arrow">→</span>
              </button>
            </div>
            {status === "success" && (
              <p className="form__message">Thank you for subscribing!</p>
            )}
          </form>

          <p className="newsletter__privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
