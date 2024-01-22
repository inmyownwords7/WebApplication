// src/pages/HomePage.tsx
import React from "react";
import "../css/Homepage.css";

interface HomePageProps {
  title: string;
}
/**@LeftComponent
 * @CenterPageComponent
 * @RightComponent*/
const HomePage: React.FC<HomePageProps> = ({ title }: HomePageProps) => {
  return (
    <>
      <div className="container"></div>
      <div className="box left-container">
        {/* Left Component */}
        {/* Add your left component content here */}
      </div>
      <div className="box center-container">
        {/* Center Component */}
        {/* Add your center component content here */}
      </div>
      <div className="box right-container">
        {/* Right Component */}
        {/* Add your right component content here */}
      </div>
    </>
  );
};

export default HomePage;
