import React from "react";
import Link from "../components/Link";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <div className="hero__textbox">
        <p className="hero__textbox-sub-text">welcome to educatia</p>
        <h1 className="hero__textbox--main-text">
          best online education experts
        </h1>
        <p className="hero__description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          repellendus commodi saepe numquam voluptatum cum!
        </p>
        <div className="hero__buttons">
            <Link text="get started now" bgColor="#1eb2a6"/>
            <Link text="view course"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
