import React, { useEffect, useState, useRef } from "react";
import LoadingSpinner from "../../Components/KeelBot/LoadingSpinner/LoadingSpinner";

const charLimit = 2000; // change if you want a different truncate length

/** Case/space-insensitive column getter */
function flexiblePick(row = {}, keys = []) {
  const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const dict = Object.fromEntries(Object.keys(row).map((k) => [norm(k), row[k]]));
  for (const k of keys) {
    const v = dict[norm(k)];
    if (v != null && String(v).trim() !== "") return String(v).trim();
  }
  return undefined;
}

/** Normalize one row from the sheet into consistent keys */
function normalizeRow(row = {}) {
  const Title =
    flexiblePick(row, ["Title", "JobTitle", "Job Title", "Role", "Position", "Name"]) ||
    "Role (title pending)";

  const Location = flexiblePick(row, ["Location", "City"]) || "Remote";
  const Type = flexiblePick(row, ["Type", "Role Type"]) || "Volunteer";
  const Description =
    flexiblePick(row, ["Description", "Job Description", "Role Description"]) || "";

  const StatusRaw = flexiblePick(row, ["Status", "State"]) || "Open";
  const Status = String(StatusRaw).trim().toLowerCase();

  const FormURL = flexiblePick(row, ["FormURL", "Form URL", "Application Link", "Apply Link"]);

  return { Title, Location, Type, Description, Status, FormURL, _raw: row };
}

/* ────────────────────────────────────────────────────────── */
const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedIds, setExpandedIds] = useState(new Set());
  const jobsPerPage = 6;

  /* scroll-to-top ref */
  const topRef = useRef(null);

  /* fetch jobs */
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzL3qgWF2-yrCgQcgQXEbscWm-KugU1Q32wFgEDGKJYk1ePc4dVmgN_DAFiBsPktWcO/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        // Normalize keys and keep only open roles
        const normalized = (Array.isArray(data) ? data : []).map(normalizeRow);
        const openJobs = normalized.filter((j) => j.Status === "open");
        setJobs(openJobs);
      })
      .catch((err) => {
        console.error("Error fetching job listings:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  /* open application form */
  const handleApply = (job) =>
    job.FormURL
      ? window.open(job.FormURL, "_blank", "noopener,noreferrer")
      : alert("Application form not available for this position.");

  /* pagination calc */
  const indexOfLastJob = currentPage * jobsPerPage;
  const currentJobs = jobs.slice(indexOfLastJob - jobsPerPage, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage) || 1;

  /* page change + scroll to top */
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  /* toggle read-more */
  const toggleExpand = (idx) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
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
      {/* topRef ensures we can scroll back here */}
      <h2
        ref={topRef}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Career Opportunities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {currentJobs.length === 0 ? (
          <p className="col-span-full text-center text-lg">
            No openings available at this time. Please check back later.
          </p>
        ) : (
          currentJobs.map((job, idx) => {
            const globalIdx = (currentPage - 1) * jobsPerPage + idx;
            const isExpanded = expandedIds.has(globalIdx);
            const description = job.Description || "";
            const shortText =
              description.length > charLimit
                ? description.slice(0, charLimit) + "…"
                : description;

            return (
              <div
                key={globalIdx}
                className="job-card bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:scale-[1.03] flex flex-col h-full animate-fadeInUp"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* header & meta */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">{job.Title}</h3>
                    <div className="mb-4">
                      <p className="text-gray-700">
                        <strong>Location:</strong> {job.Location || "Remote"}
                      </p>
                      <p className="text-gray-700">
                        <strong>Type:</strong>
                        <span className="inline-block px-2 py-0.5 rounded bg-primary100 text-primary500 text-xs font-semibold ml-1">
                          {job.Type || "Volunteer"}
                        </span>
                      </p>
                    </div>

                    {/* description + read more */}
                    <p className="text-gray-600">
                      {isExpanded ? description : shortText}
                      {description.length > charLimit && (
                        <button
                          className="ml-2 text-primary500 font-semibold hover:underline focus:outline-none"
                          onClick={() => toggleExpand(globalIdx)}
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </p>
                  </div>

                  {/* apply button */}
                  <button
                    type="button"
                    className="mt-auto w-full bg-primary500 text-white px-4 py-2 rounded-full hover:bg-primary300 transition duration-300 font-semibold relative overflow-hidden ripple"
                    onClick={(e) => {
                      handleApply(job);
                      createRipple(e);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* pagination */}
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

/* ripple effect helper */
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - button.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    event.clientY - button.getBoundingClientRect().top - radius
  }px`;
  circle.classList.add("ripple-effect");
  const oldRipple = button.getElementsByClassName("ripple-effect")[0];
  if (oldRipple) oldRipple.remove();
  button.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

export default Careers;
