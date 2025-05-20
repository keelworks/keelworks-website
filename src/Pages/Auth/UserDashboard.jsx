// src/Pages/Auth/UserDashboard.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user data from localStorage
    const userJson = localStorage.getItem('user');
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h2>
        <Link 
          to="/login"
          className="bg-primary500 text-white px-6 py-2 rounded-full hover:bg-primary300 transition duration-300"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.firstName}!</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <p className="mb-2"><strong>Name:</strong> {user.firstName} {user.lastName} {user.userId ? '(SD | OPT)' : ''}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Activities</h2>
          <p className="text-gray-600">You haven't joined any activities yet.</p>
          <Link 
            to="/getinvolved"
            className="mt-4 inline-block bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300"
          >
            Explore Opportunities
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
          <div className="border-b pb-2 mb-2">
            <p className="font-medium">New volunteer positions available</p>
            <p className="text-sm text-gray-600">May 12, 2025</p>
          </div>
          <div className="border-b pb-2 mb-2">
            <p className="font-medium">KeelMaster program launching soon</p>
            <p className="text-sm text-gray-600">May 8, 2025</p>
          </div>
          <Link 
            to="/blog"
            className="mt-4 inline-block text-primary500 hover:underline"
          >
            View all updates →
          </Link>
        </div>
      </div>
      
      <div className="mt-8 bg-primary500 bg-opacity-10 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="mb-4">If you have any questions or need assistance, please contact our support team.</p>
        <Link 
          to="/contactus"
          className="inline-block bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;