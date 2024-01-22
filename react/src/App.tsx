// App.js (or App.tsx for TypeScript)
import React from "react";
import Footer from "./components/Footer";
import Topnav from "./components/Topnav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import GitHubShowcasePage from "./pages/WorkPage"
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
// import  './App.css';
const App: React.FC = () => {
  return (
    <>
      <Topnav />
        <Routes>
          <Route path="/" element={<HomePage title={"HomePage"} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/github" element={<GitHubShowcasePage />} />
        </Routes>
      <Footer title="test" />
    </>
  );
};

export default App;
