import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="brand-logo">
          <img src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728981969/gbfb82pumsdsgvivfjcf.png" alt="EthAi Logo" />
          <span>EthAi</span>
        </div>
        <div className="social-icons">
        <i className="bi bi-telegram"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-discord"></i>
        </div>
      </div>

      <div className="footer-right">
        <blockquote className="quote">
          "Designed for traders of today,<br />just like you."
        </blockquote>
        <div className="email-form">
          <input type="email" placeholder="What's your work email?" />
          <button type="submit">Get Started</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
