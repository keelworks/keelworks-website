import React, { useState } from "react";
import { verifyPassword } from "../../utils/hash";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("action", "login");
    data.append("email", form.email);

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbw29YH0KBHit2VZIdgvtKChtMY5FftE2yqLm214bAfZKCbnYQiWbgQBJ9pIkOKTXiNUVw/exec",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.text();
    try {
      const parsed = JSON.parse(result);
      const isMatch = await verifyPassword(form.password, parsed.hashedPassword);
      if (isMatch) {
        setMessage("Login successful");
        setTimeout(() => navigate("/"), 1000); // redirect to home after 1 sec
      } else {
        setMessage("Incorrect password");
      }
    } catch {
      setMessage(result);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
          className="input-style"
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
          className="input-style"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
        >
          Login
        </button>

        {message && (
          <p className="text-sm text-center text-gray-700">{message}</p>
        )}

        <div className="flex justify-between text-sm mt-4 text-gray-600">
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
