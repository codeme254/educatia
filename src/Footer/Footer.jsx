import React from "react";
import Logo from "../Logo/logo";
import FooterLink from "./FooterLink";
import RecentPost from "./RecentPost";
import {
  Twitter,
  LinkedIn,
  Facebook,
  Map,
  PaperPlane,
  Envelope,
} from "../Icons/Icons";

import img1 from "../Assets/images/lib-2-sm.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-main-content-container">
          <div className="footer-content footer-content-1">
            <Logo colSubtitle="#1eb2a6" colTitle="#222" />
            <p className="footer__about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae in
              assumenda facilis minima voluptatibus ad, velit, sequi cupiditate
              nam expedita labore fuga?
            </p>
            <div className="footer__social">
              <a href="/" className="footer__link">
                <Twitter />
              </a>
              <a href="/" className="footer__link">
                <Facebook />
              </a>
              <a href="/" className="footer__link">
                <LinkedIn />
              </a>
            </div>
          </div>

          {/* second part of content in the footer */}
          <div className="footer-content">
            <h4 className="footer-title">explore</h4>
            <ol className="footer__list">
              <FooterLink linkText="about us" />
              <FooterLink linkText="services" />
              <FooterLink linkText="courses" />
              <FooterLink linkText="blog" />
              <FooterLink linkText="contact us" />
            </ol>
          </div>

          {/* third contnet of the footer */}
          <div className="footer-content">
            <h4 className="footer-title">quick links</h4>
            <ol className="footer__list">
              <FooterLink linkText="contact us" />
              <FooterLink linkText="pricing" />
              <FooterLink linkText="terms and conditions" />
              <FooterLink linkText="feedback" />
              <FooterLink linkText="report an issue" />
            </ol>
          </div>

          {/* third content of the footer */}
          <div className="footer-content">
            <h4 className="footer-title">recent posts</h4>
            <div className="footer__recent-posts">
              <RecentPost
                image={img1}
                previewText="creativity and personality"
                blogger="zaphy"
              />
              <RecentPost
                image={img1}
                previewText="becoming an entrepreneur"
                blogger="zaphy"
              />
              <RecentPost
                image={img1}
                previewText="learning data strucutres"
                blogger="zaphy"
              />
            </div>
          </div>

          {/* fourth content of the footer */}
          <div className="footer-content">
            <h4 className="footer-title">any questions?</h4>
            <p className="footer-reach">
              {" "}
              <Map /> <span>Kirinyaga County, kenya</span>
            </p>
            <p className="footer-reach">
              {" "}
              <PaperPlane /> <span>+1234567890</span>
            </p>
            <p className="footer-reach">
              {" "}
              <Envelope /> <span>info@somedomain.com</span>
            </p>
          </div>
        </div>
      </footer>
      <p className="footer__copyright">
        copyright &copy; 2022. Made with <span>&hearts;</span> by{" "}
        <a
          href="https://www.linkedin.com/in/otwoma"
          className="footer-copyright-link"
        >
          otwoma dennis
        </a>
        .
      </p>
    </>
  );
};

export default Footer;
