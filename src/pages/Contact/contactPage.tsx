// ContactPage.jsx
import React, { useState } from "react";
import "./contactPage.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been submitted!");
    // This is where you'd connect to an email API or backend service
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
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
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
