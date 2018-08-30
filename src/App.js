import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeWrapper from './components/HomeWrapper/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeWrapper />
      </div>
    );
  }
}

export default App;
