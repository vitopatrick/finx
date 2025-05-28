import React from "react";
import "../styles/pages.css";

const Terms = () => {
  return (
    <div className="page-container">
      <div className="page-content fade-in">
        <div className="page-header">
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">
            Please read these terms and conditions carefully before using our
            platform.
          </p>
        </div>

        <div className="terms-content">
          <div className="terms-section">
            <h2 className="terms-section-title">1. Account Registration</h2>
            <ul className="terms-list">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You must provide accurate and complete information during
                registration.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You must notify us immediately of any unauthorized use of your
                account.
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">2. Trading Rules</h2>
            <ul className="terms-list">
              <li>
                All trading activities must comply with applicable laws and
                regulations.
              </li>
              <li>
                Market manipulation and fraudulent activities are strictly
                prohibited.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts engaged in
                suspicious activities.
              </li>
              <li>Trading fees and commissions may apply to transactions.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">3. Risk Disclosure</h2>
            <ul className="terms-list">
              <li>Cryptocurrency trading involves substantial risk of loss.</li>
              <li>Past performance is not indicative of future results.</li>
              <li>You should only trade with funds you can afford to lose.</li>
              <li>
                We are not responsible for any losses incurred during trading.
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">4. Privacy & Security</h2>
            <ul className="terms-list">
              <li>
                We collect and process personal data in accordance with our
                Privacy Policy.
              </li>
              <li>
                We implement industry-standard security measures to protect your
                information.
              </li>
              <li>
                You are responsible for enabling two-factor authentication and
                other security features.
              </li>
              <li>
                We may share information with regulators or law enforcement when
                required by law.
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">5. Service Modifications</h2>
            <ul className="terms-list">
              <li>
                We reserve the right to modify or discontinue services without
                prior notice.
              </li>
              <li>We may update these terms and conditions at any time.</li>
              <li>
                Continued use of our platform constitutes acceptance of modified
                terms.
              </li>
              <li>
                We will notify users of significant changes to our services or
                terms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
