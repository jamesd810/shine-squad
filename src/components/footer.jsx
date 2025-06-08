"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./footer.scss");
const Footer = () => {
    return (<footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-columns">
          {/* Navigation Section */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li>
                <react_router_dom_1.Link to="/how-we-work">How We Work</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/services">Services</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/standard-cleaning">Standard Cleaning</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/deep-cleaning">Deep Cleaning</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/move-in-out-cleaning">Move-in/Out Cleaning</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/book-now">Booking Page</react_router_dom_1.Link>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="footer-column">
            <h4>Info</h4>
            <ul>
              <li>
                <react_router_dom_1.Link to="/about-us">About Us</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/help">Help</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/reviews">Reviews</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/job-application">Job Application</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/contact">Contact</react_router_dom_1.Link>
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
                <a href="https://www.facebook.com/61566024971617" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
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
    </footer>);
};
exports.default = Footer;
