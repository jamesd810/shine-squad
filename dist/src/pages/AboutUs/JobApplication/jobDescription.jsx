"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./jobApplication.scss");
const JobDescription = () => (<section className="job-description">
    <section className="section">
      <h2>Become a Cleaning Professional!</h2>
      <p>
        We know that finding a good and stable cleaning job can be challenging.
        Our company is all about performing to achieve the highest industry
        standards and building a stable and loyal client base. We believe the
        company is as good as the people working for it, so we work hard towards
        building a team that will keep exceeding clients' expectations. This is
        only possible if we help our staff improve their skills and get the
        training they need! Cleaning experience is desired but not required at
        our company. If you love cleaning and enjoy helping others - this is a
        job for you! We'll ensure you get the training you need to become a
        cleaning professional.
      </p>
    </section>

    <section className="section-requirements">
      <h3>Requirements</h3>
      <ul>
        <li>Legally able to work in the US</li>
        <li>English speaking</li>
        <li>Submit and pass a background check</li>
        <li>Access to email or smartphone</li>
        <li>Responsible, reliable, and pleasant</li>
      </ul>
    </section>

    <section className="section-requirements">
      <h3>Good to have</h3>
      <ul>
        <li>Valid Driver's License</li>
        <li>Access to a working vehicle</li>
        <li>Contractors must have their own cleaning supplies</li>
        <li>
          Have or be willing to purchase Professional General Liability
          Insurance
        </li>
      </ul>
    </section>

    <section className="what-we-offer">
      <h3>What We offer</h3>
      <ul>
        <li>No registration fees</li>
        <li>Weekly payment</li>
        <li>Stable regular clients</li>
        <li>No difficult apps to work with</li>
      </ul>
    </section>
  </section>);
exports.default = JobDescription;
