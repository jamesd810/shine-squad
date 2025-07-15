import React, { useState } from "react";
import JobDescription from "./JobDescription";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
import ThankYouMessage from "./ThankYouMessage";

const JobApplicationPage = (): React.JSX.Element => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <>
          <JobDescription />
          <JobApplicationForm onSubmit={handleFormSubmit} />
        </>
      ) : (
        <ThankYouMessage />
      )}
    </div>
  );
};

export default JobApplicationPage;
