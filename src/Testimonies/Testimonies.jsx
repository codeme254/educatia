import React from "react";
import Carousel from "react-elastic-carousel";
import Title from "../Title/Title";
import Testimony from "./Testimony";
import user1 from "../Assets/images/user-1.jpg";
import user2 from "../Assets/images/user-2.jpg";
import user3 from "../Assets/images/user-3.jpg";
import user4 from "../Assets/images/user-4.jpg";
import user5 from "../Assets/images/user-5.jpg";
import user6 from "../Assets/images/user-6.jpg";
import user10 from "../Assets/images/user-10.jpg";
import user11 from "../Assets/images/user-11.jpg";
import user12 from "../Assets/images/user-12.jpg";

const Testimonies = () => {
  return (
    <section className="testimonies-section">
      <Title mainTitle="our success stories" subTitle="testimonials" />
      <Carousel
        itemsToShow={3}
        itemsToScroll={1}
        enableTilt={true}
        enableSwipe={true}
      >
        <div className="testimony__scroll-helper">
          <Testimony
            image={user1}
            userName="otwoma dennis"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user2}
            userName="christine anabelle"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user3}
            userName="john doe"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user12}
            userName="jacky manny"
            currentPosition="doctor"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user4}
            userName="otwoma dennis"
            currentPosition="software developer"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user11}
            userName="emilly anderson"
            currentPosition="digital entrepreneur"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimony__scroll-helper">
          <Testimony
            image={user5}
            userName="humphrey kym"
            currentPosition="program manager"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>

        <div className="testimonies__scroll-helper">
          <Testimony
            image={user10}
            userName="emilly nafula"
            currentPosition="sales and marketting"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>
        <div className="testimonies__scroll-helper">
          <Testimony
            image={user6}
            userName="bill johnson"
            currentPosition="ethical hacker"
            testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui harum vitae aliquid adipisci laborum unde doloribus, explicabo non. Ad, saepe?"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonies;
