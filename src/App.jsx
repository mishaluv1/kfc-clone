// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardGrid from './components/CardGrid';
import MovingCardRow from './components/MovingCardRow';


function App() {
  return (
    <>
      <Header />
      <CardGrid></CardGrid>
      <MovingCardRow></MovingCardRow>
      <Footer />
      </>
  );
}

export default App;
