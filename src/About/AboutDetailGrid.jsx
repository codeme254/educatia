import React from "react";

const AboutDetailGrid = ({ icon, title, description }) => {
  return (
    <div className="about-detail">
      <div className="about-detail__icon">{icon}</div>
      <h5 className="about-detail__title">{title}</h5>

      <p className="about-detail__description">{description}</p>
    </div>
  );
};

export default AboutDetailGrid;
