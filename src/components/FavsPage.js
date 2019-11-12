import React from "react";
import { HeaderSection } from "./HeaderSection";
import { GifSection } from "./GifSection";
import "../css/FavsPage.scss";

export const FavsPage = props => {
  return (
    <div id="favs-wrapper">
      <HeaderSection webpage="favs" />
      <GifSection webpage="favs" data={props.data} query={props.query} />
    </div>
  );
};
