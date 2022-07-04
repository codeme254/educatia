import React from "react";
import Title from "../Title/Title";
import Course from "./Course";
import {
  Facebook,
  Catering,
  Envelope,
  Transport,
  Map,
  TicketIcon,
  Building,
  Star,
  Fish,
  Download,
} from "../Icons/Icons";

const Courses = () => {
  return (
    <section className="courses">
      <Title subTitle="courses" mainTitle="Browse our online courses" />

      <div className="courses__container">
        <Course
          title="catering and hospitality"
          imgSvg={<Catering />}
          numberOfCourses="10"
        />
        <Course
          title="computer science"
          imgSvg={<Download />}
          numberOfCourses="10"
        />
        <Course title="music" imgSvg={<Star />} numberOfCourses="10" />
        <Course
          title="product marketting"
          imgSvg={<Facebook />}
          numberOfCourses="10"
        />
        <Course
          title="History and archeology"
          imgSvg={<Transport />}
          numberOfCourses="10"
        />
        <Course title="law" imgSvg={<Building />} numberOfCourses="10" />
        <Course
          title="ui/ux design"
          imgSvg={<Catering />}
          numberOfCourses="10"
        />
        <Course
          title="business administration"
          imgSvg={<Envelope />}
          numberOfCourses="10"
        />
        <Course
          title="web management"
          imgSvg={<Download />}
          numberOfCourses="10"
        />
        <Course
          title="hospitality with tourism"
          imgSvg={<Fish />}
          numberOfCourses="10"
        />
        <Course
          title="graphics design"
          imgSvg={<TicketIcon />}
          numberOfCourses="10"
        />
        <Course title="art and design" imgSvg={<Map />} numberOfCourses="10" />
      </div>
    </section>
  );
};

export default Courses;
