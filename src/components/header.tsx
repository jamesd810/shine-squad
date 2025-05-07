import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Shine Squad Chicago Logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <span>About Us</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link to="/job-application">Job Application</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
