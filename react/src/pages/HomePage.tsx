// src/pages/HomePage.tsx
import React from "react";
import "../css/Homepage.css";
import backgroundImage from "../assets/background.jpg";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

interface HomePageProps {
  title: string;
}
/**@LeftComponent
 * @CenterPageComponent
 * @RightComponent*/
const HomePage: React.FC<HomePageProps> = ({ title }: HomePageProps) => {
  return (
    <>
      <div id="homepageBackdrop"></div>
      <div
        id="homepageBackground"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="homepageContainer">
        <div>
          <h1 id="homepageTitle">Perry Olsson</h1>
          <h2 id="homepageSubtitle">Full-stack Developer</h2>
          <h3 id="homepageText">
            Engineering elegant, performant, and powerful web applications.
          </h3>
        </div>
        <Link to="contact">
          <div id="homepageArrow">
            <img src={arrow}></img>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
