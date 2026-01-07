import React, { useState } from "react";
import JobDescription from "./JobDescription";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
import { ThankYouMessage } from "./ThankYouMessage";

export const JobApplicationPage = (): React.JSX.Element => {
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
      <div>
        <JobApplicationForm onSubmit={handleFormSubmit} />
        <ThankYouMessage open={snackbarOpen} onClose={handleSnackbarClose} />
      </div>
    </div>
  );
};

export default JobApplicationPage;
