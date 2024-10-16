import React from 'react';
import '../styles/Toke.css'; // Importing the CSS file for this component

const Toke = () => {
  return (
    <div className="tokenomics-container">
      <h2>Tokenomics</h2>
      <div className="tokenomics-content">
        {/* Pie Chart Section */}
        <div className="pie-chart-container">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1728975876/oqdq8bq2qkf1ae4yswqa.png"
            alt="Token Distribution Pie Chart"
            className="pie-chart"
          />
          <div className="chart-label liquidity-pool">Liquidity Pool<br/>(90%)</div>
          <div className="chart-label marketing">Marketing (5%)</div>
          <div className="chart-label team">Team (35%)</div>
        </div>

        {/* Tokenomics Details */}
        <div className="tokenomics-details">
  <div className="token-info">
    <p><strong>Name</strong>: EthAi</p>
    <p><strong>Token Name</strong>: $EthAi</p>
    <p><strong>Token Standard</strong>: ERC20</p>
    <p><strong>Blockchain</strong>: Ethereum</p>
    <p><strong>Total Supply</strong>: 100 Million</p>
    <p><strong>Tax</strong>: 5%/5%</p>
  </div>
  <div className="distribution-info">
    <p><strong>Team</strong>: 35%</p>
    <p><strong>Marketing</strong>: 5%</p>
    <p><strong>Liquidity Pool</strong>: 90%</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Toke;
