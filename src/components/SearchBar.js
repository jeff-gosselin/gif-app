import React from 'react';
import SearchIcon from '../img/search.png';
import '../css/SearchBar.scss';

export const SearchBar = () => {
  return (
    <form>
      <input className='search-input' type='text' placeholder='Search GIFs' />
      <input
        className='search-icon'
        type='image'
        src={SearchIcon}
        alt='Search'
      />
    </form>
  );
};
