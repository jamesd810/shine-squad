import React from "react";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Clean home is a happy home.</h1>
          <p>
            Tidiness – our forte. Our services – impeccable. You’re just clicks
            away from a clean home.
          </p>
          <a
            href="https://book.housecallpro.com/book/Shine-Squad-Cleaning-Service/6646bb6f7df0452cb1375108a3dd810c?v2=true"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How our cleaning service works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Book Online</h3>
            <p>
              Choose the date and time you want and book our professional
              cleaners online!
            </p>
          </div>
          <div className="step">
            <h3>2. We Clean</h3>
            <p>
              Our experienced and verified professional cleaners will show up at
              your doorstep and make your home spotless.
            </p>
          </div>
          <div className="step">
            <h3>3. Relax</h3>
            <p>
              All you need to do is kick back while we do the rest – and delight
              in your perfectly cleaned home!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Standard Cleaning</h3>
            <p>Regular cleaning to keep your home neat and tidy.</p>
          </div>
          <div className="service-item">
            <h3>Deep Cleaning</h3>
            <p>Thorough cleaning for a spotless home environment.</p>
          </div>
          <div className="service-item">
            <h3>Move In/Out Cleaning</h3>
            <p>Comprehensive cleaning for moving in or out of a residence.</p>
          </div>
        </div>
        <a href="/services" className="btn-secondary">
          View All Services
        </a>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why You Should Choose Our Services</h2>
        <p>
          It’s not just about keeping your home clean. It’s also about who
          you’re letting into your home. Our complete staff is a group of
          trustworthy people who love and take their job seriously. Our maids
          are professional, friendly, English-speaking and verified individuals
          who will make your place shine, give you some time to sit back, relax,
          and focus on what’s really important by taking the matter into their
          own hands.
        </p>
        <h3>Why You Should Hire Home Cleaning</h3>
        <p>
          There’s more than meets the eye by hiring a home cleaning. Not only
          that it saves your time, it also improves your indoor air quality,
          reduces your stress, and protects the health of you and your family.
          Not only that – by booking our services, you’ll be saving more money
          long-term. By hiring our services, you will keep your furnishing well
          maintained, therefore making it last much longer!
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Easier. Faster. Better. Book our professional cleaners now.</h2>
        <a
          href="https://book.housecallpro.com/book/Shine-Squad-Cleaning-Service/6646bb6f7df0452cb1375108a3dd810c?v2=true"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default HomePage;
