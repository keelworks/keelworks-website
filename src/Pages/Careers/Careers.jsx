import React, { useEffect, useState } from "react";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your new Apps Script URL
    fetch("https://script.google.com/macros/s/AKfycbzL3qgWF2-yrCgQcgQXEbscWm-KugU1Q32wFgEDGKJYk1ePc4dVmgN_DAFiBsPktWcO/exec")
      .then(res => res.json())
      .then(data => {
        const openJobs = data.filter(job => job.Status === "Open");
        setJobs(openJobs);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching job listings:", error);
        setLoading(false);
      });
  }, []);

  const handleApply = (job) => {
    if (job.FormURL) {
      window.open(job.FormURL, '_blank');
    } else {
      alert("Application form not available for this position.");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading job opportunities...</div>;
  }

  return (
    <div className="px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Career Opportunities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.length === 0 ? (
          <p className="col-span-full text-center text-lg">No openings available at this time. Please check back later.</p>
        ) : (
          jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-3">{job.Title}</h3>
              <div className="mb-4">
                <p className="text-gray-700"><strong>Location:</strong> {job.Location}</p>
                <p className="text-gray-700"><strong>Type:</strong> {job.Type}</p>
              </div>
              <p className="text-gray-600 mb-6">{job.Description}</p>
              <button
                className="w-full bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300 font-semibold"
                onClick={() => handleApply(job)}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Careers;