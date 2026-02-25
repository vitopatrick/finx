import React, { useState, useEffect } from "react";
import "./withdrawalAlert.css";

const WithdrawalAlert = () => {
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const names = [
    "Alex",
    "Sarah",
    "Michael",
    "Emma",
    "James",
    "Olivia",
    "William",
    "Sophia",
    "Daniel",
    "Isabella",
    "David",
    "Mia",
    "Joseph",
    "Charlotte",
    "Thomas",
    "Ava",
    "John",
    "Amelia",
  ];

  const amounts = [
    "0.45 BTC",
    "12.5 ETH",
    "2.8 BTC",
    "45.3 ETH",
    "1.2 BTC",
    "28.9 ETH",
    "3.4 BTC",
    "67.2 ETH",
    "0.89 BTC",
    "15.6 ETH",
  ];

  const generateNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    const maskedName = `${randomName.substring(0, 2)}***${randomName.substring(
      randomName.length - 2
    )}`;

    return {
      name: maskedName,
      amount: randomAmount,
      timestamp: new Date().toLocaleTimeString(),
    };
  };

  useEffect(() => {
    // Function to show notification
    const showNotification = () => {
      const newNotification = generateNotification();
      setNotification(newNotification);
      setIsVisible(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    // Set interval for subsequent notifications (random between 10-30 seconds)
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (30000 - 10000) + 10000);
      setTimeout(showNotification, randomDelay);
    }, 35000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`withdrawal-alert ${isVisible ? "show" : ""}`}>
      <div className="withdrawal-alert__icon">💰</div>
      <div className="withdrawal-alert__content">
        <p className="withdrawal-alert__text">
          <span className="withdrawal-alert__name">{notification?.name}</span>{" "}
          has just withdrawn{" "}
          <span className="withdrawal-alert__amount">
            {notification?.amount}
          </span>
        </p>
        <p className="withdrawal-alert__time">{notification?.timestamp}</p>
      </div>
    </div>
  );
};

export default WithdrawalAlert;
