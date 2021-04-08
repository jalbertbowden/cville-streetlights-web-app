import './App.css';
import React from 'react';
import MainMap from './components/MainMap';
import streetlights from './streetlights.json';

const App = () => {
  return (
      <MainMap streetlights={streetlights}/>
  );
}

export default App;
