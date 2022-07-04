import React from "react";
import { User, Calendar } from "../Icons/Icons";

const Blog = ({ linkToFullRead, image, imageAlt, blogger, date, numberOfComments, title, preview}) => {
    return(
        <a href={linkToFullRead || 'https://www.linkedin.com/in/otwoma'} className="blog">
            <div className="blog__image">
                <img src={image} alt={imageAlt || 'representational _image'} className="blog__image--img" />
            </div>
            <div className="blog__body">
                <div className="blog__meta">
                    <span className="blog__meta-flex"><User /> {blogger}</span>
                    <span className="blog__meta-flex"><Calendar /> {date || new Date().toDateString()}</span>
                    <span className="blog__meta-flex blog__meta-flex--colored"><Calendar /> {numberOfComments} comments</span>
                </div>
                <h4 className="blog__title">{title}</h4>
                <p className="blog__preview">{preview}</p>
            </div>
        </a>
    )
}

export default Blog;