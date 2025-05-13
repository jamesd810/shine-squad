import React from "react";
import "./howWeWork.scss";
import blackLady from "../../../assets/images/black-lady-image.jpg";
import confirmationEmail from "../../../assets/images/confirmationEmail.jpg";
import cleaningLadies from "../../../assets/images/cleaningLadies.jpg";
import shelfCleaning from "../../../assets/images/shelfCleaning.jpg";

const HowWeWork = () => {
  return (
    <div className="how-we-work">
      <section className="intro">
        <h1>How We Work</h1>
        <div className="intro-image">
          <img src={shelfCleaning} alt="Shelf Cleaninng" />
        </div>
      </section>

      <section className="section">
        <h2>Obtain your quote and book an appointment!</h2>
        <p>
          We made it fast, easy, and super convenient for you. With our booking
          form, you can see the prices by selecting the services you want and
          the number of bedrooms/bathrooms of your home. You can always reach
          out to us via phone or email in case you don’t see the services you
          want in the booking form, or if you have any questions. Not only that
          – you can schedule your cleaning without having to write or call
          anyone!
        </p>
        <div className="image-container">
          <img src={blackLady} alt="Booking Form" />
        </div>
      </section>

      <section className="section">
        <h2>Confirmation Emails & Reminders</h2>
        <p>
          After you book your cleaning appointment, you will receive a
          confirmation email informing you that you successfully reserved your
          appointment. We will also make sure to keep you reminded of your
          appointment by sending you automated emails and text messages a couple
          of days before the appointment.
        </p>
        <div className="image-container">
          <img src={confirmationEmail} alt="Confirmation Email" />
        </div>
      </section>

      <section className="section">
        <h2>On the Day of Your Clean</h2>
        <p>
          Our professional cleaners will be at your doorstep on the dot,
          together with all the required equipment needed to make your home
          spotless. The cleaning process is based on a before cleaning and after
          cleaning walk, for the purposes of our cleaners seeing what they need
          to focus on before they start cleaning, and to see if you are happy
          with their work when they’re done.
        </p>
        <div className="image-container">
          <img src={cleaningLadies} alt="Cleaning Day" />
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
