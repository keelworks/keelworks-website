import React, { useState } from "react";
import { useParams } from "react-router-dom";

const JobApplicationForm = () => {
  const { jobSlug } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    linkedin: "",
    position: jobSlug.replace(/-/g, " "),
    source: "",
    startDate: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const uploadToGoogleAppsScript = async (data) => {
    const formDataToSend = new FormData();

    for (const key in data) {
      if (key === "resume") {
        const file = data.resume;
        const reader = await file.arrayBuffer();
        const base64 = btoa(
          new Uint8Array(reader).reduce((data, byte) => data + String.fromCharCode(byte), "")
        );
        formDataToSend.append("fileContent", base64);
        formDataToSend.append("mimeType", file.type);
        formDataToSend.append("fileName", file.name);
      } else {
        formDataToSend.append(key, data[key]);
      }
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxNuC6lamnvM9kiTKAZGF2KG6LxGnNtltrJfOcdcMWkWqK22JMx6iIgnzSVBkdnx7LbdA/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    return response.text();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadToGoogleAppsScript({
        ...formData,
        fullName: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
      });
      alert("Application submitted successfully!");
      setFormData({ ...formData, resume: null });
    } catch (err) {
      console.error(err);
      alert("Failed to submit the application.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Job Application</h1>
      <p className="mb-8 text-gray-700">
        Please complete the form below to apply for the position:{" "}
        <span className="font-semibold capitalize">{formData.position}</span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields remain the same as your working version */}
      </form>
    </div>
  );
};

export default JobApplicationForm;
