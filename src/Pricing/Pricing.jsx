import React from "react";
import Title from "../Title/Title";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <Title mainTitle="pricing and packages" subTitle="pricing" />

      <div className="pricing__cards-container">
        <PricingCard
          planType="basic"
          amount="49"
          benefitsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit ad harum dolor ea cumque minus! Quaerat fuga eligendi quo officia excepturi provident quae neque."
        />
        <PricingCard
          planType="beginner"
          amount="79"
          benefitsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit ad harum dolor ea cumque minus! Quaerat fuga eligendi quo officia excepturi provident quae neque."
        />
        <PricingCard
          planType="premium"
          amount="109"
          benefitsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit ad harum dolor ea cumque minus! Quaerat fuga eligendi quo officia excepturi provident quae neque."
        />
        <PricingCard
          planType="ultimate"
          amount="149"
          benefitsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit ad harum dolor ea cumque minus! Quaerat fuga eligendi quo officia excepturi provident quae neque."
        />
      </div>
    </section>
  );
};

export default Pricing;
