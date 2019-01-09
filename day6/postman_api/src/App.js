import React, { Component } from 'react';
import Search from './Search';
import ZipSearch from './ZipSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>City Search</h2>
        </div>
        <Search/>
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearch/>
      
      </div>
      
    );
  }
}

export default App;
