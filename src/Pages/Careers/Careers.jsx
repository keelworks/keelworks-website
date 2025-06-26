import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../Components/KeelBot/LoadingSpinner/LoadingSpinner";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzL3qgWF2-yrCgQcgQXEbscWm-KugU1Q32wFgEDGKJYk1ePc4dVmgN_DAFiBsPktWcO/exec")
      .then((res) => res.json())
      .then((data) => {
        const openJobs = data.filter((job) => job.Status === "Open");
        setJobs(openJobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job listings:", error);
        setLoading(false);
      });
  }, []);

  const handleApply = (job) => {
    if (job.FormURL) {
      window.open(job.FormURL, "_blank");
    } else {
      alert("Application form not available for this position.");
    }
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Career Opportunities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {currentJobs.length === 0 ? (
          <p className="col-span-full text-center text-lg">
            No openings available at this time. Please check back later.
          </p>
        ) : (
          currentJobs.map((job, index) => (
            <div
              key={index}
              className="job-card bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:scale-[1.03] flex flex-col h-full animate-fadeInUp"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">{job.Title}</h3>
                  <div className="mb-4">
                    <p className="text-gray-700">
                      <strong>Location:</strong> {job.Location}
                    </p>
                    <p className="text-gray-700">
                      <strong>Type:</strong> <span className="inline-block px-2 py-0.5 rounded bg-primary100 text-primary500 text-xs font-semibold ml-1">{job.Type}</span>
                    </p>
                  </div>
                  <p className="text-gray-600">{job.Description}</p>
                </div>

                <button
                  className="mt-auto w-full bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300 font-semibold relative overflow-hidden ripple"
                  onClick={e => { handleApply(job); createRipple(e); }}
                  type="button"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border bg-white hover:bg-primary100 hover:scale-105 transition disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded border transition hover:scale-105 ${
                currentPage === i + 1
                  ? "bg-primary500 text-white"
                  : "bg-white hover:bg-primary100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border bg-white hover:bg-primary100 hover:scale-105 transition disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// Ripple effect for Apply button
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple-effect");
  const ripple = button.getElementsByClassName("ripple-effect")[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

export default Careers;
