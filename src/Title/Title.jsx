import React from "react";

const Title = ({subTitle, mainTitle}) => {
    return(
        <h2 className="title">
            <span className="title__sub">{subTitle}</span>
            <span className="title__main">{mainTitle}</span>
        </h2>
    )
}

export default Title;