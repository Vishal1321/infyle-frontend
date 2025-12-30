import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/vendor/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      onLogin(res.data.vendor);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6
    ">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6" style={{ height: "30vh" }}>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Vendor Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-full justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white font-semibold p-2 rounded-md hover:bg-green-600 transition-colors text-base"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
