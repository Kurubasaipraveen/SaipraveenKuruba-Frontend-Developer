import React from 'react';
import '../styles/About.css'; 
const AboutEthAi = () => {
  return (
    <div className="about-container">
      <h2>About EthAi</h2>
      <p>
        At EthAi, we're all about making crypto trading easier and more intuitive. We provide tools 
        that help traders keep up with all new market trends, track top traders' movements.
      </p>
      <button className="read-more-btn">Read more</button>

      <div className="combined-feature-card">
        {/* Stay Ahead */}
        <div className="feature-item">
          <div className="icon stay-ahead-icon"></div>
          <h3>Stay Ahead</h3>
          <p>No more guesswork—get clear, trustable insights.</p>
        </div>

        {/* Know Your Assets */}
        <div className="feature-item">
          <div className="icon know-assets-icon"></div>
          <h3>Know Your Assets</h3>
          <p>Always stay on top of how your investments are performing.</p>
        </div>

        {/* Simple, Not Overwhelming */}
        <div className="feature-item">
          <div className="icon simple-icon"></div>
          <h3>Simple, Not Overwhelming</h3>
          <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
        </div>

        {/* Future-Proof */}
        <div className="feature-item">
          <div className="icon future-proof-icon"></div>
          <h3>Future-Proof</h3>
          <p>We're constantly improving, adding new features to help you make the most informed decisions possible.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutEthAi;
