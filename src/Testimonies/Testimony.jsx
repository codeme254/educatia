import React from "react";

const Testimony = ({
  userName,
  currentPosition,
  image,
  imgaAlt,
  testimony,
}) => {
  return (
    <div className="testimony">
      <div className="testimony__flex">
        <div className="testimony__image">
          <img
            src={image}
            alt={userName || imgaAlt}
            className="testimony__image--img"
          />
        </div>
        <div className="testimony__user-details">
          <h5 className="testimony__username">{userName}</h5>
          <p className="testimony__usercurrposition">{currentPosition}</p>
        </div>
      </div>
      <p className="testimony__text">{testimony}</p>
    </div>
  );
};

export default Testimony;
