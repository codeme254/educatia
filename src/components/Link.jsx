import React from "react";

const Link = ({ bgColor, text, to }) => {
  return (
    <a
      href={to || "/"}
      className="link-main"
      style={{ backgroundColor: bgColor || '#fff', color: bgColor==="#1eb2a6" ? 'white': "#1eb2a6"} }
    >
      <span className="link-main__text">{text}</span>
      <span className="link-main__icon">&rarr;</span>
    </a>
  );
};

export default Link;
