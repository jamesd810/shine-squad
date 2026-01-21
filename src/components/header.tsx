import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../assets/images/logo.png";
import Button from "@mui/material/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Shine Squad Chicago Logo" />
        </Link>
      </div>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header-actions">
          <Button className="book-btn" variant="contained">
            Book Now
          </Button>
          <Button className="phone-btn" variant="contained">
            (810) 288-9804
          </Button>
        </div>
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
        <Button className="book-btn" variant="contained">
          Book Now
        </Button>
        <Button className="phone-btn" variant="contained">
          (810) 288-9804
        </Button>
      </div>
    </header>
  );
};

export default Header;
