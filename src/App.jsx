import React from 'react';
import Map from './components/map/Map';
import './App.css'
import Navigation from './components/map/nav/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      < Map />
    </div>
  );
}
export default App;
