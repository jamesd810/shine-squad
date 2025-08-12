import React, { useState } from "react";
import JobDescription from "./JobDescription";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
import ThankYouMessage from "./ThankYouMessage";

const JobApplicationPage = (): React.JSX.Element => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFormSubmit = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <JobDescription />
      <JobApplicationForm onSubmit={handleFormSubmit} />
      <ThankYouMessage open={snackbarOpen} onClose={handleSnackbarClose} />
    </div>
  );
};

export default JobApplicationPage;
