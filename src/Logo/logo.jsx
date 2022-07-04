import React from "react";

export const Logo = ({colTitle, colSubtitle}) => {
    return(
        <h2 className="logo">
            <span className="logo__main" style={{color: colTitle}}>educatia</span>
            <span className="logo__sub" style={{color: colSubtitle}}>online education and learning</span>
        </h2>
    )
}

export default Logo;