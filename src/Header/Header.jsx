import React from "react";
import Logo from "../Logo/logo";
import { Twitter, Facebook, Instagram, LinkedIn } from "../Icons/Icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo colTitle="#fff" colSubtitle="#f2f2f2" />

        <div className="header__top--social">
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
        <div className="header__bottom--inner">
          <nav className="header__bottom--navigation">
            <ol className="header__nav-list">
              <li className="header__nav--item">
                <a
                  href="/"
                  className="header__nav--link header__nav--link-active"
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
