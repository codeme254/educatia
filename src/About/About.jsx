import React from "react";
import img from "../Assets/images/lib-1-big.jpg";
import AboutDetailGrid from "./AboutDetailGrid";
import Title from "../Title/Title";
import { PaperPlane, Transport, Clock, Envelope } from "../Icons/Icons";

const About = () => {
  return (
    <section className="about">
      <div className="about__flex about__container">
        <div className="about__sides about__image">
          <img
            src={img}
            alt="a photo_ of a library"
            className="about__image--img"
          />
        </div>
        <div className="about__sides about__abouts">
          <div className="u-marg-bottom-md">
            <Title
              subTitle="about us"
              mainTitle="this is why you should learn with us"
            />
          </div>
          <AboutDetailGrid
            icon={<PaperPlane />}
            title="quick feedbacks"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eius laborum aliquid possimus. Facilis repellendus dicta maiores! Dolorem, recusandae."
          />
          <AboutDetailGrid
            icon={<Transport />}
            title="always available"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eius laborum aliquid possimus. Facilis repellendus dicta maiores! Dolorem, recusandae."
          />
          <AboutDetailGrid
            icon={<Clock />}
            title="shedule friendly"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eius laborum aliquid possimus. Facilis repellendus dicta maiores! Dolorem, recusandae."
          />
          <AboutDetailGrid
            icon={<Envelope />}
            title="inbox recommendations"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores eius laborum aliquid possimus. Facilis repellendus dicta maiores! Dolorem, recusandae."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
