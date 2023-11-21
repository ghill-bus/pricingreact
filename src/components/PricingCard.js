import React from "react";
import "../styles/PricingCard.css";
const PricingCard = ({ title, price, storage, users, sendUp }) => {
  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} users in total</div>
        <div className="card-send-up">Send up to {sendUp}</div>
      </div>
      <a href="https://youtu.be/dQw4w9WgXcQ?si=RSXwNvl92krjYPyp">
      <button className="card-btn">READ MORE</button>
      </a>
      
      
    </div>
  );
};

export default PricingCard;