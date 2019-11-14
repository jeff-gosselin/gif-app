import React from "react";
import { Gif } from "./Gif";
import "../css/GifSection.scss";

// This section displays either GIFs from a query search or favored GIFs depending on the webpage/route
export const GifSection = props => {
  const { webpage, data, query, getNextPage, favorites, resultsFound } = props;

  let gifs = data.map(gif => {
    // Checks if GIF is favorited
    const checkIfAdded = favorites.filter(fav => fav.id === gif.id);

    // Populates GIF with data including favor status
    return (
      <Gif
        key={gif.id}
        id={gif.id}
        image={gif.images.fixed_width_downsampled.url}
        webpage={webpage}
        addToFavs={props.addToFavs}
        favCheck={checkIfAdded.length}
      />
    );
  });

  // Populates page with any query results (GIFs). If results are found on Search page, a 'Load More' GIFs button appears. If no results are found a message appears.
  return (
    <div id="gif-section">
      {webpage === "favs" ? <h1 className="title">Favorites</h1> : null}
      <div className="gif-section-grid">{gifs}</div>

      {resultsFound && webpage === "search" ? (
        <div className="load">
          <button onClick={getNextPage}>Load More</button>
        </div>
      ) : null}

      {resultsFound === false ? (
        <h1 className="title">No Results Found.</h1>
      ) : null}
    </div>
  );
};
