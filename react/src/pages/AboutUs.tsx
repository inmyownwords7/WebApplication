// src/pages/AboutUsPage.tsx
import React from 'react';
import Topnav from '../components/Topnav';
import AboutUsSection from '../components/AboutUsSection';
import TeamSection from '../components/TeamSection';
import '../css/Homepage.css';

const AboutUsPage: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>About Us Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="" />
      </head>
      <body>
        <AboutUsSection />
        <TeamSection />
        <div className="container">{/* Rest of your content */}</div>
      </body>
    </html>
  );
};

export default AboutUsPage;
