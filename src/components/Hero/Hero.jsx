import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
          height: "70dvh",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__overlay">
          <div className="container py-5">
            {/* header CTA */}
            <div>
              <h4 className="text-white font-weight-bold fs-1 fw-bolder">
                The Most Reliable <br /> Crypto App
              </h4>
              <p className="text-white">
                Buy, store, swap and spend cryptocurrency all in one app. <br />{" "}
                Turn Bitcoin into dollars with the bitrocketmine crypto debit
                card. Earn cash back automatically.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row">
                <Link to="/register" className="bg-white p-3 rounded me-4">
                  Register today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
