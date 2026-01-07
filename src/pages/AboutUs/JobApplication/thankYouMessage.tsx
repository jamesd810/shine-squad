import { useEffect, useState } from "react";
import "./ThankYouMessage.scss";

type ThankYouMessageProps = {
  open: boolean;
  onClose: () => void;
};

export const ThankYouMessage = ({
  open,
  onClose,
}: ThankYouMessageProps): React.JSX.Element | null => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!open) return;

    // start fade-out shortly before closing so transition is visible
    const fadeTimer = setTimeout(() => setIsFading(true), 2500);
    const closeTimer = setTimeout(() => onClose(), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
      setIsFading(false);
    };
  }, [open, onClose]);

  return open ? (
    <div
      className={`thank-you-snackbar ${isFading ? "fade-out" : "fade-in"}`}
      onClick={onClose}
    >
      Thank you for applying! We will get back to you soon.
    </div>
  ) : null;
};
