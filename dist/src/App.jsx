"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const header_1 = __importDefault(require("./components/header"));
const footer_1 = __importDefault(require("./components/footer"));
const homePage_1 = __importDefault(require("./pages/Home/homePage"));
const aboutUs_1 = __importDefault(require("./pages/AboutUs/aboutUs"));
const howWeWork_1 = __importDefault(require("./pages/AboutUs/HowWeWork/howWeWork"));
const jobApplicationPage_1 = __importDefault(require("./pages/AboutUs/JobApplication/jobApplicationPage"));
const reviews_1 = __importDefault(require("./pages/AboutUs/Reviews/reviews"));
const servicesPage_1 = __importDefault(require("./pages/Services/servicesPage"));
const help_1 = __importDefault(require("./pages/Help/help"));
const contactPage_1 = __importDefault(require("./pages/Contact/contactPage"));
require("./styles/main.scss");
const App = () => {
    return (<react_router_dom_1.BrowserRouter>
      <header_1.default />
      <main>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<homePage_1.default />}/>
          <react_router_dom_1.Route path="/about-us" element={<aboutUs_1.default />}/>
          <react_router_dom_1.Route path="/how-we-work" element={<howWeWork_1.default />}/>
          <react_router_dom_1.Route path="/job-application" element={<jobApplicationPage_1.default />}/>
          <react_router_dom_1.Route path="/reviews" element={<reviews_1.default />}/>
          <react_router_dom_1.Route path="/services" element={<servicesPage_1.default />}/>
          <react_router_dom_1.Route path="/help" element={<help_1.default />}/>
          <react_router_dom_1.Route path="/contact" element={<contactPage_1.default />}/>
        </react_router_dom_1.Routes>
      </main>
      <footer_1.default />
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
