// Footer.tsx

// @ts-ignore
import React from 'react';
import '../css/Footer.css'; // Import the external CSS file

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }: FooterProps) => {
  return (
    <div className="footer">
      <p>Footer</p>
    </div>
  );
};

export default Footer;
