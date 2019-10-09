import React from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
