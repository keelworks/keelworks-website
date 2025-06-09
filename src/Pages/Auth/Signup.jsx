import React, { useState } from "react";
import { hashPassword } from "../../utils/hash";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const hashedPassword = await hashPassword(form.password);
      const formData = new FormData();
      formData.append("action", "signup");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("hashedPassword", hashedPassword);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw29YH0KBHit2VZIdgvtKChtMY5FftE2yqLm214bAfZKCbnYQiWbgQBJ9pIkOKTXiNUVw/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await res.text();
      setMessage(text.includes("Success") ? "✅ Successfully registered!" : `❌ ${text}`);
    } catch (err) {
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-3 max-w-md mx-auto mt-24 bg-white shadow-md rounded"
    >
      <h2 className="text-xl font-semibold">Signup</h2>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="input-style"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="input-style"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="input-style"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {loading ? "Registering..." : "Register"}
      </button>
      {message && (
        <p className="text-sm text-center mt-2 text-gray-700">{message}</p>
      )}
    </form>
  );
};

export default Signup;
