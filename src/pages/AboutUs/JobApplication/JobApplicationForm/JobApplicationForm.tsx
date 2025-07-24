import React, { type ChangeEvent, useState } from "react";
import axios from "axios";
import isValidEmail from "../../../../utilities/isValidEmail";
import isValidPhoneNumber from "../../../../utilities/isValidPhoneNumber";
import "./jobApplicationForm.scss";

type JobApplicationFormProps = {
  onSubmit: () => void;
};
const applicant = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  experience: "",
  resume: {},
};
const JobApplicationForm = ({
  onSubmit,
}: JobApplicationFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState(applicant);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  let message: string;

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email" && !isValidEmail(value)) {
      message = "Invalid email address";
    }
    if (name === "phone" && !isValidPhoneNumber(value)) {
      message = "Invalid phone number";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
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

    const formPayload = new FormData();
    formPayload.append("firstName", formData.firstName);
    formPayload.append("lastName", formData.lastName);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("experience", formData.experience);
    formPayload.append("resume", formData.resume as unknown as string | Blob);

    try {
      const response = await axios.post("http://localhost:5000/api/apply", {
        method: "POST",
        body: formPayload,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 200) {
        onSubmit();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="app-form">
        <h2>Start Your Cleaning Professional Career Now!</h2>

        {errors.firstName && <div className="error">{errors.lastName}</div>}
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {errors.lastName && <div className="error">{errors.lastName}</div>}
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={onClick}
          required
          placeholder="Email Address"
        />

        {errors.phone && <div className="error">{errors.phone}</div>}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          placeholder="Phone Number"
        />

        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          min="0"
          placeholder="Years of Experience"
        />
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
        <button type="submit">Submit Application</button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
