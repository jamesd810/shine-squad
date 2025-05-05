import React, { useState } from "react";

type JobApplicationFormProps = {
  onSubmit: () => void;
};

const JobApplicationForm = ({
  onSubmit,
}: JobApplicationFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("experience", formData.experience);
    formPayload.append("resume", formData.resume);

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        onSubmit(); // Show thank-you message
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
      <h2>Start Your Cleaning Professional Career Now!</h2>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Years of Experience:
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          min="0"
        />
      </label>
      <br />
      <label>
        Upload Your Resume:
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
