// src/components/Navbar.tsx
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "../css/Topnav.css";
import { Link, useLocation } from "react-router-dom";

const Topnav: React.FC<{}> = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="Topnav"
      style={{
        color: pathname != "/" ? "black" : "white",
      }}
    >
      <div>
        <Link className="active" to="">
          Home
        </Link>
      </div>
      <div>
        <Link
          to="contact"
          style={{
            color: pathname == "/contact" ? "#4affae" : "inherit",
          }}
        >
          Contact Me
        </Link>
        <Link
          to="projects"
          style={{
            color: pathname == "/projects" ? "#4affae" : "inherit",
          }}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
