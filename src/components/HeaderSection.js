import React from 'react';
import { SearchBar } from './SearchBar';
import '../css/HeaderSection.scss';

export const HeaderSection = props => {
  return (
    <header className={props.page === 'home' ? 'slide-down' : 'slide-up'}>
      <SearchBar />

      <nav>
        <button>FAVS</button>
      </nav>
    </header>
  );
};
