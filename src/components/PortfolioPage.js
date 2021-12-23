import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the stuff I've done:</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>

    <h3>Check my advanced version</h3>
    <a href="https://ahmedsamir.dev/" target=”_blank”>[My portfolio]</a>
  </div>
);

export default PortfolioPage;
