import React from 'react';

export const Gif = props => {
  const { image, title } = props;
  return (
    <div>
      <img src={image} alt='' />
      <h2>{title}</h2>
    </div>
  );
};
