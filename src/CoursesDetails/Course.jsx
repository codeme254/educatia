import React from "react";
import { Star } from "../Icons/Icons";

const Course = ({
  teacherImg,
  teacherName,
  title,
  svgImg,
  noOfSubCourses,
  ratings,
  numberOfHours,
  pricing,
  enrollLink,
}) => {
  return (
    <div className="course-detail">
      <div className="course-detail__top">
        <div className="course-detail__svg">{svgImg}</div>
        <div>
          <h5 className="course-detail__title">{title}</h5>
          <div className="course-detail__rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star /><span>({ratings})</span>
          </div>
          <div className="teacher">
            <div className="teacher__image">
              <img
                src={teacherImg}
                alt={teacherName}
                className="teacher__image--img"
              />
            </div>
            <p className="teacher__name"> by <span>{teacherName}</span></p>
          </div>
          <p className="course-detail__numberofsub">
            {noOfSubCourses} courses ({numberOfHours} hours)
          </p>
        </div>
      </div>
      <p className="course-detail__pricing">{pricing}</p>
      <a
        href={enrollLink || "https://www.linkedin.com/in/otwoma"}
        className="course-detail__link"
      >
        enroll now
      </a>
    </div>
  );
};

export default Course;
