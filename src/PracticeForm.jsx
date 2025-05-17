import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./PracticeForm.css"; // Import the CSS file

const schema = yup.object({
  email: yup.string().email("Invalid email format").required(),
  practiceName: yup.string().required(),
  practiceAddress: yup.string().required(),
  phoneNumber: yup.string().matches(/^\d{10}$/, "Must be 10 digits").required(),
  faxNumber: yup.string().matches(/^\d{10}$/, "Must be 10 digits").required(),
  website: yup.string().url("Invalid URL").required(),
  typeOfPractice: yup.string().required(),
  practiceTaxId: yup.string().required(),
  npi: yup.string().matches(/^\d{10}$/, "Must be 10 digits").required(),
  practiceLicenseNumber: yup.string().required(),
  statesOfPracticeLicensure: yup.string().required(),
});

const PracticeForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/practice/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        reset(); // Clear the form
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const fields = [
    { name: "email", label: "Email" },
    { name: "practiceName", label: "Practice Name" },
    { name: "practiceAddress", label: "Practice Address" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "faxNumber", label: "Fax Number" },
    { name: "website", label: "Website" },
    { name: "typeOfPractice", label: "Type of Practice" },
    { name: "practiceTaxId", label: "Practice Tax ID" },
    { name: "npi", label: "NPI" },
    { name: "practiceLicenseNumber", label: "Practice License Number" },
    { name: "statesOfPracticeLicensure", label: "States of Practice Licensure" },
  ];

  return (
    <div className="form-container">
      <img src="/logo.png" alt="Logo" className="logo" />
      <h2 className="form-title">Practice Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, label }) => (
          <div key={name} className="input-group">
            <label>{label}:</label>
            <input {...register(name)} />
            <p className="error-message">{errors[name]?.message}</p>
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PracticeForm;
