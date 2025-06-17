import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import cleanKitchen from "../../../assets/images/photo-4.jpg";
import "./reviews.scss";

const Reviews = (): React.JSX.Element => {
  return (
    <Card className="card-component">
      <Typography className="feedback-header" component={"div"} variant="h4">
        We'd love your feedback!
      </Typography>
      <CardMedia
        className="card-image"
        component="img"
        image={cleanKitchen}
        alt="Shine Squad Chicago Reviews"
        title="Shine Squad Chicago Reviews"
        loading="lazy"
      />
      <Typography component="div">
        At Shine Squad Chicago, we believe a clean space creates a happier,
        healthier environment — and nothing makes us prouder than hearing how
        our work impacts our clients’ lives. Read real reviews from homeowners
        and businesses who trust us to make their spaces sparkle.
      </Typography>
      <Typography component={"div"}>
        We’re committed to delivering exceptional service, every time — and your
        feedback helps us grow and serve you better. If you’ve recently used our
        cleaning services, we’d love to hear from you too!
      </Typography>
      <Button
        className="review-button"
        variant="contained"
        href="https://g.page/r/CXVFFWihZwS6EAI/review"
      >
        Leave us a review!
      </Button>
    </Card>
  );
};

export default Reviews;
