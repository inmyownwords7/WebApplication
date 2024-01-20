// src/components/HeroImage.tsx
// @ts-ignore
import React, { Component } from 'react';
import '../css/HeroImage.css';

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    );
  }
}

export default HeroImage;
