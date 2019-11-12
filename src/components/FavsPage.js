import React from "react";
import { HeaderSection } from "./HeaderSection";
import { GifSection } from "./GifSection";
import "../css/FavsPage.scss";

export const FavsPage = props => {
  return (
    <div id="favs-wrapper">
      <HeaderSection page="favs" />
      <GifSection webpage="favs" data={props.data} query={props.query} />
    </div>
  );
};
