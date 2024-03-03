import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignInForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4040/signin", {
        username,
        email,
        password,
      });
      console.log(response.data);
      
      if (response.data.message === "Sign in successful") {
          // Redirect the user to the home page
          navigate("/home");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
};


  return (
    <div>
      <div class="min-h-screen flex items-center justify-center w-full ">
        <div class="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 ">Sign In</h2>
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
            <div className="mb-4">
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

            <div class="mb-4">
				
				<a href="/forgetpassword"
					class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a>
			</div>
			<div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked/>
					<label for="remember" class="ml-2 block text-sm text-gray-700 ">Remember me</label>
				</div>
				<a href="/signup"
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
			</div>


            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"   type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
