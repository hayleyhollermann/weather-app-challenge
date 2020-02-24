import React from 'react';
import './App.css';
import Footer from '../Footer/Footer'
import SearchBar from '../SearchBar/SearchBar';
import Forecast from '../Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Forecast/>
      <Footer/>
    </div>
  );
}

export default App;
