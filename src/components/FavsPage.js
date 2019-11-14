import React from "react";
import { HeaderSection } from "./HeaderSection";
import { GifSection } from "./GifSection";
import "../css/FavsPage.scss";

// Favorites page: Consist of Header section which is a nav bar and below a section for favored GIFs
export const FavsPage = props => {
  return (
    <div id="favs-wrapper">
      <HeaderSection webpage="favs" />
      <GifSection
        webpage="favs"
        data={props.data}
        query={props.query}
        favorites={props.favorites}
      />
    </div>
  );
};
