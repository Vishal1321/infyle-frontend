import { useState } from "react";
import axios from "axios";

const Signup = ({ onSignup }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/vendor/signup", formData);
      onSignup(res.data.vendor);
      alert("Signup successful!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Signup</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
