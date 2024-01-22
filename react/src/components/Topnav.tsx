// src/components/Navbar.tsx
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "../css/Topnav.css";
import { Link } from "react-router-dom";

class Topnav extends Component {
  render() {
    return (
      <div className="Topnav">
        <Link className="active" to="">
          Home
        </Link>
        <Link to="contact">Contact Us</Link>
        <Link to="github">Github</Link>
      </div>
    );
  }
}

export default Topnav;
