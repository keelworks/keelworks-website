import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  // Check if user is logged in
  const userJson = localStorage.getItem('user');
  
  if (!userJson) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  
  const user = JSON.parse(userJson);
  
  // If a specific role is required, check for it
  if (requiredRole && user.role !== requiredRole) {
    // User doesn't have the required role
    return <Navigate to="/unauthorized" replace />;
  }
  
  // User is authenticated and has the required role
  return children;
};

export default ProtectedRoute;