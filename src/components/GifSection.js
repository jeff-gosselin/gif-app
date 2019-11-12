import React from 'react';
import { Gif } from './Gif';
import '../css/GifSection.scss';

export const GifSection = props => {
  const { data, query, getNextPage } = props;
  console.log(props.data);
  let gifs = data.map(gif => {
    return (
      <Gif key={gif.id} image={gif.images.fixed_height.url} title={gif.title} />
    );
  });
  return (
    <div id='gif-section'>
      {query !== '' ? <h4>Results for {query}</h4> : null}

      <div className='gif-section-grid'>{gifs}</div>
      <button onClick={getNextPage}>Load More</button>
    </div>
  );
};
