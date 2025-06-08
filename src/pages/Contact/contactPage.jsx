"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// ContactPage.jsx
const react_1 = __importStar(require("react"));
require("./contactPage.scss");
const ContactPage = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    // @ts-ignore
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your message has been submitted!");
        // This is where you'd connect to an email API or backend service
        setFormData({ name: "", email: "", phone: "", message: "" });
    };
    return (<div className="contact-page">
      <section className="contact-intro">
        <h1>Contact Shine Squad</h1>
        <p>
          Have a question or want to learn more? We’re here to help! Fill out
          the form below or reach out using our contact info.
        </p>
      </section>

      <section className="contact-info">
        <div className="info-block">
          <h3>Phone</h3>
          <p>(773) 255-0482</p>
          <h3>Email</h3>
          <p>info@shinesquadchicago.com</p>
          <h3>Hours</h3>
          <p>
            Mon–Sat: 8am – 6pm
            <br />
            Sunday: Closed
          </p>
        </div>
        <div className="info-block">
          <h3>Email</h3>
          <p>info@shinesquadchicago.com</p>
        </div>
        <div className="info-block">
          <h3>Hours</h3>
          <p>
            Mon–Sat: 8am – 6pm
            <br />
            Sunday: Closed
          </p>
        </div>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required/>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number"/>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>);
};
exports.default = ContactPage;
