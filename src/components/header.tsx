import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";

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
            <span>
              <Link to="/about-us">About Us</Link>
            </span>
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
          <li className="dropdown">
            <span>
              <Link to="/services">Services</Link>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/standard-cleaning">Standard Cleaning</Link>
              </li>
              <li>
                <Link to="/services/deep-cleaning">Deep Cleaning</Link>
              </li>
              <li>
                <Link to="/services/move-in-out-cleaning">
                  Move-in/out Cleaning
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <Button
          variant="contained"
          href="https://book.housecallpro.com/book/Shine-Squad-Cleaning-Service/6646bb6f7df0452cb1375108a3dd810c?v2=true"
          target="_blank"
        >
          Book Now
        </Button>
        <Button variant="contained">(402) 606-1810</Button>
      </div>
    </header>
  );
};

export default Header;
