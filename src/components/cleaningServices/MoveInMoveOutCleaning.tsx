import "../../pages/Services/servicesPage.scss";

const MoveInMoveOutCleaning = (): React.JSX.Element => {
  return (
    <div className="services-page">
      <section className="service-category">
        <h3>Kitchen</h3>
        <ul>
          <li>Wipe Fridge</li>
          <li>Clean Countertops</li>
          <li>Wipe Appliances</li>
          <li>Clean Sink</li>
          <li>Clean Stove</li>
          <li>Clean Stainless Steel</li>
          <li>Wipe Oven</li>
          <li>Microwave (inside)</li>
          <li>Cabinets (inside)</li>
          <li>Drawers (inside)</li>
          <li>Mop floor</li>
        </ul>
      </section>

      <section className="service-category">
        <h3>Bathrooms</h3>
        <ul>
          <li>Clean Countertops</li>
          <li>Scrub Toilets</li>
          <li>Clean Sink</li>
          <li>Rinse & Wipe Tub</li>
          <li>Rinse & Wipe Shower</li>
          <li>Scrub Tub/Shower</li>
          <li>Buff Mirror & Chrome</li>
          <li>Cabinets (inside)</li>
        </ul>
      </section>

      <section className="service-category">
        <h3>All Areas</h3>
        <ul>
          <li>Empty Bins</li>
          <li>Vacuum & Mop</li>
          <li>Dust All Surfaces</li>
          <li>Clean Baseboards</li>
          <li>Light Switches</li>
          <li>Clean Window Ledges</li>
          <li>Dust & Wipe Doors</li>
        </ul>
      </section>

      <section className="service-category">
        <h3>Bedrooms</h3>
        <ul>
          <li>Quick De-clutter</li>
          <li>Make Beds</li>
          <li>Dust All Surfaces</li>
          <li>Wipe Tables</li>
          <li>Clean Cabinets (inside)</li>
          <li>Change Sheets (Upon request)</li>
        </ul>
      </section>
    </div>
  );
};

export default MoveInMoveOutCleaning;
