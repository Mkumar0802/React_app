import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const resetPassword = async () => {
        const token = window.location.search.split('=')[1]; // Extract token from URL query string

        try {
            if (newPassword !== confirmPassword) {
                setMessage('Passwords do not match');
                return;
            }

            const response = await axios.post(`http://localhost:4040/reset-password/${token}`, {
                newPassword
            });

            setMessage(response.data.message);
        } catch (error) {
            console.error('Error resetting password:', error);
            setMessage('An error occurred while resetting your password');
        }
    };

    return (
        <div>
            <div class="min-h-screen flex items-center justify-center w-full ">
        <div class="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 ">Reset Password</h2>
        <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700  mb-2">New Password: </label>
                <input    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700  mb-2">Confirm Password: </label>
                <input    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={resetPassword}>Reset Password</button>
            {message && <p>{message}</p>}
        </div>
        </div>
    </div>
    );
}

export default ResetPassword;
