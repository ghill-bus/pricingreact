import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        
        <header>
          <h1 className="header-topic">Our Pricing Plans</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
       
        <div className="pricing-cards">
          <PricingCard
            title="Basic"
            price={selectMonthly ? "19.99" : "199.99"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Basic Plus"
            price={selectMonthly ? "34.99" : "399.99"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="High End"
            price={selectMonthly ? "79.99" : "899.99"}
            storage="90 GB Storage"
            users="20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;