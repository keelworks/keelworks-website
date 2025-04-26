import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxCl9eKDy2O8h5sQm001b02W3yuN8W9sKpOPfi8TO7BevX-0SJCOL5MYdlgzj09GGrjIg/exec")
      .then(res => res.json())
      .then(data => {
        const openJobs = data.filter(job => job.Status === "Open");
        setJobs(openJobs);
      });
  }, []);

  const handleApply = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/careers/apply/${slug}`);
  };

  return (
    <div className="px-8 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Current Openings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.length === 0 ? (
          <p>No openings available at this time.</p>
        ) : (
          jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-slide"
              onClick={() => handleApply(job.Title)}
            >
              <h2 className="text-xl font-bold mb-2">{job.Title}</h2>
              <p><strong>Location:</strong> {job.Location}</p>
              <p><strong>Type:</strong> {job.Type}</p>
              <p className="mt-2 text-gray-600">{job.Description}</p>
              <button
                className="mt-4 bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300"
              >
                Apply
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Careers;
