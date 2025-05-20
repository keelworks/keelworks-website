import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVolunteers: 0,
    activeJobs: 0
  });

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
    
    // For demo purposes, we're using dummy data
    // In a real app, you would fetch this from your API
    setStats({
      totalUsers: 125,
      totalVolunteers: 42,
      activeJobs: 8
    });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto my-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-4xl font-bold text-primary500">{stats.totalUsers}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Active Volunteers</h3>
          <p className="text-4xl font-bold text-primary500">{stats.totalVolunteers}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Open Positions</h3>
          <p className="text-4xl font-bold text-primary500">{stats.activeJobs}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Role</th>
                <th className="text-left py-2">Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Jane Smith</td>
                <td className="py-2">User</td>
                <td className="py-2">May 12, 2025</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">John Doe</td>
                <td className="py-2">Volunteer</td>
                <td className="py-2">May 10, 2025</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Sarah Johnson</td>
                <td className="py-2">User</td>
                <td className="py-2">May 8, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Position</th>
                <th className="text-left py-2">Applicant</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Volunteer Manager</td>
                <td className="py-2">Michael Brown</td>
                <td className="py-2">New</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Instructional Designer</td>
                <td className="py-2">Emily Davis</td>
                <td className="py-2">Reviewing</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">UX Researcher</td>
                <td className="py-2">David Wilson</td>
                <td className="py-2">Interview</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="bg-primary500 text-white px-6 py-2 rounded-full hover:bg-primary300 transition duration-300">
          Manage Job Listings
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;