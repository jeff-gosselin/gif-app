import React from "react";
import "../css/Gif.scss";

// The GIF component with add/remove from favorites toggle button
export const Gif = props => {
  const { image, webpage, id, addToFavs, favCheck } = props;

  // Checks status of GIF (if it has been favorited or not) then creates the appropriate overlay button
  const overlay =
    favCheck < 1 ? (
      <div className="fav-btn">
        <button onClick={e => addToFavs(e, id)}>+</button>
      </div>
    ) : (
      <div className="fav-btn">
        <button onClick={e => addToFavs(e, id)}>♥</button>
      </div>
    );

  // Sets up style for GIF
  const gifStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  // If on the Search page, the overlay add/remove favorite button will appear. Otherwise, it will not.
  return (
    <div className="gif-wrapper" style={gifStyle}>
      {webpage === "search" ? overlay : null}
    </div>
  );
};
