import React, { Component } from 'react';

import Tile from '../common/Tile';
import './styles.css';

class HomeWrapper extends Component {
  render() {
    return (
      <div className="home-wrapper-style">
        <div className="left-half-home-tiles">
          <div className="left-half-home-tiles-top">
            <Tile title="about" height={'100%'} width={'30%'} />
            <Tile title="merch" height={'100%'} width={'70%'} />
          </div>
          <div className="left-half-home-tiles-bottom">
            <Tile title="music" height={'100%'} width={'100%'} />
          </div>
        </div>
        <div className="right-half-home-tiles">
          <Tile title="video" height={'50%'} width={'100%'} />
          <Tile title="follow" height={'50%'} width={'100%'} />
        </div>
      </div>
    );
  }
}
export default HomeWrapper;
