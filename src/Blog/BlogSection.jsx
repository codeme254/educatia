import React from "react";
import Title from "../Title/Title";
import Blog from "./Blog";
import img1 from "../Assets/images/learner.jpg";
import img2 from "../Assets/images/extra-img-2.jpg";
import img3 from "../Assets/images/lib-1-sm.jpg";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <Title mainTitle="recent from our blog" subTitle="our blog" />
      <div className="blogs__container">
        <Blog
          image={img1}
          blogger="admin"
          numberOfComments={55}
          title="getting started in your computer science"
          preview="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde, ipsa molestias nesciunt enim cumque. Veniam, provident cum? Porro magnam voluptatem, voluptates adipisci impedit modi."
        />
        <Blog
          image={img2}
          blogger="admin"
          numberOfComments={55}
          title="getting started in your computer science"
          preview="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde, ipsa molestias nesciunt enim cumque. Veniam, provident cum? Porro magnam voluptatem, voluptates adipisci impedit modi."
        />
        <Blog
          image={img3}
          blogger="admin"
          numberOfComments={55}
          title="getting started in your computer science"
          preview="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi unde, ipsa molestias nesciunt enim cumque. Veniam, provident cum? Porro magnam voluptatem, voluptates adipisci impedit modi."
        />
      </div>
    </section>
  );
};

export default BlogSection;
