import React from "react";
import { CalendarBlog, User } from "../Icons/Icons";

const RecentPost = ({
  image,
  imgAlt,
  date,
  blogger,
  previewText,
  linkToFullRead,
}) => {
  return (
    <a href={linkToFullRead || "/"} className="footer__recentpost">
      <div className="recentpost__image">
        <img
          src={image}
          alt={imgAlt || "representational _img"}
          className="recentpost__image--img"
        />
      </div>
      <div className="recent-post__about">
        <span className="recent-post__about-flex">
          {" "}
          <CalendarBlog /> {date || new Date().toDateString()}
        </span>
        <span className="recent-post__about-flex">
          {" "}
          <User /> {blogger || "admin"}
        </span>
      </div>
      <p className="recent-post__preview-text">{previewText}</p>
    </a>
  );
};

export default RecentPost;
