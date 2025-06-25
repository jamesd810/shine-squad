import React, { useState } from "react";
import Button from "@mui/material/Button";
import StandardCleaning from "../../components/cleaningServices/StandardCleaning";
import DeepCleaning from "../../components/cleaningServices/DeepCleaning";
import MoveInMoveOutCleaning from "../../components/cleaningServices/MoveInMoveOutCleaning";
import "./servicesPage.scss";

const ServicesPage = (): React.JSX.Element => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelection = () => {
    if (selectedService === "standard") {
      return <StandardCleaning />;
    } else if (selectedService === "deep") {
      return <DeepCleaning />;
    } else if (selectedService === "moveinmoveout") {
      return <MoveInMoveOutCleaning />;
    }
  };
  return (
    <div className="services-page">
      <section className="intro">
        <h1>Services</h1>
        <h2>Types of cleaning we offer</h2>
        <ul>
          <Button variant="contained" onClick={handleServiceSelection}>
            <li>Standard</li>
          </Button>
          <Button variant="contained" onClick={handleServiceSelection}>
            <li>Deep</li>
          </Button>
          <Button variant="contained" onClick={handleServiceSelection}>
            <li>Move In/Out</li>
          </Button>
        </ul>

        {selectedService === "standard" && <StandardCleaning />}
        {selectedService === "deep" && <DeepCleaning />}
        {selectedService === "moveinmoveout" && <MoveInMoveOutCleaning />}
      </section>
    </div>
  );
};

export default ServicesPage;
