import React from "react";
import "./App.css";
import ShineSquadLogo from "./assets/images/shineSquadLogo";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

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
