import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import moment from "moment";
import "./footer.css";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#f4f4f4", size: "2.4rem" }}>
      <footer className="footer">
        <div className="container d-flex flex-column">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column">
              <h3>About Us</h3>
              <p>
                We are a US Registered company found by a group of Wall Street
                high frequency traders. We have 30 years of combined experience
                trading the cryptocurrency market using cutting edge machine
                learning algorithms.
              </p>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 d-flex flex-column mb-3">
              <h3>Quick Links</h3>
              <Link to="/" className="text-white my-1 text-sec">
                Home
              </Link>
              <Link to="/about" className="text-white my-1 text-sec">
                About
              </Link>
              <Link to="/contact" className="text-white my-1 text-sec">
                Contact
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column mb-5">
              <h3>Contact Info</h3>
              {/* <p>support@Neomarketdfx.online</p> */}
              <p>Atlanta,Georgia United States</p>
            </div>
          </div>
          {/* <div className="footer__links">
            <div className="footer__media">
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </div>
            <div className="footer__media">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </div>
            <div className="footer__media">
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div> */}
          <div>
            <p className="gray">
              Risk Warning: Trading Forex and Leveraged Financial Instruments
              involves significant risk and can result in the loss of your
              invested capital. You should not invest more than you can afford
              to lose and should ensure that you fully understand the risks
              involved. Trading leveraged products may not be suitable for all
              investors. Before trading, please take into consideration your
              level of experience, investment objectives, and seek independent
              financial advice if necessary. It is the responsibility of the
              Client to ascertain whether he/she is permitted to use the
              services of the Neo Market brand based on the legal requirements
              in his/her country of residence. Please read Neo Market’s full
              Risk Disclosure. The information on this website is not intended
              to be addressed to the public of Neo Market.com does not provide
              services to residents of Suriname, North Korea, U.S citizens,
              Syria. other jurisdictions that would be contrary to local law or
              regulation..
            </p>
          </div>
          <div className="text-center mt-3">
            <p>
              COPYRIGHT © RESERVED Neo Market 2014 -{" "}
              {moment(new Date()).format("YYYY")}
            </p>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
