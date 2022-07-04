import React from "react";

const Course = ({ imgSvg, title, numberOfCourses, linkToAllCourses }) => {
  return (
    <a href={linkToAllCourses || "/"} className="course">
      <div className="course__iconimage">{imgSvg}</div>
      <h5 className="course__title">{title}</h5>
      <span className="course__no-of-sub">{numberOfCourses} courses</span>
    </a>
  );
};
export default Course;