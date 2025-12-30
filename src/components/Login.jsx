import { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/vendor/login", formData);
      onLogin(res.data.vendor);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
