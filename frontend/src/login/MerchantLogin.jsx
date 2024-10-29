import React, { useState } from "react";

const MerchantLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Merchant Login Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-75">
      <div className="bg-white p-8 py-10 rounded-lg shadow-md w-full max-w-md">
        {" "}
        {/* Adjusted padding for a tighter layout */}
        <h2 className="text-2xl font-bold text-black mb-4">
          Merchant Existing User Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded w-full mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="py-3">
            {" "}
            {/* Adjusted padding for a balanced button area */}
            <button className="bg-green-600 text-white font-semibold p-3 rounded hover:bg-green-700 transition-colors duration-300 w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MerchantLogin;
