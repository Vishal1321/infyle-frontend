import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [vendor, setVendor] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/vendor/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setVendor(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load vendor info");
      }
    };
    fetchVendor();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (error) return <p className="text-red-500">{error}</p>;

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {vendor.name}</h1>
      <p>Email: {vendor.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
