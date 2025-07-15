import CleaningCrew from "../../../assets/images/cleaning-crew.jpg";
import "../contactPage.scss";

export const ContactInfo = () => {
  return (
    <>
      <section className="contact-intro">
        <h1>Contact Shine Squad</h1>
        <p>
          Have a question or want to learn more? We’re here to help! Fill out
          the form below or reach out using our contact info.
        </p>
      </section>

      <section className="contact-info">
        <div className="info-block">
          <h1>How to reach us</h1>
          <img src={CleaningCrew} alt="cleaning-crew" />
          <h3>Phone</h3>
          <p>(402) 606-1810</p>
          <h3>Email</h3>
          <p>info@shinesquadchicago.com</p>
          <h3>Hours</h3>
          <p>
            Mon–Sat: 8am – 7pm
            <br />
            Sunday: Closed
          </p>
        </div>
      </section>
    </>
  );
};
