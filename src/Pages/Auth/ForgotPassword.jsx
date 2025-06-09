import React, { useState } from "react";
import { hashPassword } from "../../utils/hash";

const ForgotPassword = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHashedPassword = await hashPassword(form.password);
    const formData = new FormData();
    formData.append("action", "forgot");
    formData.append("email", form.email);
    formData.append("newHashedPassword", newHashedPassword);

    const res = await fetch("https://script.google.com/macros/s/AKfycbw29YH0KBHit2VZIdgvtKChtMY5FftE2yqLm214bAfZKCbnYQiWbgQBJ9pIkOKTXiNUVw/exec", {
      method: "POST",
      body: formData,
    });

    const text = await res.text();
    setMessage(text);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Reset Password</h2>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="input-style" />
      <input name="password" placeholder="New Password" type="password" onChange={handleChange} required className="input-style" />
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Reset</button>
      <p className="text-sm text-gray-700 mt-2">{message}</p>
    </form>
  );
};

export default ForgotPassword;