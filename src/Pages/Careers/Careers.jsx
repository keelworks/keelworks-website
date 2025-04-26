import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxCl9eKDy2O8h5sQm001b02W3yuN8W9sKpOPfi8TO7BevX-0SJCOL5MYdlgzj09GGrjIg/exec")
      .then((res) => res.json())
      .then((data) => {
        const openJobs = data.filter((job) => job.Status === "Open");
        setJobs(openJobs);
      });
  }, []);

  return (
    <div className="px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Current Openings</h1>
      {jobs.length === 0 ? (
        <p>No openings available at this time.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg bg-white shadow hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold">{job.Title}</h2>
              <p><strong>Location:</strong> {job.Location}</p>
              <p><strong>Type:</strong> {job.Type}</p>
              <p className="mt-2 text-sm text-gray-700">{job.Description}</p>
              <button
                className="mt-4 px-4 py-2 bg-primary500 text-white rounded hover:bg-primary300"
                onClick={() =>
                  navigate(`/careers/apply/${job.Title.toLowerCase().replace(/\s+/g, "-")}`)
                }
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Careers;
