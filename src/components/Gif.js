import React from "react";
import "../css/Gif.scss";

export const Gif = props => {
  const { image, webpage, id, addToFavs, favCheck } = props;
  console.log("webpage", webpage);

  const overlay =
    favCheck < 1 ? (
      <div className="fav-btn">
        <button onClick={e => addToFavs(e, id)}>+</button>
      </div>
    ) : (
      <div className="fav-btn">
        <button onClick={e => addToFavs(e, id)}>❤️</button>
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
