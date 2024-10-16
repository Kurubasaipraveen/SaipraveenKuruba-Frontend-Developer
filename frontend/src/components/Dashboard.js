import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  // State for managing the image sources
  const [tradeOptimizerImage, setTradeOptimizerImage] = useState(
    'https://res.cloudinary.com/dyutmmnia/image/upload/v1728987284/defult/klr9kfzowexdvk2pw7ps.png'
  );
  const [marketInsightImage, setMarketInsightImage] = useState(
    'https://res.cloudinary.com/dyutmmnia/image/upload/v1728987281/defult/wuh7ogk1nlp6ktgdlbt8.png'
  );
  const [riskGuardImage, setRiskGuardImage] = useState(
    'https://res.cloudinary.com/dyutmmnia/image/upload/v1728987287/defult/hsvmkqmhigk8prdl9yi3.png'
  );
  const [portfolioSyncImage, setPortfolioSyncImage] = useState(
    ''
  );
  const [opportunityScoutImage, setOpportunityScoutImage] = useState(
    'https://res.cloudinary.com/dyutmmnia/image/upload/v1728987282/defult/ggq85vzodcquimvrczl2.png'
  );

  // UseEffect to change the images after 5 seconds
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTradeOptimizerImage('https://res.cloudinary.com/dyutmmnia/image/upload/v1728986870/project/djtnkgvu9p2s5wyy3geg.png');
    }, 5000);

    const timer2 = setTimeout(() => {
      setMarketInsightImage('https://res.cloudinary.com/dyutmmnia/image/upload/v1728986863/project/rfkk5phgv37abqi3mwnt.png');
    }, 5000);

    const timer3 = setTimeout(() => {
      setRiskGuardImage('https://res.cloudinary.com/dyutmmnia/image/upload/v1728986858/project/zpnrwnwh54rfiidl4mk5.png');
    }, 5000);

    const timer4 = setTimeout(() => {
      setPortfolioSyncImage('https://res.cloudinary.com/dyutmmnia/image/upload/v1728986852/project/sul2ilsxw30m8d7tby3b.png');
    }, 5000);

    const timer5 = setTimeout(() => {
      setOpportunityScoutImage('https://res.cloudinary.com/dyutmmnia/image/upload/v1728986850/project/dmlswvqunmve4z8k67fv.png');
    }, 5000);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="dashboard">
          <div className="first">
            <div className="card trade-optimizer">
              <img src={tradeOptimizerImage} alt="Trade Optimizer Icon" />
              <h3>Trade Optimizer</h3>
              <p>
                Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
              </p>
            </div>
          </div>
          <div className="second">
            <div className="card market-insight">
              <div>
                <h3>Market Insight</h3>
                <p>
                  Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
                </p>
              </div>
              <div>
                <img src={marketInsightImage} alt="Market Insight Icon" />
              </div>
            </div>
            <div className="card card-placeholder">
              <h1>Our Features</h1>
            </div>
          </div>
          <div className="card risk-guard">
            <img src={riskGuardImage} alt="Risk Guard Icon" />
            <h3>Risk Guard</h3>
            <p>
              Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card portfolio-sync">
            <h3>Portfolio Sync</h3>
            <div>
              <p>
                Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
              </p>
            </div>
            <div>
              <img src={portfolioSyncImage} alt="Portfolio Sync Icon" className='port' />
            </div>
          </div>
          <div className="card opportunity-scout">
            <div>
              <h3>Opportunity Scout</h3>
              <p>
                Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early.
              </p>
            </div>
            <div>
              <img src={opportunityScoutImage} alt="Opportunity Scout Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
