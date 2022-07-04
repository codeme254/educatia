import React from "react";

const PricingCard = ({
  planType,
  amount,
  benefitsDescription,
  linkToGettingStarted,
}) => {
  return (
    <div className="pricing-card">
      <h4 className="pricing-card__plan">{planType} plan</h4>
      <h2 className="pricing-card__amount">
        <sup>$</sup>
        <span>{amount}k</span>
      </h2>
      <p className="pricing-card__description">{benefitsDescription}</p>
      <a href={linkToGettingStarted || "/"} className="pricing-card__link">
        get started
      </a>
    </div>
  );
};

export default PricingCard;
