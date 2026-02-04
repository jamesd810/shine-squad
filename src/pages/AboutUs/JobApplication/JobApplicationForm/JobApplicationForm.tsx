import React, { type ChangeEvent, useState, useRef } from "react";
import axios from "axios";
import isValidEmail from "../../../../utilities/isValidEmail";
import isValidPhoneNumber from "../../../../utilities/isValidPhoneNumber";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import {
  nameConstant,
  emailConstant,
  phoneConstant,
  minNameLengthMessage,
} from "../../../../constants";

import "./jobApplicationForm.scss";

type JobApplicationFormProps = {
  onSubmit: () => void;
};

type Application = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File;
};

const applicantDetails: Application = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  resume: {} as File,
};

const API_BASE =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_LOCALHOST_API_URL
    : process.env.API_URL;
const apiBaseClean = API_BASE;
const url = `${apiBaseClean}/apply`;

const JobApplicationForm = ({
  onSubmit,
}: JobApplicationFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState(applicantDetails);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  let message: string;

  const validateInput = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    message = "";

    if (name === "firstName") {
      if (!value) {
        message = nameConstant;
      } else if (value.length < 2) {
        message = minNameLengthMessage;
      }
    }
    if (name === "lastName") {
      if (!value) {
        message = nameConstant;
      } else if (value.length < 2) {
        message = minNameLengthMessage;
      }
    }
    if (name === "email") {
      if (!value) {
        message = emailConstant;
      } else if (name === "email" && value && !isValidEmail(value)) {
        message = "Invalid email address";
      }
    }
    if (name === "phone") {
      if (!value) {
        message = phoneConstant;
      }
    } else if (name === "phone" && value && !isValidPhoneNumber(value)) {
      message = "Invalid phone number";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const fieldValue = files ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
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
    userDataToSend.append("resume", formData.resume as File);

    try {
      await axios.post(url, userDataToSend);

      setFormData(applicantDetails);
      // clear the native file input so the browser UI no longer shows the selected file
      if (fileInputRef.current) fileInputRef.current.value = "";
      setErrors({});
      setLoading(false);
      onSubmit();
    } catch (error) {
      setLoading(false);
      console.error("An error occurred sending the resume: ", error);
    }
  };

  const isFormComplete =
    Boolean(formData.firstName) &&
    Boolean(formData.lastName) &&
    Boolean(formData.email) &&
    Boolean(formData.phone) &&
    Boolean(formData.resume);

  const hasErrors = Object.values(errors).some((v) => Boolean(v));

  return (
    <form onSubmit={handleSubmit}>
      <div className="app-form">
        <h2>Start Your Cleaning Professional Career Now!</h2>
        <div className="row">
          <div className="input-group">
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}

            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={validateInput}
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
              onBlur={validateInput}
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
              onBlur={validateInput}
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
              onBlur={validateInput}
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
            ref={fileInputRef}
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </label>

        <button
          type="submit"
          disabled={!isFormComplete || hasErrors || loading}
        >
          {loading ? <LoadingSpinner size={20} /> : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
