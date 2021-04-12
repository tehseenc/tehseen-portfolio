import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Works from './components/Works';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Works />
    </>
  );
}

export default App;
