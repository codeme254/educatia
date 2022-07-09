import React from "react";
import Carousel from "react-elastic-carousel";
import Title from "../Title/Title";
import Course from "./Course";
import { Envelope } from "../Icons/Icons";

import teacher1 from "../Assets/images/user-7.jpg";
import teacher2 from "../Assets/images/user-8.jpg";
import teacher3 from "../Assets/images/user-9.jpg";
import teacher4 from "../Assets/images/user-5.jpg";
import teacher5 from "../Assets/images/user-6.jpg";
import teacher6 from "../Assets/images/user-4.jpg";
import teacher7 from "../Assets/images/user-3.jpg";
import teacher8 from "../Assets/images/user-12.jpg";
import teacher9 from "../Assets/images/user-11.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

const CoursesDetails = () => {
  return (
    <section className="courses-details-section">
      <Title
        mainTitle="explore our popular courses"
        subTitle="popular courses"
      />

      <div className="pop-courses__container">
        <Carousel itemsToShow={3} breakPoints={breakPoints}>
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher1}
            teacherName="ruth ferland"
            title="html, css and javascript for web developers"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher2}
            teacherName="angela yu"
            title="introduction to software developement 101"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher3}
            teacherName="anna blum"
            title="fundamentals of web design and development"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher4}
            teacherName="jonas schmedtmann"
            title="complete web developer bootcamp 2022"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher5}
            teacherName="jacktone dossyrr"
            title="introduction to marketting principles 2022"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher6}
            teacherName="singh puchar"
            title="the complete meditation guide (updated)"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher7}
            teacherName="dennis otwoma"
            title="mathematics for day to day life (2022) full guide"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher8}
            teacherName="zaphenath paneah"
            title="introduction to  bash scripting (linux) for automation"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
          <Course
            svgImg={<Envelope />}
            teacherImg={teacher9}
            teacherName="jane anderson"
            title="acing technical and non-technical interviews 2022/2023"
            noOfSubCourses={80}
            ratings="5.0"
            numberOfHours="300"
            pricing="$100 all courses / $15 per month"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesDetails;
