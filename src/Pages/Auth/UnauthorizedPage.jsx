import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-20 p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Unauthorized Access</h1>
      <p className="mb-6">You don't have permission to access this page.</p>
      <Link 
        to="/"
        className="inline-block bg-primary500 text-white px-6 py-2 rounded-full hover:bg-primary300 transition duration-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default UnauthorizedPage;