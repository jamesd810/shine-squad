import React from "react";
import "./assets/styles/App.css";
import ShineSquadLogo from "./components/shineSquadLogo/shineSquadLogo";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About Us/aboutUs";
import Services from "./pages/Services/services";
import Help from "./pages/Help/help";
import Contact from "./pages/Contact/contact";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <ShineSquadLogo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/help">Help</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
