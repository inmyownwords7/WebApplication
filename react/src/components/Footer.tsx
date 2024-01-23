// Footer.tsx

// @ts-ignore
import React from "react";
import "../css/Footer.css"; // Import the external CSS file
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import { useLocation } from "react-router-dom";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }: FooterProps) => {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      <a href="https://www.google.com/">
        <img
          className={
            pathname != "/" ? " socialLinkBlack socialLink" : "socialLink"
          }
          src={linkedIn}
        ></img>
      </a>
      <a href="https://www.google.com/">
        <img
          className={
            pathname != "/" ? " socialLinkBlack socialLink" : "socialLink"
          }
          src={github}
        ></img>
      </a>
      <a href="https://www.google.com/">
        <img
          className={
            pathname != "/" ? " socialLinkBlack socialLink" : "socialLink"
          }
          src={twitter}
        ></img>
      </a>
    </div>
  );
};

export default Footer;
