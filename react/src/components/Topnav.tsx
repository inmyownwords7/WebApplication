// src/components/Navbar.tsx
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '../css/Topnav.css';

class Topnav extends Component {
  render() {
    return (
      <div className="Topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}

export default Topnav;
