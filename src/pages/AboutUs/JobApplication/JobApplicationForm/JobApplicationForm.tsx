import React, { type ChangeEvent, useState } from "react";
import axios from "axios";
import isValidEmail from "../../../../utilities/isValidEmail";
import isValidPhoneNumber from "../../../../utilities/isValidPhoneNumber";
import Spinner from "react-bootstrap/Spinner";
import "./jobApplicationForm.scss";

type JobApplicationFormProps = {
  onSubmit: () => void;
};

type Application = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  resume?: File;
};
const applicantDetails: Application = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  experience: "",
  resume: undefined,
};
const JobApplicationForm = ({
  onSubmit,
}: JobApplicationFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState(applicantDetails);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  let message: string;

  const handleNameInput = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    message = "";
    if (name === "email" && !isValidEmail(value)) {
      message = "Invalid email address";
    }
    if (name === "phone" && !isValidPhoneNumber(value)) {
      message = "Invalid phone number";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: value ? message : "",
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const onClick = () => {
    setErrors({});
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    const userDataToSend = new FormData();
    userDataToSend.append("firstName", formData.firstName);
    userDataToSend.append("lastName", formData.lastName);
    userDataToSend.append("email", formData.email);
    userDataToSend.append("phone", formData.phone);
    userDataToSend.append("experience", formData.experience);
    userDataToSend.append("resume", formData.resume as File);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/apply",
        userDataToSend,
      );

      if (response.status === 200) {
        alert("Email sent, thank you!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="app-form">
        <h2>Start Your Cleaning Professional Career Now!</h2>

        <div className="row">
          <div className="input-group">
            {errors.firstName && <div className="error">{errors.lastName}</div>}

            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            {errors.lastName && <div className="error">{errors.lastName}</div>}

            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            {errors.email && <div className="error">{errors.email}</div>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleNameInput}
              onClick={onClick}
              required
              placeholder="Email Address"
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleNameInput}
              required
              placeholder="Phone Number"
            />

            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
        </div>

        <br />

        <label>
          Resume:
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </label>

        {loading ? (
          <Spinner animation="border" />
        ) : (
          <button type="submit">Submit Application</button>
        )}
      </div>
    </form>
  );
};

export default JobApplicationForm;
