/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TickerTape } from "react-tradingview-embed";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Plan from "../components/Plan/Plan";
import WithdrawalAlert from "../components/Notifications/WithdrawalAlert";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/D0yrc1uGaH";

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <TickerTape />
      <About />
      <Start />
      <Reason />
      <Plan />
      <Newsletter />
      <Footer />
      <WithdrawalAlert />
    </React.Fragment>
  );
};

export default Home;
