import React from 'react';
import './App.css';
import Home from './components/Home.jsx'
import Nav from './components/Nav.jsx'
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Home />
    </React.Fragment>
  );
}

export default App;
