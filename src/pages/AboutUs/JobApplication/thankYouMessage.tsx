import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

type ThankYouMessageProps = {
  open: boolean;
  onClose: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => void;
};

const ThankYouMessage = ({
  open,
  onClose,
}: ThankYouMessageProps): React.JSX.Element => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message="Thank you for applying! We will get back to you soon."
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    />
  );
};

export default ThankYouMessage;
