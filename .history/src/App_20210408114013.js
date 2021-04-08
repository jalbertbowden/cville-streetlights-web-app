import './App.css';
import React, { useState, useEffect, Component, Fragment } from 'react';
import axios from 'axios';
import MainMap from './components/MainMap';
import streetlights from './streetlights.json';

class App extends Component {
  render(){
  return (
      <MainMap streetlights={streetlights}/>
  );
  }
}

export default App;
