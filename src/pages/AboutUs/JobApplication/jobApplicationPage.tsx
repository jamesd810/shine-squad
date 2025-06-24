import React, { useState } from "react";
import JobDescription from "./JobDescription.jsx";
import JobApplicationForm from "./JobApplicationForm.jsx";
import ThankYouMessage from "./ThankYouMessage.jsx";

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
