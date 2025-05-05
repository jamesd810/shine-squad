import React, { useState } from "react";
import JobDescription from "./jobDescription";
import JobApplicationForm from "./jobApplicationForm";
import ThankYouMessage from "./thankYouMessage";

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
