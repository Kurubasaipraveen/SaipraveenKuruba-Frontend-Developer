import React from 'react';
import '../styles/Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>Roadmap</h1>

      {/* Phase 1 Section */}
      <section className="roadmap-section">
        <div className="roadmap-content">
          <button>Phase 1</button>
          <h2>Kicking Off</h2>
          <ul>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Launch of CRMX Officially
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              User Onboarding for Demo Agents
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              User Onboarding Campaign
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Community Engagement Initiatives
            </li>
          </ul>
        </div>
        <div className="roadmap-image">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728977221/r6h1nw5bpgmqhje6rl5i.png"
            alt="Kicking Off"
          />
        </div>
      </section>

      {/* Phase 2 Section */}
      <section className="roadmap-section">
        <div className="roadmap-image">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728977270/nmxdiglkbdeq9lmg0fw8.png"
            alt="Bigger Insights"
          />
        </div>
        <div className="roadmap-content">
          <button>Phase 2</button>
          <h2>Bigger Insights</h2>
          <ul>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Introduction of Advanced AI Agents
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Strategic User Insights
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              User Retention Optimization
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Comprehensive Marketing Campaign
            </li>
          </ul>
        </div>
      </section>

      {/* Phase 3 Section */}
      <section className="roadmap-section">
        <div className="roadmap-content">
          <button>Phase 3</button>
          <h2>Full Power</h2>
          <ul>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Introduction of Enhanced Features
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              AI-Implemented User Driven Features
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Launch of Community-Focused Initiatives
            </li>
            <li>
              <i className="fas fa-check-circle tick-icons" aria-hidden="true"></i>
              Continuous Improvement and Updates
            </li>
          </ul>
        </div>
        <div className="roadmap-image">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728977241/yoaymioiknoyz5pqaehe.png"
            alt="Full Power"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div>
          <h2>Frequently Asked<br />Questions</h2>
        </div>
        <div>
          <ul>
            <li>
              <i className="fas fa-plus tick-icon" aria-hidden="true"></i>
              What is CRMX?
            </li>
            <li>
              <i className="fas fa-plus tick-icon" aria-hidden="true"></i>
              How can I try the demo version?
            </li>
            <li>
              <i className="fas fa-plus tick-icon" aria-hidden="true"></i>
              What features are included?
            </li>
            <li>
              <i className="fas fa-plus tick-icon" aria-hidden="true"></i>
              How can I give feedback?
            </li>
          </ul>
        </div>
      </section>

      {/* Explore dApp Section */}
      <div className="explore-container">
        <h1>
          Explore Our <span className="highlight">dApp</span>
        </h1>
        <p>
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. 
          By tracking smart money flows, monitoring key wallets, and providing real-time market insights, 
          EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for 
          asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate 
          tool for both novice and experienced traders.
        </p>
        <button className="open-btn">Open dApp</button>
      </div>
    </div>
  );
}

export default Roadmap;
