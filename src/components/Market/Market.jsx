import React from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "./market.css";

const Market = () => {
  const marketData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "45,879.23",
      change: "+5.67",
      volume: "32.5B",
      isPositive: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "3,245.12",
      change: "+3.24",
      volume: "15.8B",
      isPositive: true,
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "1.45",
      change: "-2.34",
      volume: "4.2B",
      isPositive: false,
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "156.78",
      change: "+8.91",
      volume: "7.9B",
      isPositive: true,
    },
  ];

  return (
    <section className="market">
      <div className="container">
        <div className="market__header">
          <h2 className="market__title">
            Live <span className="highlight">Market</span> Data
          </h2>
          <p className="market__subtitle">
            Real-time cryptocurrency prices and trading volume
          </p>
        </div>

        <div className="market__ticker">
          {marketData.map((coin, index) => (
            <div className="coin__card" key={index}>
              <div className="coin__header">
                <div className="coin__name">
                  <h3>{coin.name}</h3>
                  <span className="coin__symbol">{coin.symbol}</span>
                </div>
                <div
                  className={`coin__change ${
                    coin.isPositive ? "positive" : "negative"
                  }`}
                >
                  {coin.isPositive ? <FaCaretUp /> : <FaCaretDown />}
                  {coin.change}%
                </div>
              </div>
              <div className="coin__price">${coin.price}</div>
              <div className="coin__volume">24h Volume: ${coin.volume}</div>
              <div className="coin__chart">
                {/* Placeholder for future chart implementation */}
                <div
                  className={`chart__line ${
                    coin.isPositive ? "positive" : "negative"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
