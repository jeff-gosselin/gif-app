import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../css/HeaderSection.scss";

// Header section which includes a search input and navigation toggle button for either search page or favorites page
export const HeaderSection = props => {
  return (
    <header className={props.webpage === "favs" ? "slide-up" : "slide-down"}>
      <SearchBar
        getGifs={props.getGifs}
        handleNewSearch={props.handleNewSearch}
      />
      ;
      <nav>
        {props.webpage === "favs" ? (
          <Link to={"/"} className="nav-btn">
            <p>VIEW SEARCH</p>
          </Link>
        ) : (
          <Link to={"/favorites"} className="nav-btn">
            <p>
              VIEW{" "}
              {props.favAmount > 0 ? (
                <span className="fav-amt">{props.favAmount}</span>
              ) : null}{" "}
              FAVS
            </p>
          </Link>
        )}
      </nav>
    </header>
  );
};
