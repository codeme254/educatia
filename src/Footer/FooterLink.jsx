import React from "react";
import { ChevronRight } from "../Icons/Icons";

const FooterLink = ({ to, linkText }) => {
  return (
    <li className="footer__link-item">
      <ChevronRight />
      <a href={to || "/"} className="footer__link-item-link">
        {linkText}
      </a>
    </li>
  );
};

export default FooterLink;
