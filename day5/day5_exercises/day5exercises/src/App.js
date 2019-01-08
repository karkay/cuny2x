import React, { Component } from 'react';
import NameGiver from './NameGiver';
import Folder from    './Folder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Day 5 Exercises</h1>
        <NameGiver/>
        <Folder/>

      </div>
    );
  }
}

export default App;
