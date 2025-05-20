import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);

    try {
      // 1. Save to localStorage first (for immediate functionality)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      if (users.some(user => user.email === formData.email)) {
        setError('Email already registered');
        setLoading(false);
        return;
      }
      
      // Create new user
      const userId = Date.now().toString();
      const newUser = {
        userId: userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password, // In a real app, you would hash this
        role: 'User',
        signupDate: new Date().toISOString(),
        status: 'Active'
      };
      
      // Add to users array in localStorage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // 2. Also send to Google Sheets (as backup)
      try {
        // Create URL with parameters for Google Sheets
        const url = new URL('https://script.google.com/macros/s/AKfycbytHS3Ec-2zU_3oQszzCnIOhpbA8Yqsa88F2gcezhSvOz4eu8kFkHaVeUY4_4zDDyj3/exec');
        url.searchParams.append('UserID', userId);
        url.searchParams.append('Email', formData.email);
        url.searchParams.append('Password', formData.password);
        url.searchParams.append('FirstName', formData.firstName);
        url.searchParams.append('LastName', formData.lastName);
        url.searchParams.append('Role', 'User');
        url.searchParams.append('SignupDate', new Date().toISOString());
        url.searchParams.append('Status', 'Active');
        
        // Send data to Google Sheets
        fetch(url.toString())
          .catch(err => {
            // Silent catch - we still want the app to work even if sheet sync fails
            console.log('Error syncing with Google Sheets:', err);
          });
      } catch (sheetError) {
        // Log but don't interrupt the flow
        console.error("Error syncing with Google Sheets:", sheetError);
      }
      
      alert('Account created successfully! Please log in.');
      navigate('/login');
    } catch (err) {
      setError('Error creating account. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for KeelWorks</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary500"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary500"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary500"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary500 text-white font-bold py-2 px-4 rounded-full hover:bg-primary300 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p>Already have an account? <Link to="/login" className="text-primary500 hover:underline">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;