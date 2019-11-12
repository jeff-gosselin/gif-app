import React from 'react';
import { HeaderSection } from './HeaderSection';
import { GifSection } from './GifSection';
import '../css/FavsPage.scss';

export const FavsPage = () => {
  return (
    <div id='favs-wrapper'>
      <HeaderSection page='favs' />
      <GifSection />
    </div>
  );
};
