import React from "react";
import "./aboutUs.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import SecurityIcon from "@mui/icons-material/Security";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import ForumIcon from "@mui/icons-material/Forum";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <h1>About Us</h1>
        <p>
          Welcome to Shine Squad Cleaning Service, your trusted partner in
          residential and commercial cleaning across Chicago and the Chicagoland
          area. As a newly established company, we are committed to delivering
          exceptional cleaning services tailored to meet your unique needs. Our
          dedicated team combines attention to detail with the latest cleaning
          techniques to ensure your spaces shine, whether at home or at work. At
          Shine Squad, we take pride in our professionalism, reliability, and a
          strong focus on customer satisfaction. Let us help you maintain a
          clean and inviting environment—because a clean space is a happy space!
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <CalendarMonthIcon />
            <h3>Book Online</h3>
            <p>
              Select the date and time you’d like your professional to show up.
            </p>
          </div>
          <div className="step">
            <CreditCardIcon />
            <h3>Clean</h3>
            <p>A certified cleaner comes over and cleans your place.</p>
          </div>
          <div className="step">
            <BeachAccessIcon />
            <h3>Relax</h3>
            <p>Sit back and relax. Enjoy your sparkling home!</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="features">
          <div className="feature">
            <TimerSharpIcon />
            <h3>Saves You Time</h3>
            <p>
              Shine Squad Cleaning Service helps you live smarter, giving you
              time to focus on what’s most important.
            </p>
          </div>
          <div className="feature">
            <SecurityIcon />
            <h3>Safety First</h3>
            <p>
              We rigorously vet all of our Cleaners, who undergo identity checks
              as well as in-person interviews.
            </p>
          </div>
          <div className="feature">
            <StarBorderIcon />
            <h3>Only The Best Quality</h3>
            <p>
              Our skilled professionals go above and beyond on every job.
              Cleaners are rated and reviewed after each task.
            </p>
          </div>
          <div className="feature">
            <TabletAndroidIcon />
            <h3>Easy to Get Help</h3>
            <p>
              Select your ZIP code, number of bedrooms and bathrooms, date and
              relax while we take care of your home.
            </p>
          </div>
          <div className="feature">
            <ForumIcon />
            <h3>Seamless Communication</h3>
            <p>
              Online communication makes it easy for you to stay in touch with
              your Cleaners.
            </p>
          </div>
          <div className="feature">
            <MonetizationOnIcon />
            <h3>Cash Free Payment</h3>
            <p>Pay securely online only when the cleaning is complete.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
