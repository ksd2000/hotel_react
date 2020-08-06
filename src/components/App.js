import React from 'react';
import Header from './Header';
import View from './View';
import Promotion from './Promotion.js';
import Reviews from './Reviews';
import Destination from './Destination';
import Collections from './Collections';
import Footer from './Footer/index.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <View />
      <Promotion />
      <Reviews />
      <Destination />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
