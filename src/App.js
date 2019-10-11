import React, { Component } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
