import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Otprestpassword() {
    let navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");


  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4040/reset", {
        email,
        otp,
        newPassword,
       
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });
      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. or OTP expires Please try again later.",
      });
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center w-full ">
      <div class="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 ">
          Reset Password for: {email}
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  mb-2">
              Enter OTP:
            </label>
            <input
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700  mb-2">
              Enter New Password:
            </label>
            <input
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Otprestpassword;
