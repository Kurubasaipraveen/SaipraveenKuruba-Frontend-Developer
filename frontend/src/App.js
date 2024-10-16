import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Toke from './components/Toke'; 
import Road from './components/Road';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Dashboard/>
      <About/>
      <Toke/>
      <Road/>
      <Footer/>
    </div>
  );
}

export default App;
