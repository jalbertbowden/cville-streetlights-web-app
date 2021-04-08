import './App.css';
import React from 'react';
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
