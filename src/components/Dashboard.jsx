import React from "react";
import Product from "./Product";

const Dashboard = ({ vendor }) => {
  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Welcome, {vendor.email}</h2>
      <p className="text-gray-700 mb-4">This is your dashboard.</p>
      <Product />
    </div>
  );
};

export default Dashboard;
