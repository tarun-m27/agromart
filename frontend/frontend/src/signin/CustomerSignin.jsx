import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CustomerSignin = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
    phone: "",
    address: "",
    longitude: "",
    latitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleLoginRedirect = () => {
    navigate("/customer-login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-75">
      <div className="bg-white p-11 py-16 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">
          Customer Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* Confirm Password Input */}
          <input
            type="password"
            name="checkPassword"
            placeholder="Confirm Password"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.checkPassword}
            onChange={handleChange}
            required
          />
          {/* Phone Number Input */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {/* Address Input */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {/* Longitude Input */}
          <input
            type="text"
            name="longitude"
            placeholder="Longitude (e.g., -122.4194)"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
          {/* Latitude Input */}
          <input
            type="text"
            name="latitude"
            placeholder="Latitude (e.g., 37.7749)"
            className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.latitude}
            onChange={handleChange}
            required
          />

          <button className="bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition-colors duration-300 w-full">
            Sign In
          </button>
        </form>

        {/* Prompt for existing users */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={handleLoginRedirect}
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default CustomerSignin;
