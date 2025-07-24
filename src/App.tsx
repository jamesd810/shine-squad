import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home/HomePage";
import AboutUs from "./pages/AboutUs/aboutUs";
import HowWeWork from "./pages/AboutUs/HowWeWork/HowWeWork";
import JobApplicationPage from "./pages/AboutUs/JobApplication/JobApplicationPage";
import Reviews from "./pages/AboutUs/Reviews/Reviews";
import Services from "./pages/Services/ServicesPage";
import Help from "./pages/Help/HelpPage";
import ContactPage from "./pages/Contact/ContactPage";
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
