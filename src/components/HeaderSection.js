import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import '../css/HeaderSection.scss';

export const HeaderSection = props => {
  return (
    <header className={props.page === 'favs' ? 'slide-up' : 'slide-down'}>
      <SearchBar getGifs={props.getGifs} />

      <nav>
        {props.page === 'favs' ? (
          <Link to={'/'} className='nav-btn'>
            <p>VIEW SEARCH</p>
          </Link>
        ) : (
          <Link to={'/favorites'} className='nav-btn'>
            <p>VIEW FAVS</p>
          </Link>
        )}
      </nav>
    </header>
  );
};
