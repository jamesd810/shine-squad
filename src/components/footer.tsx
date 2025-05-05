import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-columns">
          {/* Navigation Section */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/standard-cleaning">Standard Cleaning</Link>
              </li>
              <li>
                <Link to="/deep-cleaning">Deep Cleaning</Link>
              </li>
              <li>
                <Link to="/move-in-out-cleaning">Move-in/Out Cleaning</Link>
              </li>
              <li>
                <Link to="/book-now">Booking Page</Link>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="footer-column">
            <h4>Info</h4>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/job-application">Job Application</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="footer-column">
            <h4>Working Hours</h4>
            <ul>
              <li>Mon–Fri: 8am – 7pm</li>
              <li>Sat–Sun: 8am – 5pm</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/61566024971617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom">
          <p>Handcrafted with ♥ by ThemeStreet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
