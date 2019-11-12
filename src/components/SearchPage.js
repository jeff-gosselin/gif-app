import React from 'react';
import { HeaderSection } from './HeaderSection';
import { GifSection } from './GifSection';
import '../css/SearchPage.scss';

export const SearchPage = props => {
  return (
    <div id='search-wrapper'>
      <HeaderSection page='search' getGifs={props.getGifs} />
      <GifSection
        data={props.data}
        query={props.query}
        getNextPage={props.getNextPage}
      />
    </div>
  );
};
