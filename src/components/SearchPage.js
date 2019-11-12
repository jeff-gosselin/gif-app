import React from "react";
import { HeaderSection } from "./HeaderSection";
import { GifSection } from "./GifSection";
import "../css/SearchPage.scss";

export const SearchPage = props => {
  return (
    <div id="search-wrapper">
      <HeaderSection
        webpage="search"
        getGifs={props.getGifs}
        handleNewSearch={props.handleNewSearch}
      />
      <GifSection
        webpage="search"
        data={props.data}
        query={props.query}
        getNextPage={props.getNextPage}
      />
    </div>
  );
};
