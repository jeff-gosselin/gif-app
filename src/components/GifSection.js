import React from "react";
import { Gif } from "./Gif";
import "../css/GifSection.scss";

export const GifSection = props => {
  const { webpage, data, query, getNextPage } = props;
  console.log(props.data);
  let gifs = data.map(gif => {
    return (
      <Gif
        key={gif.id}
        id={gif.id}
        image={gif.images.fixed_width_downsampled.url}
        webpage={webpage}
        addToFavs={props.addToFavs}
      />
    );
  });
  return (
    <div id="gif-section">
      <div className="gif-section-grid">{gifs}</div>

      {query !== "" && webpage === "search" ? (
        <div className="load">
          <button onClick={getNextPage}>Load More</button>
        </div>
      ) : null}
    </div>
  );
};
