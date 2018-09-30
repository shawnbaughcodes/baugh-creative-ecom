import React from 'react';

import './styles.css';

const Tile = ({ width, height, animation, title, tileType }) => {
  const titleTypes = ['about', 'merch', 'video', 'follow', 'music'];

  return (
    <div className="tile-wrapper" style={{ width: width, height: height }}>
      {titleTypes.map(type => {
        return type === title && <h1>{title.toUpperCase()}</h1>;
      })}
    </div>
  );
};

export default Tile;
