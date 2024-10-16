import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728981969/gbfb82pumsdsgvivfjcf.png"
          className="logo"
          alt="logo"
        />
        <h3>EthAi</h3>
      </div>

      <div className="navbar-links-container">
        
        <ul className="navbar-links">
   
      <img
          src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728981969/gbfb82pumsdsgvivfjcf.png"
          className="logo"
          alt="logo"
        />
          <li>Features</li>
          <li>Why Us</li>
          <li>Tokenomics</li>
          <li>Roadmap</li>
          <div className="menu-toggle">
        ☰
      </div>
        </ul>
      </div>

      <div className="navbar-actions">
        <button className='login-btn'>Login</button>
        <button className="whitepaper-btn">Whitepaper</button>
      </div>
    </nav>
  );
};

export default Navbar;
