"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./jobApplication.scss");
const JobApplicationForm = ({ onSubmit, }) => {
    const [formData, setFormData] = (0, react_1.useState)({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        resume: {},
    });
    const handleChange = (e) => {
        // @ts-ignore
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formPayload = new FormData();
        formPayload.append("fullName", formData.firstName);
        formPayload.append("fullName", formData.lastName);
        formPayload.append("email", formData.email);
        formPayload.append("phone", formData.phone);
        formPayload.append("experience", formData.experience);
        // formPayload.append("resume", formData.resume);
        try {
            const response = await fetch("http://localhost:5000/apply", {
                method: "POST",
                body: formPayload,
            });
            if (response.ok) {
                onSubmit(); // Show thank-you message
            }
            else {
                alert("Something went wrong. Please try again.");
            }
        }
        catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    };
    return (<form className="job-application-form" onSubmit={handleSubmit}>
      <div className="app-form">
        <h2>Start Your Cleaning Professional Career Now!</h2>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
        </label>
        <br />
        <label>
          Years of Experience:
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required min="0"/>
        </label>
        <br />
        <label>
          Upload Your Resume:
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required/>
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </div>
    </form>);
};
exports.default = JobApplicationForm;
