import React from "react";
import "../css/Gif.scss";

export const Gif = props => {
  const { image, title } = props;
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "140px"
  };
  return <div className="gif-wrapper" style={divStyle}></div>;
};
