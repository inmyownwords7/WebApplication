// src/pages/HomePage.tsx
import React from 'react';
import Topnav from '../components/Topnav';
import HeroImage from '../components/HeroImage';
import '../css/Homepage.css';

interface HomePageProps {
  title: string;
}

const HomePage: React.FC<HomePageProps> = ({ title }: HomePageProps) => {
  return (
    <>
      <Topnav />
      <HeroImage />
      <div className="container">{/* Rest of your content */}</div>
    </>
  );
};

export default HomePage;
