import "./help.scss";

const HelpPage = () => {
  return (
    <div className="help-page">
      <section className="intro">
        <h1>Help & FAQs</h1>
        <p>
          Need assistance? Check out our most frequently asked questions below
          or contact our team for support.
        </p>
      </section>

      <section className="faq">
        <div className="faq-item">
          <h2>What areas do you serve?</h2>
          <p>We proudly serve all of Chicago and the surrounding suburbs.</p>
        </div>

        <div className="faq-item">
          <h2>What cleaning services do you offer?</h2>
          <p>
            We provide standard, deep, move in/out, AirBnb cleaning services for
            homes, apartments, and small offices.
          </p>
        </div>

        <div className="faq-item">
          <h2>How much will it cost?</h2>
          <p>
            We price based on the number of bedrooms and bathrooms in the home.
            Select the number and the price is shown instantly on the website.
            Small offices are priced by square footage.
          </p>
        </div>

        <div className="faq-item">
          <h2>How do I book a cleaning?</h2>
          <p>
            You can book directly through our website{" "}
            <a
              href="https://book.housecallpro.com/book/Shine-Squad-Cleaning-Service/6646bb6f7df0452cb1375108a3dd810c?v2=true"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            or by calling us at (810) 288-9804.
          </p>
        </div>

        <div className="faq-item">
          <h2>Do I need to be home during the cleaning?</h2>
          <p>
            No, you can leave us access instructions. We are fully insured and
            background-check our team.
          </p>
        </div>

        <div className="faq-item">
          <h2>What should I do before the cleaners arrive?</h2>
          <p>
            We recommend tidying up any personal items and making sure your pets
            are secured if needed.
          </p>
        </div>
      </section>

      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default HelpPage;
