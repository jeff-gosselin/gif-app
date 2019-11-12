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
        image={gif.images.fixed_width_downsampled.url}
        title={gif.title}
      />
    );
  });
  return (
    <div id="gif-section">
      {query !== "" && webpage === "search" ? (
        <div>
          <div className="gif-section-grid">{gifs}</div>
          <button onClick={getNextPage}>Load More</button>
        </div>
      ) : null}
    </div>
  );
};
