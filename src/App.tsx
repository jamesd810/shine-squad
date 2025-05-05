import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Home from "../src/pages/Home/homePage";
import AboutUs from "../src/pages/AboutUs/aboutUs";
import HowWeWork from "../src/pages/AboutUs/HowWeWork/howWeWork";
import JobApplicationPage from "../src/pages/AboutUs/JobApplication/jobApplicationPage";
import Reviews from "./pages/AboutUs/Reviews/reviews";
import Services from "./pages/Services/servicesPage";
import Help from "../src/pages/Help/help";
import ContactPage from "../src/pages/Contact/contactPage";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/job-application" element={<JobApplicationPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
