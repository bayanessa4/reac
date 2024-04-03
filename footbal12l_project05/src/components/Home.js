import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Site</h1>
      <p>Presented by Bayan Essa</p>
      <Link to="/items">
        <button>Search Items</button>
      </Link>
    </div>
  );
}

export default Home;