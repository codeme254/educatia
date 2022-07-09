import React, { useState, useRef } from "react";
import Logo from "../Logo/logo";
import { Twitter, Facebook, Instagram, LinkedIn } from "../Icons/Icons";

const Header = () => {
  const headerRef = useRef(null);
  const headerSocialRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [headerSocialIsActive, setHeaderSocialActive] = useState(false);
  const toggleNav = () => {
    setIsActive(!isActive)
    setHeaderSocialActive(!headerSocialIsActive)
    isActive ? headerRef.current.classList.add('header__bottom--inner--active'): headerRef.current.classList.remove('header__bottom--inner--active')
    headerSocialIsActive ? headerSocialRef.current.classList.add('header__top--social--active'): headerSocialRef.current.classList.remove('header__top--social--active')
  }
  return (
    <header className="header">
      <div className="header__top">
        <Logo colTitle="#fff" colSubtitle="#f2f2f2" />

        <div className="header__top--social" ref={headerSocialRef}>
          <div className="col-box">
            <p className="col-box__top">monday - friday</p>
            <p className="col-box__bottom">8:00am-8:00pm</p>
          </div>
          <div className="col-box">
            <p className="col-box__top">call us</p>
            <p className="col-box__bottom">+2547123456789</p>
          </div>
          <div className="header__top--links">
            <a href="/" className="header__social-link">
              <LinkedIn />
            </a>
            <a href="/" className="header__social-link">
              <Twitter />
            </a>
            <a href="/" className="header__social-link">
              <Facebook />
            </a>
            <a href="/" className="header__social-link">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <button className="menu-button" onClick={toggleNav}>
          <div className="menu-button__line menu-button__line--1"></div>
          <div className="menu-button__line menu-button__line--2"></div>
          <div className="menu-button__line menu-button__line--3"></div>
        </button>
        <div className="header__bottom--inner" ref={headerRef}>
          <nav className="header__bottom--navigation">
            <ol className="header__nav-list">
              <li className="header__nav--item">
                <a
                  href="/"
                  className="header__nav--link"
                >
                  home
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  all courses
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  about
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  team
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  pricing
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  journal
                </a>
              </li>
              <li className="header__nav--item">
                <a href="/" className="header__nav--link">
                  contact
                </a>
              </li>
            </ol>
          </nav>
          <a href="/" className="header__button-link">
            get certificate
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
