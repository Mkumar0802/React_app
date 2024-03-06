import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://node-task-backend.onrender.com/signup", {
        username,
        email,
        password,
      });
      console.log(response.data);
      // Assuming the response contains a success message
      if (response.data.message === "User created successfully") {
        // Redirect the user to the home page or any other route
        window.location.href = "/home"; // Change '/home' to the desired route
      } else if (response.data.message === "User already exists") {
        alert("User already exists");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <div class="min-h-screen flex items-center justify-center w-full ">
        <div class="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 ">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  mb-2">Username: </label>
            <input
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700  mb-2">Email: </label>
            <input
             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700  mb-2">Password: </label>
            <input
             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUpForm;
