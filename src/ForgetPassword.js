import React, { useState } from 'react';
import axios from 'axios';






function ForgetPassword() {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4040/forget', { email });
            alert('Password reset link sent to your email.');
        } catch (error) {
            console.error('Error sending password reset link:', error);
            alert('An error occurred. Please try again later.');
        }
    };



  return (
    <div>
      <div>
      <div class="min-h-screen flex items-center justify-center w-full ">
        <div class="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
            <h2  className="text-2xl font-bold text-center mb-4 ">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700  mb-2">Email:</label>
                    <input className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Submit</button>
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ForgetPassword























