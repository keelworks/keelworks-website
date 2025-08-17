/*****************************************************************
 * Blog_new.jsx  –  KeelWorks “Blogs / Media” page
 *  ▸ Newsletter : opens PDF when you click the card
 *  ▸ Article    : paginated posts from blog.keelworks.org
 *  ▸ Media      : YouTube rows from Google-Sheet Apps Script
 *****************************************************************/
import React, { useState, useEffect, lazy, Suspense } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { newsLetters } from "./data";
import initialArticles from "./initialArticles.json"; // first 9 mapped items

const YouTube = lazy(() => import("react-youtube"));

const WP_BASE = "https://blog.keelworks.org/wp-json/wp/v2/posts?_embed";
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyTqWa2lpBigwckddK4ZpIY-UK1LzjbtrG56D_IWTxRVN9Kd47MkN4YdRjeu52DrYU3TA/exec";

/* Inline SVG placeholder (3:2) to avoid visible alt text when images are missing/broken */
const FALLBACK_IMG =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='100%25' height='100%25' fill='%23EEF2F7'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='central' font-family='Arial' font-size='42' fill='%2390A3B1'%3EKeelWorks%3C/text%3E%3C/svg%3E";

export default function Blog_new() {
  const [activeFilter, setActiveFilter] = useState("Newsletter");
  const [activePage, setActivePage] = useState(1);

  // Start with pre-fetched first page (already mapped: {title,date,image,link})
  const [articles, setArticles] = useState(initialArticles);
  const [videos, setVideos] = useState([]);

  const [refreshingA, setRefreshingA] = useState(true);
  const [loadingV, setLoadingV] = useState(true);

  const ITEMS_PER_PAGE = 9;

  // Fetch all WP posts in background and replace initial list
  useEffect(() => {
    (async () => {
      try {
        const PER_PAGE = 100;
        const first = await fetch(`${WP_BASE}&per_page=${PER_PAGE}&page=1`);
        if (!first.ok) throw new Error(first.statusText);

        const totalPages = parseInt(first.headers.get("X-WP-TotalPages") || "1", 10);

        let all = await first.json();
        const rest = await Promise.all(
          Array.from({ length: totalPages - 1 }, (_, i) =>
            fetch(`${WP_BASE}&per_page=${PER_PAGE}&page=${i + 2}`).then((r) => r.json())
          )
        );
        rest.forEach((chunk) => (all = all.concat(chunk)));

        const mapped = all.map((p) => ({
          title: p.title.rendered.replace(/<[^>]+>/g, ""),
          date: new Date(p.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMG,
          link: p.link,
        }));

        setArticles(mapped);
      } catch (err) {
        console.error("WordPress full-fetch error:", err);
      } finally {
        setRefreshingA(false);
      }
    })();
  }, []);

  // Fetch media only when Media tab is active
  useEffect(() => {
    if (activeFilter !== "Media") return;
    setLoadingV(true);
    fetch(SHEET_URL)
      .then((r) => r.json())
      .then((rows) =>
        setVideos(
          rows
            .filter((r) => r.videoId)
            .map((r) => ({
              ...r,
              date: new Date(r.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
            }))
        )
      )
      .catch((e) => {
        console.error("Sheet fetch error:", e);
        setVideos([]);
      })
      .finally(() => setLoadingV(false));
  }, [activeFilter]);

  // Build list & pagination
  const masterList = {
    Newsletter: newsLetters,
    Article: articles,
    Media: loadingV ? Array(3).fill({ skeleton: true }) : videos,
  }[activeFilter];

  const totalPages = Math.max(1, Math.ceil(masterList.length / ITEMS_PER_PAGE));

  const paginatedItems = masterList.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when switching tabs
  useEffect(() => setActivePage(1), [activeFilter]);

  const open = (url) => window.open(url, "_blank");

  return (
    <div className="w-screen bg-white flex justify-center">
      <div className="w-screen max-w-[3000px] my-[5rem] md:mt-[8rem] flex justify-center">
        <div className="m-[1rem] md:mx-[2rem] [@media(min-width:1100px)]:mx-[8rem] w-screen flex flex-col items-center gap-12">
          {/* Header */}
          <header className="w-full md:w-[755px] flex flex-col items-center gap-5 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Blog</h1>
            <p className="text-center text-sm md:text-lg">
              Discover stories, insights and media from the KeelWorks Foundation.
            </p>
          </header>

          {/* Tabs */}
          <nav className="w-full flex justify-center mb-6">
            {["Newsletter", "Article", "Media"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveFilter(t)}
                className={`px-6 py-2 text-sm font-semibold rounded-md transition-all ${
                  activeFilter === t ? "bg-[#DBA300] text-white" : "text-[#646464]"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>

          {/* Body */}
          <section className="w-full px-4 md:px-8 lg:px-24 flex flex-col items-center space-y-6">
            <p className="text-[#8995A9] text-sm text-center">
              Showing {masterList.length} {activeFilter}
              {masterList.length !== 1 && "s"}
              {activeFilter === "Article" && refreshingA && (
                <span className="ml-2 text-xs text-orange-500">(updating…)</span>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1170px]">
              {/* Newsletter / Article cards */}
              {activeFilter !== "Media" &&
                paginatedItems.map((item, i) =>
                  item.skeleton ? (
                    <div key={i} className="h-[310px] bg-gray-100 animate-pulse rounded-lg" />
                  ) : (
                    <article
                      key={i}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                      onClick={() => open(item.htmlLink ?? item.pdfFile ?? item.link)}
                    >
                      {/* Fixed 3:2 area; swap to placeholder on error; clear alt to avoid visible text */}
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full aspect-[3/2] object-cover bg-gray-100"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = FALLBACK_IMG;
                            e.currentTarget.alt = "";
                          }}
                        />
                      ) : (
                        <div className="w-full aspect-[3/2] bg-gray-100" />
                      )}

                      <div className="p-8 flex flex-col items-center gap-3">
                        <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                        <p className="text-xs text-[#8995A9]">{item.date}</p>
                      </div>
                    </article>
                  )
                )}

              {/* Media cards */}
              {activeFilter === "Media" && (
                <Suspense fallback={<div>Loading videos…</div>}>
                  {paginatedItems.map((vid, i) =>
                    vid.skeleton ? (
                      <div key={i} className="h-[310px] bg-gray-100 animate-pulse rounded-lg" />
                    ) : (
                      <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <YouTube
                          videoId={vid.videoId}
                          opts={{
                            width: "100%",
                            height: "200",
                            playerVars: { rel: 0, modestbranding: 1 },
                          }}
                        />
                        <div className="p-5 flex flex-col items-center gap-3">
                          <h3 className="text-lg font-semibold text-center">{vid.title}</h3>
                          <p className="text-xs text-[#8995A9]">{vid.date}</p>
                          <button
                            onClick={() => open(`https://youtu.be/${vid.videoId}`)}
                            className="bg-white border border-[#8995A9] text-[#8995A9] rounded-full px-8 py-2 text-sm font-bold hover:bg-[#DBA300] hover:text-white transition-colors"
                          >
                            Watch on YouTube
                          </button>
                        </div>
                      </article>
                    )
                  )}
                </Suspense>
              )}
            </div>
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <footer className="w-full p-4 flex flex-col items-center space-y-4">
              <div className="flex items-center rounded-lg border">
                <button
                  className="p-3 text-[#637381]"
                  onClick={() => setActivePage((p) => Math.max(p - 1, 1))}
                  disabled={activePage === 1}
                >
                  <FaChevronLeft />
                </button>
                <span className="px-4 py-3 bg-[#FDDE82] text-fontSecondary">
                  {activePage}/{totalPages}
                </span>
                <button
                  className="p-3 text-[#637381]"
                  onClick={() => setActivePage((p) => Math.min(p + 1, totalPages))}
                  disabled={activePage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}
