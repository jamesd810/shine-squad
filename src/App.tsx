import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home/HomePage.jsx";
import AboutUs from "./pages/AboutUs/aboutUs.jsx";
import HowWeWork from "./pages/AboutUs/HowWeWork/HowWeWork.jsx";
import JobApplicationPage from "./pages/AboutUs/JobApplication/JobApplicationPage.jsx";
import Reviews from "./pages/AboutUs/Reviews/reviews.jsx";
import Services from "./pages/Services/ServicesPage.jsx";
import Help from "./pages/Help/HelpPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
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
