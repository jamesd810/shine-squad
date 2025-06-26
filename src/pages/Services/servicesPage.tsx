import React, { useState } from "react";
import Button from "@mui/material/Button";
import StandardCleaning from "../../components/cleaningServices/StandardCleaning";
import DeepCleaning from "../../components/cleaningServices/DeepCleaning";
import MoveInMoveOutCleaning from "../../components/cleaningServices/MoveInMoveOutCleaning";
import "./servicesPage.scss";

const ServicesPage = (): React.JSX.Element => {
  const [selectedService, setSelectedService] = useState<string | null>(
    "standard"
  );

  let content: React.JSX.Element | null = null;

  if (selectedService === "deep") {
    content = <DeepCleaning />;
  } else if (selectedService === "moveinmoveout") {
    content = <MoveInMoveOutCleaning />;
  } else {
    content = <StandardCleaning />;
  }

  return (
    <div className="services-page">
      <section className="intro">
        <h1>Services</h1>
        <h2>Types of cleaning we offer</h2>
        <ul>
          <Button
            variant="contained"
            onClick={() => setSelectedService("standard")}
          >
            <li>Standard</li>
          </Button>
          <Button
            variant="contained"
            onClick={() => setSelectedService("deep")}
          >
            <li>Deep</li>
          </Button>
          <Button
            variant="contained"
            onClick={() => setSelectedService("moveinmoveout")}
          >
            <li>Move In/Out</li>
          </Button>
        </ul>
        {content}
      </section>
    </div>
  );
};

export default ServicesPage;
