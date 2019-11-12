import React from "react";
import "../css/Gif.scss";

export const Gif = props => {
  const { image, webpage, id } = props;
  const overlay = (
    <div className="fav-btn">
      <button>Add to Favs</button>
    </div>
  );
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "140px"
  };
  return (
    <div className="gif-wrapper" style={divStyle}>
      {webpage === "search" ? overlay : null}
    </div>
  );
};
