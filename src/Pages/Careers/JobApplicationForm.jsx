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
          new Uint8Array(reader).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        formDataToSend.append("fileContent", base64);
        formDataToSend.append("mimeType", file.type);
        formDataToSend.append("fileName", file.name);
      } else {
        formDataToSend.append(key, data[key]);
      }
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzyLaq4bWvqApKMgJxkoQNu1tZKWLJvVLfYyKqhUvGVBjoyt37zzC2dH7XO2hmG-2pfWA/exec",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-style"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            className="input-style"
            value={formData.middleName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-style"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="date"
          name="birthDate"
          className="input-style"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="address1"
            placeholder="Street Address"
            className="input-style"
            value={formData.address1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Street Address Line 2"
            className="input-style"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input-style"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            className="input-style"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Postal/Zip Code"
            className="input-style"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-style"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input-style"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          className="input-style"
          value={formData.linkedin}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="source"
            className="input-style"
            value={formData.source}
            onChange={handleChange}
            required
          >
            <option value="">How did you hear about us?</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="date"
            name="startDate"
            className="input-style"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">
            Upload Your Resume
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="w-full"
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          rows={5}
          className="input-style"
          value={formData.coverLetter}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-primary500 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary300 transition duration-300"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
