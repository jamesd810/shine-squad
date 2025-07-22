import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import "./jobApplication.scss";

const JobDescription = (): React.JSX.Element => (
  <div className="job-description">
    <section className="section-description">
      <div className="header-with-icon">
        <h2>Become a Cleaning Professional</h2>
        <CleaningServicesIcon />
      </div>
      <p>
        We know that finding a good and stable cleaning job can be challenging.
        Our company is all about performing to achieve the highest industry
        standards and building a stable and loyal client base. We believe the
        company is as good as the people working for it, so we work hard towards
        building a team that will keep exceeding clients' expectations. This is
        only possible if we help our staff improve their skills and get the
        training they need! Cleaning experience is desired but not required at
        our company. If you love cleaning and enjoy helping others, this is a
        job for you! We'll ensure you get the training you need to become a
        cleaning professional.
      </p>
    </section>

    <div className="requirements-row">
      <section className="section-requirements">
        <div className="header-with-icon">
          <h3>Requirements</h3>
          <ChecklistRoundedIcon />
        </div>

        <div className="requirements-container">
          <ul>
            <li>Legally able to work in the US</li>
            <li>English speaking</li>
            <li>Submit and pass a background check</li>
            <li>Access to email or smartphone</li>
            <li>Responsible, reliable transportation, and pleasant</li>
          </ul>
        </div>
      </section>

      <section className="section-requirements">
        <div className="header-with-icon">
          <h3>Good to have</h3>
          <ChecklistRoundedIcon />
        </div>
        <div className="good-to-have-list">
          <ul>
            <li>Valid Driver's License</li>
            <li>Access to a working vehicle</li>
            <li>Cleaning supplies</li>
            <li>
              Have or be willing to purchase Professional General Liability
              Insurance
            </li>
          </ul>
        </div>
      </section>
    </div>

    <section className="what-we-offer">
      <div className="header-with-icon">
        <h3>What We offer</h3>
        <WorkspacePremiumRoundedIcon />
      </div>
      <div>
        <ul>
          <li>No registration fees</li>
          <li>Weekly payment</li>
          <li>Stable regular clients</li>
          <li>No difficult apps to work with</li>
        </ul>
      </div>
    </section>
  </div>
);

export default JobDescription;
