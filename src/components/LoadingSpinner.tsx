import { ClipLoader } from "react-spinners";

type LoadingSpinnerProps = {
  size?: number
}

const LoadingSpinner = ({ size }: LoadingSpinnerProps): React.JSX.Element => {
  return (
    <div>
      <ClipLoader size={size} />
    </div>
  );
};

export default LoadingSpinner;
