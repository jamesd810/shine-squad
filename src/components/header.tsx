import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"; // Ensure this SCSS file is compiled to CSS

const Header = (): React.JSX.Element => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png" alt="Shine Squad Chicago Logo" />
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/book-now">Book Now</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
