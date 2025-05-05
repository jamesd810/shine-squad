import React from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <h1>Contact</h1>
        <h2>Get in touch</h2>
        <p>
          Not sure which cleaning package suits your home? Want more details on
          our packages, frequency, or professionals? We've got all the answers
          and solutions for you. Reach out TODAY to get a quote!
        </p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:402-606-1810">402-606-1810</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@shinesquadchicago.com">
                info@shinesquadchicago.com
              </a>
            </li>
            <li>
              <strong>Address:</strong> 7627 Lake St Ste 206 #1005, River
              Forest, IL 60305
            </li>
          </ul>
        </div>

        <div className="working-hours">
          <h3>Working Hours</h3>
          <ul>
            <li>Monday: 8am – 7pm</li>
            <li>Tuesday: 8am – 7pm</li>
            <li>Wednesday: 8am – 7pm</li>
            <li>Thursday: 8am – 7pm</li>
            <li>Friday: 8am – 7pm</li>
            <li>Saturday: 8am – 5pm</li>
            <li>Sunday: 8am – 5pm</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
