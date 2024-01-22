// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Your Website Name</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;