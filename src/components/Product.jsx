import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // assuming token is saved after login
      await axios.post(
        "http://localhost:5000/vendor/product",
        { name, price, category },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Product added successfully!");
      setName("");
      setPrice("");
      setCategory("");
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6"
    >
      <h3 className="text-lg font-bold mb-4">Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default Product;
