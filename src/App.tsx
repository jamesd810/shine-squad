import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home/homePage";
import AboutUs from "./pages/AboutUs/aboutUs";
import HowWeWork from "./pages/AboutUs/HowWeWork/howWeWork";
import JobApplicationPage from "./pages/AboutUs/JobApplication/jobApplicationPage";
import Reviews from "./pages/AboutUs/Reviews/reviews";
import Services from "./pages/Services/servicesPage";
import Help from "./pages/Help/help";
import ContactPage from "./pages/Contact/contactPage";
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
