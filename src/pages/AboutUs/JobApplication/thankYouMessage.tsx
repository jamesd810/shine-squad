import "./ThankYouMessage.scss";

type ThankYouMessageProps = {
  open: boolean;
  onClose: () => void;
};

const ThankYouMessage = ({
  open,
  onClose,
}: ThankYouMessageProps): React.JSX.Element | null => {
  return open ? (
    <div className="thank-you-snackbar" onClick={onClose}>
      Thank you for applying! We will get back to you soon.
    </div>
  ) : null;
};
export default ThankYouMessage;
