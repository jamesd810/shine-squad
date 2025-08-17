import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = (): React.JSX.Element => {
  return (
    <div>
      <Spinner animation="border" variant="success" role="status" />
    </div>
  );
};

export default LoadingSpinner;
