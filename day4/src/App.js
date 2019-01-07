import React, { Component } from 'react';

import './App.css';
import {Decrement} from './Decrement';
import {ListContacts} from './ListContacts';




const contacts = [
  {
    "name": "Marissa Herman",
    "mobile": "(881) 400-3789",
    "work": "(810) 557-3423",
    "email": "marissaherman@gracker.com"
  },
  {
    "name": "Barker Spencer",
    "mobile": "(987) 456-3405",
    "work": "(866) 409-2049",
    "email": "barkerspencer@gracker.com"
  },
  {
    "name": "Tanya Newman",
    "mobile": "(827) 521-3071",
    "work": "(963) 544-3540",
    "email": "tanyanewman@gracker.com"
  },
  {
    "name": "Dee Knox",
    "mobile": "(895) 483-3712",
    "work": "(869) 450-3161",
    "email": "deeknox@gracker.com"
  },

];

class App extends Component {

  render() {
    return (
      <div className="App">
      <Decrement numba = {5}/>
      <ListContacts listOfContacts = {contacts}/>
      </div>
    );
  }
}

export default App;
