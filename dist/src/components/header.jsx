"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./header.scss");
const logo_png_1 = __importDefault(require("../assets/images/logo.png"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Header = () => {
    return (<header className="site-header">
      <div className="logo">
        <react_router_dom_1.Link to="/">
          <img src={logo_png_1.default} alt="Shine Squad Chicago Logo"/>
        </react_router_dom_1.Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
          </li>
          <li className="dropdown">
            <span>
              <react_router_dom_1.Link to="/about-us">About Us</react_router_dom_1.Link>
            </span>
            <ul className="dropdown-menu">
              <li>
                <react_router_dom_1.Link to="/how-we-work">How We Work</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/job-application">Job Application</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/reviews">Reviews</react_router_dom_1.Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span>
              <react_router_dom_1.Link to="/services">Services</react_router_dom_1.Link>
            </span>
            <ul className="dropdown-menu">
              <li>
                <react_router_dom_1.Link to="/services/standard-cleaning">Standard Cleaning</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/services/deep-cleaning">Deep Cleaning</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/services/move-in-out-cleaning">
                  Move-in/out Cleaning
                </react_router_dom_1.Link>
              </li>
            </ul>
          </li>
          <li>
            <react_router_dom_1.Link to="/help">Help</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/contact">Contact</react_router_dom_1.Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <Button_1.default variant="contained" href="https://book.housecallpro.com/book/Shine-Squad-Cleaning-Service/6646bb6f7df0452cb1375108a3dd810c?v2=true" target="_blank">
          Book Now
        </Button_1.default>
        <Button_1.default variant="contained">(402) 606-1810</Button_1.default>
      </div>
    </header>);
};
exports.default = Header;
