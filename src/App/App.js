import React from 'react';
import './App.css';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Footer/>
    </div>
  );
}

export default App;
