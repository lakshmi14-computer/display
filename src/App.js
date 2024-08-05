// src/App.js
import React from 'react';
import './App.css';
import Disc from './Disc';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Disc/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
