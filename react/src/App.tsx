// App.js (or App.tsx for TypeScript)
import React from "react";
import Footer from "./components/Footer";
import Topnav from "./components/Topnav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import GitHubShowcasePage from "./pages/GitHub"
const App: React.FC = () => {
  return (
    <>
      <Topnav />
        <Routes>
          <Route path="/" element={<HomePage title={"HomePage"} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/github" element={<GitHubShowcasePage />} />
          {/* Add more routes for additional pages */}
        </Routes>
      <Footer title="test" />
    </>
  );
};

export default App;
